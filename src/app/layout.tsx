import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./styles/globals.scss";
import "./styles/nav&button.scss";
import { Call, Footer, Navbar, Whatsapp } from "@/components";
import Script from "next/script";
import RenderChatBot from "@/components/chatbot/RenderChatBot";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Best Digital Marketing Agency and Website Development Company Ontario Canada",
  description:
    "One Shot Marketing is a  trusted SEO agency in Ontario. Affordable SEO, digital marketing, Shopify, graphic design & software development experts. Visit us!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="KscLBx3GJE8xoyahZIQ-8_EEDX2dRuzKMp5cPm-pRTQ"
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-96F5G7J5CW"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-96F5G7J5CW');
          `,
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
          {
            "@context": "https://schema.org",
            "@type": "LodgingBusiness",
            "name": "One shot Marketing",
            "image": "",
            "@id": "",
            "url": "https://www.minimalisthotels.com/",
            "telephone": "+1 (438) 855-4446",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "3064 Hurontario St.",
              "addressLocality": "Mississauga",
              "postalCode": "7539",
              "addressCountry": "CA"
            },
          }           `,
          }}
        />

        {/* <!-- Google Tag Manager --> */}
        {/* <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-T428S42K');</script> */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-T428S42K');
          `,
          }}
        />
        {/* <!-- End Google Tag Manager --> */}
      </head>
      <body
        suppressHydrationWarning={true}
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T428S42K"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* <!-- End Google Tag Manager (noscript) --> */}
        <Navbar />
        <RenderChatBot />
        {children}
        <Footer />
        <Call callNumber="14388554446" />
        <Whatsapp whatsAppNumber="+14388554446" />
      </body>
    </html>
  );
}
