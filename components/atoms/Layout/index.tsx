import Head from "next/head";
import { ReactNode } from "react";

type LayoutProps = {
   children?: ReactNode | ReactNode[];
   pageTitle: string;
}

export default function Layout({ pageTitle, children }: LayoutProps) {
   return (
      <div className="layout">
         <Head>
            <title>{pageTitle}</title>
         </Head>

         <header className="header">

         </header>
         <main className="main">{children}</main>
         <footer className="footer">

         </footer>
      </div>
   );
}