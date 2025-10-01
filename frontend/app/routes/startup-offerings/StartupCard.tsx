import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Building2, MessageSquare } from "lucide-react";
import { Badge } from "~/components/ui/badge";
import { clsx } from "clsx";
import ConnectModal from "~/routes/startup-offerings/ConnectModal";
import type { PublicUser1 } from "~/api/api-types";

interface StartupCardProps {
  user: PublicUser1;
  className?: string;
}

export default function StartupCard({ user, className }: StartupCardProps) {
  const offers = ["Cloud Infrastructure", "DevOps"];
  const needs = ["Frontend Development", "UI/UX Design"];

  return (
    /* TODO: Add visual feedback box shadow on card hover */
    <Card as="article" className={clsx("", className)}>
      <CardHeader as="header" className="pb-3">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-gradient-primary">
            <Building2 className="w-5 h-5 text-primary-foreground" />
          </div>
          <CardTitle as="h3" className="text-lg font-semibold">
            {user.company?.name}
          </CardTitle>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {user.company?.description}
        </p>
      </CardHeader>

      <CardContent className="space-y-4">
        <div>
          <h4 className="text-sm font-medium text-foreground mb-2">Offers:</h4>
          <div className="flex flex-wrap gap-1.5">
            {user.offeredSkills.map((skill, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {skill.name}
              </Badge>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-sm font-medium text-foreground mb-2">Needs:</h4>
          <div className="flex flex-wrap gap-1.5">
            {user.neededSkills.map((skill, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {skill.name}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>

      <CardFooter as="footer">
        <ConnectModal />
      </CardFooter>
    </Card>
  );
}
