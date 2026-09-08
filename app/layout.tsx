import type { Metadata } from "next";
import { fontClasses } from "@/lib/fonts";
import { Navigation } from "@/components/layout/Navigation";
import { MobileNav } from "@/components/layout/MobileNav";
import "./globals.css";

export const metadata: Metadata = {
  title: "Milagros Maza",
  description:
    "Full-stack developer building AI-powered tools, interactive web experiences, and thoughtful digital products. Based in Argentina.",
  keywords: [
    "full-stack developer",
    "React",
    "Next.js",
    "TypeScript",
    "AI",
    "portfolio",
    "web developer",
  ],
  authors: [{ name: "Mili" }],
  creator: "Mili",
  metadataBase: new URL("https://mili.dev"),
  openGraph: {
    title: "Mili — Full-Stack Developer",
    description:
      "Full-stack developer building AI-powered tools, interactive web experiences, and thoughtful digital products.",
    url: "https://mili.dev",
    siteName: "mili.dev",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mili — Full-Stack Developer",
    description:
      "Full-stack developer building AI-powered tools, interactive web experiences, and thoughtful digital products.",
  },
  icons: {
    icon: "/favicon.svg",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${fontClasses} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-bg-primary text-text-primary font-body">
        <Navigation />
        <MobileNav />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
