import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import FaviconSetter from "./components/FaviconSetter";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://imran.dev"),
  title: "Imran Ansari — Frontend Developer | Next.js, React, Tailwind",
  description:
    "Frontend Developer specializing in Next.js, React, Tailwind CSS. Building fast, SEO-optimized websites and SaaS dashboards for startups and businesses.",
  keywords: [
    "Frontend Developer",
    "Next.js Developer",
    "React Developer",
    "Tailwind CSS",
    "Website Development",
    "SaaS Dashboard",
    "UI/UX",
    "Performance Optimization",
    "Dubai Web Developer",
    "Freelance Developer",
    "Build Company Website",
    "Landing Page",
    "Portfolio",
    "SEO"
  ],
  icons: {
    icon: [
      { url: "/assets/imran dubai3.jpg", type: "image/jpeg" },
    ],
    shortcut: [
      { url: "/assets/imran dubai3.jpg", type: "image/jpeg" },
    ],
    apple: [
      { url: "/assets/imran dubai3.jpg" },
    ],
  },
  openGraph: {
    title: "Imran Ansari — Frontend Developer",
    description:
      "Next.js and React specialist building fast, SEO-friendly websites and apps.",
    images: "/assets/imran dubai3.jpg",
    siteName: "imran.dev",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Imran Ansari — Frontend Developer",
    description:
      "Next.js and React specialist building fast, SEO-friendly websites and apps.",
    images: ["/assets/imran dubai3.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/jpeg" href="/assets/imran%20dubai3.jpg" sizes="any" />
        <link rel="shortcut icon" href="/assets/imran%20dubai3.jpg" />
        <link rel="apple-touch-icon" href="/assets/imran%20dubai3.jpg" />
        <meta name="theme-color" content="#0a0a0a" />
        <meta name="author" content="Imran Ansari" />
        <meta name="copyright" content="Imran Ansari" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Imran Ansari",
              "url": "https://imran.dev",
              "sameAs": [
                "https://github.com/imrananshari",
                "https://linkedin.com/in/imrann-ansari",
                "https://instagram.com/imrananshari",
                "https://www.youtube.com/@imranansar-zyx"
              ]
            }
          `}
        </script>
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "imran.dev",
              "url": "https://imran.dev",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://imran.dev/?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }
          `}
        </script>
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "SiteNavigationElement",
              "name": ["About", "Experience", "Projects", "Skills", "Contact"],
              "url": [
                "https://imran.dev/#about",
                "https://imran.dev/#experience",
                "https://imran.dev/#projects",
                "https://imran.dev/#skills",
                "https://imran.dev/#contact"
              ]
            }
          `}
        </script>
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "OfferCatalog",
              "name": "Services by Imran Ansari",
              "itemListElement": [
                {"@type": "Service", "name": "Custom Website Development", "serviceType": "Next.js/React Websites"},
                {"@type": "Service", "name": "SaaS Dashboards", "serviceType": "Admin dashboards, analytics"},
                {"@type": "Service", "name": "Performance Optimization", "serviceType": "Core Web Vitals, Lighthouse"},
                {"@type": "Service", "name": "UI/UX & Design Systems", "serviceType": "Tailwind, component libraries"},
                {"@type": "Service", "name": "SEO & On‑Page Optimization", "serviceType": "Metadata, schema, sitemaps"}
              ]
            }
          `}
        </script>
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <FaviconSetter />
        {children}
      </body>
    </html>
  );
}
