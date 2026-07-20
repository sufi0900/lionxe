import Script from "next/script";
import Contact from "@/components/Contact";

function getBaseUrl() {
  if (process.env.NODE_ENV === "production") {
    return "https://lionxe.com";
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  return "http://localhost:3000";
}

function generateOGImageURL(params: Record<string, string>) {
  const baseURL = `${getBaseUrl()}/api/og`;
  const searchParams = new URLSearchParams(params);
  return `${baseURL}?${searchParams.toString()}`;
}

export const metadata = {
  title: "Contact LIONXE™ | Request a Digital Quality Review",
  description:
    "Contact LIONXE™ to request a digital quality review, framework-based audit, collaboration, or inquiry about content, websites, UX, SEO, and digital strategy.",
  keywords:
    "contact LIONXE, digital quality review, website audit request, SEO review, UX review, AI SEO audit, digital strategy audit, content quality review",
  authors: [{ name: "Sufian Mustafa" }],
  creator: "Sufian Mustafa",
  publisher: "LIONXE™",

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
    canonical: `${getBaseUrl()}/contact`,
  },

  openGraph: {
    type: "website",
    url: `${getBaseUrl()}/contact`,
    siteName: "LIONXE™",
    title: "Contact LIONXE™ | Request a Digital Quality Review",
    description:
      "Send a message to LIONXE™ for review requests, collaboration opportunities, audit inquiries, or framework-related questions.",
    locale: "en_US",
    images: [
      {
        url: generateOGImageURL({
          title: "Contact LIONXE™",
          ctaText: "Send Request",
          badge: "Digital Quality Review",
          features:
            "Logic,Internal Optimization,No Negativity,Exceptional Execution",
        }),
        width: 1200,
        height: 630,
        alt: "Contact LIONXE™ — Digital Quality Review Framework",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact LIONXE™ | Request a Digital Quality Review",
    description:
      "Contact LIONXE™ for audit requests, digital quality reviews, collaborations, or framework-related inquiries.",
    creator: "@sufianmustafa",
    images: [
      generateOGImageURL({
        title: "Contact LIONXE™",
        ctaText: "Send Request",
        badge: "Digital Quality Review",
        features:
          "Logic,Internal Optimization,No Negativity,Exceptional Execution",
      }),
    ],
  },
};

function jsonLdMarkup() {
  return {
    __html: JSON.stringify(
      {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        name: "Contact LIONXE™",
        description:
          "Contact page for LIONXE™ — a digital quality review framework for evaluating websites, content, UX, SEO, tools, and marketing strategy.",
        url: `${getBaseUrl()}/contact`,
        mainEntity: {
          "@type": "Organization",
          name: "LIONXE™",
          url: getBaseUrl(),
          logo: `${getBaseUrl()}/logoForHeader.png`,
          founder: {
            "@type": "Person",
            name: "Sufian Mustafa",
          },
          contactPoint: {
            "@type": "ContactPoint",
            contactType: "Digital Quality Review Inquiries",
            email: "contact@lionxe.com",
            availableLanguage: ["English"],
            areaServed: "Worldwide",
            serviceType: [
              "Digital Quality Review",
              "Website Review",
              "SEO Review",
              "UX Review",
              "Content Quality Review",
              "AI SEO Visibility Review",
              "Digital Strategy Review",
            ],
          },
          sameAs: [
            "https://lionxe.com",
            "https://doitwithai.tools",
            "https://www.linkedin.com/in/sufianmustafa",
            "https://x.com/doitwithaitools"
          ],
        },
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: getBaseUrl(),
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Contact",
              item: `${getBaseUrl()}/contact`,
            },
          ],
        },
      },
      null,
      2
    ),
  };
}

export default function ContactPage() {
  return (
    <>
      <Script
        id="contact-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdMarkup()}
      />

      <Contact />
    </>
  );
}