import "./globals.css";
import "ui/styles.css";
import { Inter, Familjen_Grotesk } from "next/font/google";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const heading = Familjen_Grotesk({ subsets: ["latin"], variable: "--font-heading" });

export const metadata = {
  title: "SXM Quiz",
  description: `Test your knowledge of Saint Martin,
  Are you a local expert or a tourist?`
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`font-sans bg-primary-50 text-neutral-800 ${inter.variable} ${heading.variable}`}
    >
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
