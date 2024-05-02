import { Jost } from "next/font/google";
import { Titan_One } from "next/font/google";
import { Ubuntu } from "next/font/google";

export const fontJost = Jost({
    subsets: ["latin"],
    variable: "--font-sans",
    display: "swap"
});

export const fontTitanOne = Titan_One({
    weight: "400",
    variable: "--font-mono",
    subsets: ["latin"],
})

export const fontUbuntu = Ubuntu({
    subsets: ["latin"],
    variable: "--font-serif",
    weight: "400"
})