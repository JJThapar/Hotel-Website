import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Vita Singapore — A Living Tree Hotel",
    template: "%s | Vita Singapore",
  },
  description:
    "Experience Singapore's most extraordinary address. Vita is a hyper-luxury hotel built within a living tree — where every room is a sanctuary among the leaves.",
  keywords: ["luxury hotel", "Singapore", "sustainable hotel", "tree hotel", "wellness retreat"],
  openGraph: {
    type: "website",
    locale: "en_SG",
    siteName: "Vita Singapore",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="bg-ivory-100 text-stone-800 font-sans antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
