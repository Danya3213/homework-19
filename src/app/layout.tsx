import type {Metadata} from "next";
import "@styles/global.css";
import {Header} from "@Components/Header/Header";
import {Footer} from "@Components/Footer/Footer";
import type {ReactElement} from "react";

export const metadata: Metadata = {
  title: "Tattoo studio",
  description: "A professional tattoo studio",
    icons: {
      icon: {
          url: "/icons/favicon.svg",
      }
    }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactElement;
}>) {
  return (
    <html lang="en">
      <body className="font-unbounded text-xs min-h-screen bg-white text-black">
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
