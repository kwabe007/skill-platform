import { Button } from "~/components/ui/button";
import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import { Badge } from "~/components/ui/badge";
import StartupCard from "~/routes/startup-offerings/StartupCard";

export default function StartupOfferingsRoute() {
  return (
    <div className="px-4 py-10">
      <Button variant="outline">
        <Link className="flex gap-2 items-center" to="/skill/test">
          <ArrowLeft className="w-4 h-4" />
          Back to Skills
        </Link>
      </Button>
      <div className="flex gap-2 mt-6">
        <h1 className="text-xl font-semibold">
          Startups offering Business Intelligence
        </h1>
        <Badge className="self-center" variant="secondary">
          2
        </Badge>
      </div>
      <StartupCard className="mt-4" />
    </div>
  );
}
