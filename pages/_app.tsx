import "/styles/globals.css";
import type { AppProps } from "next/app";
import NavHeader from "../components/Layouts/NavHeader";
import MainNavbar from "../components/Layouts/MainNavbar";
import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";
import { MainFooter } from "../components/Layouts/ManiFooter";
import Sidebar from "../features/Home/Sidebar";
import { wrapper } from "../store/store";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export function App({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  // const getLayout = Component.getLayout ?? ((page) => page);

  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }
  return (
    <>
      <NavHeader />
      <MainNavbar />
      <Component {...pageProps} />
      <Sidebar />
      <MainFooter />
    </>
  );
}
export default wrapper.withRedux(App);
