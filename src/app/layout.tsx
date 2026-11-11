import Call from "@/components/ContactButton/Call";
import Whatsapp from "@/components/ContactButton/WhatsApp";
import DeferredAnalytics from "@/components/analytics/DeferredAnalytics";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import { SITE_NAME, SITE_URL } from "@/data/site";
import type { Metadata, Viewport } from "next";
import { Inter, Montserrat, Raleway } from "next/font/google";
import Script from "next/script";
import "./styles/globals.scss";
import "./styles/nav&button.scss";

// Self-hosted fonts (no render-blocking request to fonts.googleapis.com)
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

const DEFAULT_TITLE =
  "Best Digital Marketing Agency and Website Development Company Ontario Canada";
const DEFAULT_DESCRIPTION =
  "One Shot Marketing is a  trusted SEO agency in Ontario. Affordable SEO, digital marketing, Shopify, graphic design & software development experts. Visit us!";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  verification: {
    google: "KscLBx3GJE8xoyahZIQ-8_EEDX2dRuzKMp5cPm-pRTQ",
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
  openGraph: {
    type: "website",
    locale: "en_CA",
    siteName: SITE_NAME,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    url: "/",
    images: [{ url: "/logo-3.png", alt: SITE_NAME }],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: ["/logo-3.png"],
  },
  formatDetection: {
    telephone: false,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#183F62",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "One shot Marketing",
  image: `${SITE_URL}/logo-3.png`,
  logo: `${SITE_URL}/logo-3.png`,
  "@id": `${SITE_URL}/#organization`,
  url: `${SITE_URL}/`,
  telephone: "+1 (438) 855-4446",
  email: "info@oneshotmarketing.ca",
  address: {
    "@type": "PostalAddress",
    streetAddress: "3064 Hurontario St.",
    addressLocality: "Mississauga",
    addressRegion: "ON",
    addressCountry: "CA",
  },
  sameAs: [
    "https://www.facebook.com/oneshotsales",
    "https://www.instagram.com/oneshot_marketing/",
    "https://www.linkedin.com/company/oneshotmarketing",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        suppressHydrationWarning={true}
        className={`${montserrat.variable} ${raleway.variable} ${inter.variable} antialiased`}
      >
        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T428S42K"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          ></iframe>
        </noscript>
        {/* <!-- End Google Tag Manager (noscript) --> */}
        <Navbar />
        {children}
        <Footer />
        <Call callNumber="14388554446" />
        <Whatsapp whatsAppNumber="+14388554446" />
        {/* Google Analytics + Google Tag Manager, loaded after first interaction */}
        <DeferredAnalytics />

        {/* Eazbot (Next.js, e.g. in app/layout.jsx) */}
        <Script id="eazbot-config" strategy="afterInteractive">
          {`
    window.eazbotConfig = {
      ndid: "bd1e4e81-ef82-4a31-99df-5bbf65ecd9da",
      hid: "85272375",
    };
  `}
        </Script>
        <Script
          src="https://cb-script.dyq28lyxrazm2.amplifyapp.com/widget/lead-chatbot.js"
          strategy="afterInteractive"
        />
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","zbn9m2ep0o");`}
        </Script>
      </body>
    </html>
  );
}
