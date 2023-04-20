import "./globals.css";
import "ui/styles.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Inter as MainFont, Familjen_Grotesk as HeadingFont } from "next/font/google";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AOM",
  description: "Generated by create next app",
  icons: { icon: "/aom.svg" }
};

const inter = MainFont({ subsets: ["latin"], display: "swap", variable: "--font-sans" });
const familjen = HeadingFont({ subsets: ["latin"], variable: "--font-heading" });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-mode="dark" className={`dark  ${inter.variable} ${familjen.variable}`}>
      <body className="bg-neutral-50 text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
