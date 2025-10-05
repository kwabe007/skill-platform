import type { Route } from "./+types/requests";
import {
  getConnectionRequestsForUser,
  getUserOrRedirect,
} from "~/api/api.server";
import { useLoaderData } from "react-router";
import Container from "~/components/Container";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { Inbox, Send } from "lucide-react";
import { useRequiredUser } from "~/utils";
import RequestCard from "~/routes/requests/RequestCard";

export const handle = {
  pageTitle: "Requests",
  pageSubtitle: "Manage your sent and received requests",
};

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
          <div>
            {sentRequests.map((request) => (
              <RequestCard key={request.id} type="sent" request={request} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="received">
          <div>
            {receivedRequests.map((request) => (
              <RequestCard key={request.id} type="received" request={request} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </Container>
  );
}
