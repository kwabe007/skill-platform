import type { Route } from "./+types/requests";
import {
  getConnectionRequestsForUser,
  getUserOrRedirect,
} from "~/api/api.server";
import { Link, useLoaderData } from "react-router";
import Container from "~/components/Container";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { Inbox, Send } from "lucide-react";
import { useRequiredUser } from "~/utils";
import RequestCard from "~/routes/requests/RequestCard";
import { Card, CardContent } from "~/components/ui/card";
import { Button } from "~/components/ui/button";

export const handle = {
  pageTitle: "Requests",
  pageSubtitle: "Manage your sent and received requests",
};

export async function loader({ request }: Route.LoaderArgs) {
  const user = await getUserOrRedirect(request);
  const connectionRequests = await getConnectionRequestsForUser(user.id);
  return { connectionRequests };
}
export async function action({ request }: Route.ActionArgs) {}

export default function RequestsRoute() {
  const { connectionRequests } = useLoaderData<typeof loader>();
  const user = useRequiredUser();
  const sentRequests = connectionRequests.filter(
    (request) => request.sender.id === user.id,
  );
  const receivedRequests = connectionRequests.filter(
    (request) => request.receiver.id === user.id,
  );

  return (
    <Container className="space-y-8 max-w-3xl">
      <Tabs defaultValue="sent">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="sent" className="flex items-center gap-2">
            <Send className="size-4" />
            Sent ({sentRequests.length})
          </TabsTrigger>
          <TabsTrigger value="received" className="flex items-center gap-2">
            <Inbox className="size-4" />
            Received ({receivedRequests.length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="sent">
          {sentRequests.length > 0 ? (
            <div>
              {sentRequests.map((request) => (
                <RequestCard key={request.id} type="sent" request={request} />
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="pt-6 text-center">
                <Send className="w-12 h-12 text-muted-foreground/50 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">
                  No requests sent yet
                </h3>
                <p className="text-muted-foreground mb-4">
                  Start connecting with startups to see your requests here.
                </p>
                <Link to="/">
                  <Button>Browse services</Button>
                </Link>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="received">
          {receivedRequests.length > 0 ? (
            <div>
              {receivedRequests.map((request) => (
                <RequestCard
                  key={request.id}
                  type="received"
                  request={request}
                />
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="pt-6 text-center">
                <Inbox className="w-12 h-12 text-muted-foreground/50 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">
                  No requests received yet
                </h3>
                <p className="text-muted-foreground mb-4">
                  When someone wants to connect with your startup, you'll see
                  their requests here.
                </p>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </Container>
  );
}
