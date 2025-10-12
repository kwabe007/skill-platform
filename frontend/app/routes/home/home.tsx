import SkillDiscovery from "~/routes/home/SkillDiscovery";
import Container from "~/components/Container";
import type { Route } from "./+types/home";
import { data, useLoaderData } from "react-router";
import { getSkills } from "~/api/api.server";
import { Card, CardContent } from "~/components/ui/card";
import HowItWorksCard from "~/routes/home/HowItWorksCard";
import { Handshake, SearchCheck, UserPlus } from "lucide-react";
import { PLATFORM_NAME } from "~/utils";
import { Button } from "~/components/ui/button";
import { useRef } from "react";

export async function loader({ request }: Route.LoaderArgs) {
  const skills = await getSkills();
  return data({ skills });
}

export default function Home() {
  const { skills } = useLoaderData<typeof loader>();
  const discoverSkillsRef = useRef<HTMLElement>(null);

  const scrollToSkillsSection = () => {
    if (discoverSkillsRef.current) {
      const offset = -50;
      const top =
        discoverSkillsRef.current.getBoundingClientRect().top +
        window.scrollY +
        offset;

      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <section className="bg-gradient-hero text-center py-16 px-4 -mt-[4rem] space-y-12">
        <h1 className="text-h2 text-white mt-6">
          <span>Instead of paying for services,</span>
          <br />
          <span>exchange them</span>
        </h1>
        <Button
          variant="primary-foreground-outline"
          className="text-base px-16 py-5"
          size="lg"
          onClick={scrollToSkillsSection}
        >
          Search for skills
        </Button>
      </section>
      <Container className="py-16 space-y-16 md:space-y-24">
        <section className="space-y-12 md:space-y-16">
          <div className="text-center">
            <h2 className="text-2xl font-medium text-center mb-3">
              How it works
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {PLATFORM_NAME} lets startups find other startups who complement
              their skills so that both get the service they need, free of
              charge.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-16 max-w-4xl mx-auto">
            <HowItWorksCard
              squareText="1"
              icon={<UserPlus className="size-5" />}
              heading="Create your profile"
              text="Sign up and list the skills your startup has and what services you need"
            />
            <HowItWorksCard
              squareText="2"
              icon={<SearchCheck className="size-5" />}
              heading="Browse & Connect"
              text="Discover startups with skills that complement yours and request to connect with them"
            />
            <HowItWorksCard
              squareText="3"
              icon={<Handshake className="size-5" />}
              heading="Exchange Skills"
              text="Collaborate and trade services to help both startups grow, free of charge"
            />
          </div>
        </section>
        <section className="space-y-12 md:space-y-16" ref={discoverSkillsRef}>
          <div className="text-center">
            <h2 className="text-2xl font-medium text-center mb-3">
              Discover Skills
            </h2>
            <p className="text-muted-foreground">
              Browse skills to find startups offering or needing them
            </p>
          </div>
          <div className="">
            <SkillDiscovery skills={skills} />
          </div>
        </section>
      </Container>
    </div>
  );
}
