import { Button } from "~/components/ui/button";
import { data, Link, useLoaderData } from "react-router";
import { ArrowLeft } from "lucide-react";
import { Badge } from "~/components/ui/badge";
import StartupCard from "~/routes/startup-offerings/StartupCard";
import Container from "~/components/Container";
import type { Route } from "./+types/startup-offerings";
import {
  getConnectionRequestsForUser,
  getCurrentUser,
  getSkill,
} from "~/api/api.server";

export async function loader({ request, params }: Route.LoaderArgs) {
  const skill = await getSkill(params.skillSlug);
  if (!skill) {
    throw data(null, {
      status: 404,
      statusText: "The skill you are looking for does not exist yet.",
    });
  }
  const user = await getCurrentUser(request);
  const connectionRequests = user
    ? await getConnectionRequestsForUser(user.id)
    : [];
  return { skill, connectionRequests };
}

export default function StartupOfferingsRoute() {
  const { skill, connectionRequests } = useLoaderData<typeof loader>();

  const offeredCount = skill.offeredUsers.docs.length;
  const neededCount = skill.neededUsers.docs.length;

  return (
    <div className="py-10">
      <Container>
        <Button asChild variant="outline">
          <Link className="flex gap-2 items-center" to="/">
            <ArrowLeft className="w-4 h-4" />
            Back to Skills
          </Link>
        </Button>
        <h1 className="mt-4">
          Explore startups offering or needing{" "}
          <span className="font-bold">{skill.name}</span>
        </h1>
        <section>
          <div className="flex gap-2 mt-6">
            <h2 className="text-xl font-semibold">
              Startups offering {skill.name}
            </h2>
            <Badge className="self-center" variant="secondary">
              {offeredCount}
            </Badge>
          </div>
          <div className="grid items-start md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 mt-4">
            {skill.offeredUsers.docs.map((user, index) => {
              const latestSentRequest = connectionRequests
                .filter((request) => request.receiver.id === user.id)
                .sort((a, b) => b.createdAt - a.createdAt)
                .at(0);
              return (
                <StartupCard
                  key={index}
                  user={user}
                  highlightedSkillId={skill.id}
                  latestSentRequest={latestSentRequest}
                />
              );
            })}
          </div>
        </section>
        <section>
          <div className="flex gap-2 mt-6">
            <h2 className="text-xl font-semibold">
              Startups needing {skill.name}
            </h2>
            <Badge className="self-center" variant="secondary">
              {neededCount}
            </Badge>
          </div>
          <div className="grid items-start md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 mt-4">
            {skill.neededUsers.docs.map((user, index) => {
              const latestSentRequest = connectionRequests
                .filter((request) => request.receiver.id === user.id)
                .sort((a, b) => b.createdAt - a.createdAt)
                .at(0);
              return (
                <StartupCard
                  key={index}
                  user={user}
                  highlightedSkillId={skill.id}
                  latestSentRequest={latestSentRequest}
                />
              );
            })}
          </div>
        </section>
      </Container>
    </div>
  );
}
