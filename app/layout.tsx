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
  metadataBase: new URL("https://imrandev.in"),
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
    siteName: "imrandev.in",
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
    canonical: "https://imrandev.in/",
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
              "url": "https://imrandev.in",
              "image": "https://imrandev.in/assets/imran%20dubai3.jpg",
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
              "name": "imrandev.in",
              "url": "https://imrandev.in",
              "publisher": {
                "@type": "Organization",
                "name": "Imran Ansari",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://imrandev.in/assets/imran%20dubai3.jpg"
                }
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://imrandev.in/?q={search_term_string}",
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
              "name": ["About", "Experience", "Projects", "Skills", "Services", "Blogs", "Contact"],
              "url": [
                "https://imrandev.in/#about",
                "https://imrandev.in/#experience",
                "https://imrandev.in/#projects",
                "https://imrandev.in/#skills",
                "https://imrandev.in/services",
                "https://imrandev.in/blogs",
                "https://imrandev.in/#contact"
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
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Imran Ansari",
              "url": "https://imrandev.in",
              "logo": {
                "@type": "ImageObject",
                "url": "https://imrandev.in/assets/imran%20dubai3.jpg"
              },
              "sameAs": [
                "https://github.com/imrananshari",
                "https://linkedin.com/in/imrann-ansari",
                "https://instagram.com/imrananshari",
                "https://www.youtube.com/@imranansar-zyx"
              ]
            }
          `}
        </script>
