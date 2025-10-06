import Header from "~/components/Header";
import { Outlet, useMatches } from "react-router";
import Footer from "~/components/Footer";
import Main from "~/components/Main";
import { z } from "zod";
import DefaultHeader from "~/components/DefaultHeader";

const pageTitleMatchSchema = z.object({
  handle: z.object({
    pageTitle: z.string(),
    pageSubtitle: z.string().optional(),
  }),
});

type PageTitleMatch = z.infer<typeof pageTitleMatchSchema>;

export default function DefaultLayout() {
  const matches = useMatches();
  const pageTitleMatches = matches.filter(
    (match) => pageTitleMatchSchema.safeParse(match).success,
  ) as PageTitleMatch[];

  const pageTitle = pageTitleMatches.at(-1)?.handle.pageTitle;
  const pageSubtitle = pageTitleMatches.at(-1)?.handle.pageSubtitle;

  return (
    <>
      <DefaultHeader pageTitle={pageTitle} pageSubtitle={pageSubtitle} />
      <Main className="min-h-[600px] py-8 lg:py-12">
        <Outlet />
      </Main>
      <Footer />
    </>
  );
}
