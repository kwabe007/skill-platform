import { Button } from "~/components/ui/button";
import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import { Badge } from "~/components/ui/badge";
import StartupCard from "~/routes/startup-offerings/StartupCard";
import Container from "~/components/Container";

export default function StartupOfferingsRoute() {
  return (
    <div className="py-10">
      <Container>
        <Button variant="outline">
          <Link className="flex gap-2 items-center" to="/skill/test">
            <ArrowLeft className="w-4 h-4" />
            Back to Skills
          </Link>
        </Button>
        <h1 className="mt-4">
          Explore startups offering or needing{" "}
          <span className="font-bold">Business Intelligence</span>
        </h1>
        <section>
          <div className="flex gap-2 mt-6">
            <h2 className="text-xl font-semibold">
              Startups offering Business Intelligence
            </h2>
            <Badge className="self-center" variant="secondary">
              2
            </Badge>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 mt-4">
            <StartupCard />
            <StartupCard />
          </div>
        </section>
        <section>
          <div className="flex gap-2 mt-6">
            <h2 className="text-xl font-semibold">
              Startups needing Business Intelligence
            </h2>
            <Badge className="self-center" variant="secondary">
              2
            </Badge>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 mt-4">
            <StartupCard />
            <StartupCard />
          </div>
        </section>
      </Container>
    </div>
  );
}
