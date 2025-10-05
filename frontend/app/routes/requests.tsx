import type { Route } from "./+types/requests";
import {
  getConnectionRequestsForUser,
  getUserOrRedirect,
} from "~/api/api.server";
import { useLoaderData } from "react-router";
import Container from "~/components/Container";
import Text from "~/components/Text";
import BackButton from "~/components/BackButton";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { format } from "date-fns";
import { Separator } from "~/components/ui/separator";
import ParagraphText from "~/components/ParagraphText";

export async function loader({ request }: Route.LoaderArgs) {
  const user = await getUserOrRedirect(request);
  const connectionRequests = await getConnectionRequestsForUser(
    request,
    user.id,
  );
  return { connectionRequests };
}
export async function action({ request }: Route.ActionArgs) {}

export default function RequestsRoute() {
  const { connectionRequests } = useLoaderData<typeof loader>();

  return (
    <Container className="py-8 space-y-8 max-w-3xl">
      <BackButton />
      <Text as="h1" variant="h1">
        Requests
      </Text>
      <div>
        {connectionRequests.map((request) => (
          <Card>
            <CardHeader>
              <CardTitle>
                <Text as="h3" variant="h4">
                  {request.sender.company?.name}
                </Text>
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                Sent at{" "}
                <time>
                  {format(
                    new Date(request.createdAt),
                    "MMM d, yyyy 'at' HH:mm",
                  )}
                </time>
              </p>
            </CardHeader>
            <Separator />
            <CardContent>
              <Text as="p" variant="muted-sm" className="font-bold">
                Your message
              </Text>
              <ParagraphText className="text-sm mt-4" text={request.message} />
            </CardContent>
          </Card>
        ))}
      </div>
    </Container>
  );
}
