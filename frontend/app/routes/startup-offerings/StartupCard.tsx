import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Building2, MessageSquare } from "lucide-react";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { clsx } from "clsx";

interface StartupCardProps {
  className?: string;
}

export default function StartupCard({ className }: StartupCardProps) {
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
            CloudScale Infrastructure
          </CardTitle>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          DevOps and cloud infrastructure specialists helping companies build
          scalable, reliable systems.
        </p>
      </CardHeader>

      <CardContent className="space-y-4">
        <div>
          <h4 className="text-sm font-medium text-foreground mb-2">Offers:</h4>
          <div className="flex flex-wrap gap-1.5">
            {offers.map((offer, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {offer}
              </Badge>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-sm font-medium text-foreground mb-2">Needs:</h4>
          <div className="flex flex-wrap gap-1.5">
            {needs.map((need, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {need}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>

      <CardFooter as="footer">
        <Button size="sm" className="w-full">
          <MessageSquare className="w-4 h-4 mr-2" />
          Connect
        </Button>
      </CardFooter>
    </Card>
  );
}
