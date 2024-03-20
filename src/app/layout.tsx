import type { Metadata } from "next";
import "./globals.css";
import { Jost } from "next/font/google";

const jost = Jost({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Anna",
    description: "My portfolio as a Front End Developer",
    viewport: { width: "device-width", initialScale: 1 },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={jost.className}>{children}</body>
        </html>
    );
}
