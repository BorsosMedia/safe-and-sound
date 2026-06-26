import type { Metadata } from "next";
import Script from "next/script";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadConnectorChat from "@/components/Embeds";
import { siteConfig } from "@/content/site";
import "./globals.css";

export const metadata: Metadata = {
  title: siteConfig.defaultTitle,
  description: siteConfig.defaultDescription,
  keywords:
    "home alarm,security systems,alarm system installation,home security monitoring mississauga,toronto,hamilton",
  verification: {
    google: "npnMM-aq5gGeB0hRFIaNKgGyjMqqgw8EJjiOaQePmkc",
  },
  icons: {
    icon: "/images/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/css/main.css" />
        <link rel="stylesheet" href="/bootstrap/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/font-awesome/css/font-awesome.css" />
      </head>
      <body>
        <TopBar />
        <Navbar />
        {children}
        <Footer />
        <Script src="/js/jquery.min.js" strategy="beforeInteractive" />
        <Script src="/bootstrap/js/bootstrap.min.js" strategy="afterInteractive" />
        <LeadConnectorChat />
      </body>
    </html>
  );
}
