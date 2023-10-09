
import type { AppProps } from "next/app";



import { Footer } from "~~/components/Footer";
import { Header } from "~~/components/Header";

import { UserProvider } from '@auth0/nextjs-auth0/client';

import "~~/styles/globals.css";

const ScaffoldEthApp = ({ Component, pageProps }: AppProps) => {

  // This variable is required for initial client side rendering of correct theme for RainbowKit






  return (
    < >
    <UserProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="relative flex flex-col flex-1">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </UserProvider>
  



    </>
  );
};

export default ScaffoldEthApp;
