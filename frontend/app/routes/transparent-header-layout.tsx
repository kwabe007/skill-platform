import Header from "~/components/Header";
import { Outlet } from "react-router";
import Footer from "~/components/Footer";
import Main from "~/components/Main";

export default function TransparentHeaderLayout() {
  return (
    <>
      <Header variant="transparent" />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
}
