import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingIcons from "@/components/FloatingIcons";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Doctor Hand | Medical Tourism & Healthcare Services",
  description: "Doctor Hand connects patients with top hospitals and specialist doctors across India (Delhi NCR, Gurgaon, Noida, Faridabad, Greater Noida). We provide medical tourism coordination, treatment planning, travel & stay assistance, and personalised patient support.",
  keywords: [
    "Doctor Hand",
    "Medical Tourism",
    "Healthcare",
    "Hospitals",
    "Doctors",
    "Delhi",
    "Gurgaon",
    "Noida",
    "Medical Tourism India",
    "International Patients"
  ],
verification: {

    google: "1Ok5Ngpb9KmXymIEv1a8FbsD4ZPwdtHCxyM-IiDDUZQ",
  },
  authors: [{ name: "Doctor Hand", url: "https://doctorshand.com/" }],
  openGraph: {
    title: "Doctor Hand | Medical Tourism & Healthcare Services",
    description: "Find top hospitals and specialists in India, get personalised treatment plans, and full travel coordination for international patients.",
    url: "https://doctorshand.com/",
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
    title: "Doctor Hand | Medical Tourism & Healthcare Services",
    description: "Medical tourism coordination, top hospitals & specialist doctors across India.",
    site: "@doctorhand",
    images: [
      {
        url: "/logo.jpeg",
        alt: "Doctor Hand Logo"
      }
    ]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
          integrity="sha512-papm6p6Qw6Qw6Qw6Qw6Qw6Qw6Qw6Qw6Qw6Qw6Qw6Qw6Qw6Qw6Qw6Qw6Qw6Qw6Qw6Qw6Qw6Qw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <FloatingIcons />
        <Footer />
      </body>
    </html>
  );
}
