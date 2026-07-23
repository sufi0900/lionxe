import Metadata from "next";
import FAQClient from "./FAQClient";
import { faqsData } from "./faqs";

function getBaseUrl(): string {
  if (process.env.NODE_ENV === "production") {
    return "https://lionxe.com";
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return "http://localhost:3000";
}

function generateOGImageURL(params: Record<string, string>): string {
  const baseURL = `${getBaseUrl()}/api/og`;
  const searchParams = new URLSearchParams(params);
  return `${baseURL}?${searchParams.toString()}`;
}

export const metadata = {
  title: "Frequently Asked Questions | LIONXE™ Framework",
  description:
    "Find clear answers to common questions about LIONXE™, the digital quality review framework for SEO, AI search visibility, UX, content authority, and execution excellence.",
  authors: [{ name: "Sufian Mustafa" }],
  keywords: [
    "LIONXE FAQ",
    "LIONXE framework",
    "digital quality review framework",
    "AI SEO framework",
    "SEO audit framework",
    "AI search engine optimization",
    "GEO framework",
    "digital asset review",
    "content quality framework",
    "UX review framework",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: `${getBaseUrl()}/faq`,
  },
  openGraph: {
    title: "Frequently Asked Questions | LIONXE™",
    description:
      "Clear answers about the LIONXE digital quality review framework, its four pillars, scoring model, review process, and ecosystem.",
    url: `${getBaseUrl()}/faq`,
    type: "website",
    siteName: "LIONXE™",
    locale: "en_US",
    images: [
      {
        url: generateOGImageURL({
          title: "Frequently Asked Questions About LIONXE™",
          ctaText: "Explore the Answers",
          features: "Digital Quality,AI Visibility,SEO,UX",
        }),
        width: 1200,
        height: 630,
        alt: "LIONXE FAQ Page",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Frequently Asked Questions | LIONXE™",
    description:
      "Find answers to common questions about LIONXE™, its review framework, pillars, scoring model, and digital quality methodology.",
    images: [
      generateOGImageURL({
        title: "Frequently Asked Questions About LIONXE™",
        ctaText: "Explore the Answers",
        features: "Digital Quality,AI Visibility,SEO,UX",
      }),
    ],
  },
};

function faqSchemaMarkup() {
  const mainEntity = faqsData.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  }));

  return {
    __html: JSON.stringify(
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity,
      },
      null,
      2
    ).replace(/</g, "\\u003c"),
  };
}

function breadcrumbSchemaMarkup() {
  return {
    __html: JSON.stringify(
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${getBaseUrl()}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "FAQ",
            item: `${getBaseUrl()}/faq`,
          },
        ],
      },
      null,
      2
    ).replace(/</g, "\\u003c"),
  };
}

export default function FAQPage() {
  return (
    <>
      <script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={faqSchemaMarkup()}
      />

      <script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={breadcrumbSchemaMarkup()}
      />

      <FAQClient />
    </>
  );
}