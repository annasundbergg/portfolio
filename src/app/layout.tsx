import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { fontJost } from "@/lib/fonts";
import Header from "./components/Header";
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
      <body
        className={cn(
          "font-sans min-h-screen flex flex-col bg-gradient-to-tl from-orange-100 via-pink-50 to-orange-100 mt-1",
          fontJost.variable
        )}
      >
        <Header />

        <main className="flex flex-1 flex-col sm:mt-4 md:mt-11">
          {children}
        </main>
      </body>
      <GoogleAnalytics gaId="G-XC111C3L5M" />
    </html>
  );
}
