import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { fontJost } from "@/lib/fonts";
import Menu from "./components/Menu/Menu";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "Anna",
  description: "My portfolio as a Front End Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fontJost.variable}>
        <Menu />
        <main>{children}</main>
        <GoogleAnalytics gaId="G-XC111C3L5M" />
      </body>
    </html>
  );
}
