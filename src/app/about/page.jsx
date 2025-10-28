// No "use client" here

// SEO metadata for About page
export const metadata = {
  alternates: {
    canonical: "https://doctorhand.in/about",
  },
  title: "About Doctor Hand | Medical Tourism & Healthcare Services",
  description:
    "Doctor Hand connects patients with top hospitals and specialist doctors across India. Learn about our mission to provide seamless medical tourism, treatment planning, travel coordination, and patient support.",
  keywords: [
    "Doctor Hand",
    "About Doctor Hand",
    "Medical Tourism",
    "Healthcare Services",
    "Hospitals",
    "Doctors",
    "Delhi",
    "Gurgaon",
  ],
  openGraph: {
    title: "About Doctor Hand | Medical Tourism & Healthcare Services",
    description:
      "Doctor Hand connects patients with top hospitals and specialist doctors across India. Learn about our services, team, and commitment to patient-centred care.",
    url: "https://doctorhand.in/about",
    siteName: "Doctor Hand",
    images: [
      {
        url: "/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Doctor Hand Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Doctor Hand | Medical Tourism & Healthcare Services",
    description:
      "Learn about Doctor Hand — our mission, services, and how we help international and domestic patients access top healthcare in India.",
    site: "@doctorhand",
    images: [
      {
        url: "/logo.jpeg",
        alt: "Doctor Hand Logo",
      },
    ],
  },
};

import AboutPageClient from "./pageClient";

export default function AboutPage() {
  return <AboutPageClient />;
}
