import { SessionProvider } from "next-auth/react";

import type { AppProps } from "next/app";

import Head from "next/head";

import "@/styles/globals.css";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <Head>
        <title>Netflix Clone</title>
        <meta
          name="description"
          key="desc"
          content="Stream your entertainment!"
        />
      </Head>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
