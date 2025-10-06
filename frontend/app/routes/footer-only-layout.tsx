import TransparentHeader from "~/components/header/TransparentHeader";
import { Outlet } from "react-router";
import Footer from "~/components/Footer";
import Main from "~/components/Main";

export default function FooterOnlyLayout() {
  return (
    <>
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
}
