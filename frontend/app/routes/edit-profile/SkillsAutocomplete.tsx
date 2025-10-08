import React, { useState, useRef, useId } from "react";
import { Badge } from "~/components/ui/badge";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "~/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import { X } from "lucide-react";
import type { PublicSkill1 } from "~/api/api-types";
import { type FormScope, useField } from "@rvf/react-router";
import { Label } from "@radix-ui/react-label";
import { keyToLabel } from "~/utils";

interface SkillsAutocompleteProps {
  scope: FormScope<string>;
  skills: PublicSkill1[];
  label?: string;
}

export const SkillsAutocomplete: React.FC<SkillsAutocompleteProps> = ({
  scope,
  skills: dbSkills,
  label: _label,
}) => {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const field = useField(scope);
  const name = field.name();
  const value = field.value();
  const onChange = field.onChange;
  const errorMessage = field.error();

  const infoId = useId();
  const inputId = useId();
  const errorId = useId();

  // If no label is given, use `name` formatted with `keyToLabel` function.
  // If no name is given either, we leave label undefined. It won't be rendered.
  const label = _label ?? keyToLabel(name);

  const describedByIds: string[] = [infoId];
  if (errorMessage) describedByIds.push(errorId);

  // Parse skills from comma-separated string
  const inputSkills = value
    ? value
        .split(",")
        .map((s) => s.trim())
        .filter((s) => s)
    : [];

  // Add skill
  const addSkill = (skill: string) => {
    const trimmedSkill = skill.trim();
    if (!trimmedSkill || inputSkills.includes(trimmedSkill)) return;

    const newSkills = [...inputSkills, trimmedSkill];
    onChange(newSkills.join(", "));
    setInputValue("");
    setShowSuggestions(false);
  };

  // Remove skill
  const removeSkill = (skillToRemove: string) => {
    const newSkills = inputSkills.filter((s) => s !== skillToRemove);
    onChange(newSkills.join(", "));
  };

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);

    if (newValue.trim().length > 0) {
      const filteredSkills = dbSkills.filter(
        (dbSkill) =>
          dbSkill.name.toLowerCase().includes(newValue.toLowerCase()) &&
          !inputSkills.some((inputSkill) => inputSkill === dbSkill.name),
      );
      setSuggestions(filteredSkills.map((skill) => skill.name));
      setShowSuggestions(filteredSkills.length > 0);
    } else {
      setShowSuggestions(false);
    }
  };

  // Handle key press
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.trim()) {
      e.preventDefault();
      addSkill(inputValue);
    } else if (e.key === "," && inputValue.trim()) {
      e.preventDefault();
      addSkill(inputValue);
    } else if (e.key === "Backspace" && !inputValue && inputSkills.length > 0) {
      e.preventDefault();
      removeSkill(inputSkills[inputSkills.length - 1]);
    }
  };

  // Handle suggestion select
  const handleSuggestionSelect = (skill: string) => {
    addSkill(skill);
    inputRef.current?.focus();
  };

  // Handle blur event
  const handleBlur = () => {
    /*    if (inputValue.trim()) {
      addSkill(inputValue);
    }*/
  };

  return (
    <div className="space-y-2">
      {label && (
        <Label
          htmlFor={inputId}
          className="leading-none block text-sm font-medium"
        >
          {label}
        </Label>
      )}
      <Popover open={showSuggestions} onOpenChange={setShowSuggestions}>
        <PopoverTrigger asChild>
          <div className="flex min-h-20 w-full flex-wrap items-start gap-2 rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background focus-within:outline-none focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 md:text-sm">
            {/* Display existing skills as pills inside the input */}
            {inputSkills.map((skill) => (
              <Badge
                key={skill}
                variant="outline"
                className="pl-3 pr-1 py-1 text-sm flex font-normal items-center gap-1"
              >
                {skill}
                <button
                  type="button"
                  onClick={() => removeSkill(skill)}
                  className="ml-1 rounded-full p-0.5 hover:bg-secondary-foreground/20 transition-colors"
                >
                  <X className="w-3 h-3" />
                </button>
              </Badge>
            ))}

            {/* Input field without border */}
            <input
              ref={inputRef}
              id={inputId}
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              onBlur={handleBlur}
              placeholder={
                inputSkills.length === 0
                  ? "App Development, Branding, Advertising, etc."
                  : ""
              }
              className="flex-1 min-w-[120px] min-h-7 bg-transparent outline-none placeholder:text-muted-foreground"
              aria-describedby={
                describedByIds.length > 0 ? describedByIds.join(" ") : undefined
              }
            />
            <input type="hidden" name={name} value={value} />
          </div>
        </PopoverTrigger>
        <PopoverContent
          className="w-[var(--radix-popover-trigger-width)] p-0 bg-popover border-border z-50"
          align="start"
          onOpenAutoFocus={(e) => e.preventDefault()}
        >
          <Command>
            <CommandList>
              <CommandGroup>
                {suggestions.slice(0, 10).map((skill) => (
                  <CommandItem
                    key={skill}
                    value={skill}
                    onSelect={() => handleSuggestionSelect(skill)}
                    className="cursor-pointer"
                  >
                    {skill}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      <div className="text-sm text-muted-foreground" id={infoId}>
        Type to add services you need. Press Enter or comma to add.
      </div>
      {errorMessage && (
        <div className="text-sm text-destructive" id={errorId}>
          {errorMessage}
        </div>
      )}
    </div>
  );
};
