import SkillDiscovery from "~/routes/home/SkillDiscovery";
import Container from "~/components/Container";

export default function Home() {
  return (
    <div>
      <section className="bg-gradient-hero text-center py-10 px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
          <span>Swap skills,</span>
          <br />
          <span>Scale faster</span>
        </h1>
        <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">
          Connect with other startups to exchange services instead of cash. Find
          complementary skills and grow together.
        </p>
      </section>
      <section className="py-16">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Discover Skills</h2>
            <p className="text-muted-foreground">
              Browse skills to find startups offering or needing them
            </p>
          </div>
          <div className="">
            <SkillDiscovery />
          </div>
        </Container>
      </section>
    </div>
  );
}
