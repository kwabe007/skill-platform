import { cn } from "~/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import Text from "~/components/Text";
import { format } from "date-fns";
import { Separator } from "~/components/ui/separator";
import ParagraphText from "~/components/ParagraphText";
import type { PublicConnectionRequest1 } from "~/api/api-types";
import { Button } from "~/components/ui/button";

interface RequestCardProps {
  request: PublicConnectionRequest1;
  type: "sent" | "received";
  className?: string;
}

export default function RequestCard({
  request,
  type,
  className,
}: RequestCardProps) {
  return (
    <Card className={cn("", className)}>
      <CardHeader>
        <CardTitle>
          <Text as="h3" variant="h4">
            {request.sender.company?.name}
          </Text>
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          {type === "sent" ? "Sent" : "Received"} at{" "}
          <time dateTime={new Date(request.createdAt).toISOString()}>
            {format(new Date(request.createdAt), "MMM d, yyyy 'at' HH:mm")}
          </time>
        </p>
      </CardHeader>
      <Separator />
      <CardContent>
        <Text as="p" variant="muted-sm" className="font-bold">
          Your message
        </Text>
        <ParagraphText className="text-sm mt-4" text={request.message} />
        {type === "received" && (
          <div className="mt-4 p-4 bg-muted/50 rounded-lg border border-border">
            <p className="text-sm text-muted-foreground">
              An email has been sent to you with their contact information. If
              you haven't received it, you can reach them at{" "}
              <Button asChild variant="text-link">
                <a href={`mailto:${request.sender.email}`}>
                  {request.sender.email}
                </a>
              </Button>
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
