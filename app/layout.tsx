import type { Metadata } from "next"
import { Manrope } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Willustore — Decentralized Vector Storage for the AI Age",
  description:
    "Willustore enables organizations to store AI data securely using decentralized storage — leveraging unused space on user devices with military-grade encryption.",
  keywords: "decentralized storage, vector database, AI data, HNSW, secure storage, university AI, enterprise AI",
  openGraph: {
    title: "Willustore — Decentralized Vector Storage",
    description: "Store AI data securely. Distributed across devices. Encrypted. Cost-effective.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} bg-midnight text-text-primary font-body antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
