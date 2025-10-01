import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Building2, ChevronDown, ChevronUp } from "lucide-react";
import { Badge } from "~/components/ui/badge";
import { clsx } from "clsx";
import ConnectModal from "~/routes/startup-offerings/ConnectModal";
import type { PublicUser1 } from "~/api/api-types";
import { useId, useState } from "react";
import { cn } from "~/lib/utils";
import { Button } from "~/components/ui/button";

interface StartupCardProps {
  user: PublicUser1;
  highlightedSkillId: number;
  className?: string;
}

export default function StartupCard({
  user,
  highlightedSkillId,
  className,
}: StartupCardProps) {
  const [expanded, setExpanded] = useState(false);

  const id = useId();

  return (
    /* TODO: Add visual feedback box shadow on card hover */
    <Card as="article" className={clsx("gap-4", className)}>
      <CardHeader as="header" className="gap-0">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-gradient-primary">
            <Building2 className="w-5 h-5 text-primary-foreground" />
          </div>
          <CardTitle as="h3" className="text-lg font-semibold">
            {user.company?.name}
          </CardTitle>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div>
          <p
            className={cn(
              "text-sm text-muted-foreground leading-relaxed transition-all",
              !expanded && "line-clamp-2",
            )}
            id={id}
          >
            {user.company?.description}
          </p>
          <Button
            className="relative px-0! mt-2 text-muted-foreground "
            variant="ghost"
            onClick={() => setExpanded((expanded) => !expanded)}
          >
            {expanded ? <ChevronUp /> : <ChevronDown />}
            Show {expanded ? "less" : "more"}
          </Button>
        </div>
        <div>
          <h4 className="text-sm font-medium text-foreground mb-2">Offers:</h4>
          <div className="h-[1.375rem] flex items-center overflow-x-scroll no-scrollbar gap-1.5">
            {user.offeredSkills.map((skill, index) => (
              <Badge
                key={skill.id}
                variant={
                  skill.id === highlightedSkillId ? "default" : "secondary"
                }
                className="rounded-full"
              >
                {skill.name}
              </Badge>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-sm font-medium text-foreground mb-2">Needs:</h4>
          <div className="h-[1.375rem] flex items-center overflow-x-scroll no-scrollbar gap-1.5">
            {user.neededSkills.map((skill, index) => (
              <Badge
                key={skill.id}
                variant={
                  skill.id === highlightedSkillId ? "default" : "secondary"
                }
                className="rounded-full"
              >
                {skill.name}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>

      <CardFooter as="footer" className="mt-2">
        <ConnectModal user={user} />
      </CardFooter>
    </Card>
  );
}
