// import type { Metadata } from "next";
// import "./globals.css";
// import { cn } from "@/lib/utils";
// import { fontJost } from "@/lib/fonts";
// import Header from "./components/Header";
// import { GoogleAnalytics } from "@next/third-parties/google";

// export const metadata: Metadata = {
//   title: "Anna",
//   description: "My portfolio as a Front End Developer",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body
//         className={cn(
//           "font-sans min-h-screen flex flex-col bg-gradient-to-tl from-orange-100 via-pink-50 to-orange-100",
//           fontJost.variable
//         )}
//       >
//         <Header />

//         <main className="flex flex-1 flex-col sm:mt-4 md:mt-11">
//           {children}
//         </main>
//       </body>
//       <GoogleAnalytics gaId="G-XC111C3L5M" />
//     </html>
//   );
// }
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
      {/* Viewport meta tag for proper scaling on mobile devices */}
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
      </head>
      <body
        className={cn(
          "font-sans min-h-screen flex flex-col bg-gradient-to-tl from-orange-100 via-pink-50 to-orange-100",
          fontJost.variable
        )}
        style={{
          paddingTop: "env(safe-area-inset-top)",
          paddingBottom: "env(safe-area-inset-bottom)",
          paddingLeft: "env(safe-area-inset-left)",
          paddingRight: "env(safe-area-inset-right)",
        }}
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
