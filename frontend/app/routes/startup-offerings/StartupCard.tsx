import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Building2, ChevronDown, ChevronUp, User } from "lucide-react";
import { Badge } from "~/components/ui/badge";
import { clsx } from "clsx";
import ConnectModal from "~/routes/startup-offerings/ConnectModal";
import type { PublicUser1, Skill0 } from "~/api/api-types";
import { useId, useState } from "react";
import { cn } from "~/lib/utils";
import { Button } from "~/components/ui/button";
import { useOptionalUser } from "~/utils";
import LoginPromptModal from "~/routes/startup-offerings/LoginPromptModal";
import { match, P } from "ts-pattern";
import ButtonLink from "~/components/ButtonLink";

interface StartupCardProps {
  user: PublicUser1;
  highlightedSkillId: number;
  className?: string;
}

export default function StartupCard({
  user: cardUser,
  highlightedSkillId,
  className,
}: StartupCardProps) {
  const [expanded, setExpanded] = useState(false);
  const id = useId();
  const user = useOptionalUser();

  const placeHighlightedSkillsFirst = (skills: Skill0[]) => {
    const highlightedSkills = skills.filter(
      (skill: Skill0) => skill.id === highlightedSkillId,
    );
    const otherSkills = skills.filter(
      (skill: Skill0) => skill.id !== highlightedSkillId,
    );
    return [...highlightedSkills, ...otherSkills];
  };
  const offeredSkillsSorted = placeHighlightedSkillsFirst(
    cardUser.offeredSkills,
  );
  const neededSkillsSorted = placeHighlightedSkillsFirst(cardUser.neededSkills);

  const isSameUserAsCard = (user && user.id === cardUser.id) ?? false;

  return (
    /* TODO: Add visual feedback box shadow on card hover */
    <Card
      as="article"
      className={clsx(
        "gap-4 relative",
        isSameUserAsCard && "border-primary/40",
        className,
      )}
    >
      {isSameUserAsCard && (
        <Badge className="absolute -top-2 -right-2">Your startup</Badge>
      )}
      <CardHeader as="header" className="gap-0">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-gradient-primary">
            <Building2 className="w-5 h-5 text-primary-foreground" />
          </div>
          <CardTitle as="h3" className="text-lg font-semibold">
            {cardUser.company?.name}
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
            {cardUser.company?.description}
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
            {offeredSkillsSorted.map((skill) => (
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
            {neededSkillsSorted.map((skill) => (
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
        {match(user)
          .with(P.nullish, () => <LoginPromptModal />)
          .when(
            (user) => user.id === cardUser.id,
            () => (
              <ButtonLink
                variant="default"
                className="w-full"
                to="/edit-profile"
              >
                <User />
                Edit Profile
              </ButtonLink>
            ),
          )
          .otherwise(() => (
            <ConnectModal user={cardUser} />
          ))}
      </CardFooter>
    </Card>
  );
}
