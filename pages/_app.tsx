import Layout from "@/components/layout/Layout";
import PropertyDetail from "@/components/property/PropertyDetail";

import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (<>
  <Layout>

  <Component {...pageProps} />
  </Layout>
  </> 
  );
};
