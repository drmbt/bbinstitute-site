import type { Metadata } from "next";
import { Bebas_Neue, Source_Sans_3 } from "next/font/google";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { site } from "@/content/site";

import "./globals.css";

const bodyFont = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
});

const displayFont = Bebas_Neue({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
};

const themeBootScript = `
  (function () {
    try {
      var stored = localStorage.getItem("theme");
      var theme = stored === "dark" ? "dark" : "light";
      document.documentElement.dataset.theme = theme;
    } catch (e) {
      document.documentElement.dataset.theme = "light";
    }
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bodyFont.variable} ${displayFont.variable}`}>
        <script dangerouslySetInnerHTML={{ __html: themeBootScript }} />
        <div className="theme-scope min-h-screen bg-transparent text-stone-100">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
