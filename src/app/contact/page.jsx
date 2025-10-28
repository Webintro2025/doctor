// No "use client" here

// SEO metadata for Contact page
export const metadata = {
  alternates: {
    canonical: "https://doctorhand.in/contact",
  },
  title: "Contact Doctor Hand | Medical Tourism & Patient Support",
  description: "Get in touch with Doctor Hand for treatment coordination, hospital & doctor inquiries, travel assistance, and personalised medical tourism support.",
  keywords: [
    "Doctor Hand",
    "Contact",
    "Medical Tourism",
    "Patient Support",
    "Hospitals",
    "Doctors",
    "Delhi",
    "Gurgaon"
  ],
  openGraph: {
    title: "Contact Doctor Hand | Medical Tourism & Patient Support",
    description: "Get in touch with Doctor Hand for treatment coordination, hospital & doctor inquiries, travel assistance, and personalised medical tourism support.",
    url: "https://doctorhand.in/contact",
    siteName: "Doctor Hand",
    images: [
      {
        url: "/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Doctor Hand Logo"
      }
    ],
    locale: "en_IN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Doctor Hand | Medical Tourism & Patient Support",
    description: "Contact Doctor Hand for treatment coordination, hospital & doctor inquiries, travel assistance, and personalised support for international and domestic patients.",
    site: "@doctorhand",
    images: [
      {
        url: "/logo.jpeg",
        alt: "Doctor Hand Logo"
      }
    ]
  }
};

    import ContactPageClient from "./pageClient";

    export default function ContactPage() {
      return <ContactPageClient />;
    }
