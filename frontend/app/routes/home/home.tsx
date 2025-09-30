import SkillDiscovery from "~/routes/home/SkillDiscovery";
import Container from "~/components/Container";
import type { Route } from "./+types/home";
import { toastCookieSerializer } from "~/cookie-serializers.server";
import { data, useLoaderData } from "react-router";
import { useSuccessToast } from "~/utils";
import { getSkills } from "~/api/api.server";

export async function loader({ request }: Route.LoaderArgs) {
  const cookieHeader = request.headers.get("Cookie");
  const skills = await getSkills();
  const showToast =
    (await toastCookieSerializer.parse(cookieHeader)) === "true";
  return data(
    { showToast, skills },
    {
      headers: {
        ...(showToast
          ? {
              "Set-Cookie": await toastCookieSerializer.serialize("", {
                maxAge: 0,
              }),
            }
          : {}),
      },
    },
  );
}

export default function Home() {
  const { showToast, skills } = useLoaderData<typeof loader>();
  useSuccessToast(
    showToast,
    "Your email address is now verified and you can now log in!",
  );

  return (
    <div>
      <section className="bg-gradient-hero text-center py-16 px-4 -mt-[4rem]">
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
            <SkillDiscovery skills={skills} />
          </div>
        </Container>
      </section>
    </div>
  );
}
