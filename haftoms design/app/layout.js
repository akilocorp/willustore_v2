import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Willustore — Decentralized Vector Storage for the AI Age',
  description: 'Willustore enables organizations to store AI data securely using decentralized storage — leveraging unused space on user devices with military-grade encryption.',
  keywords: 'decentralized storage, vector database, AI data, HNSW, secure storage, university AI, enterprise AI',
  openGraph: {
    title: 'Willustore — Decentralized Vector Storage',
    description: 'Store AI data securely. Distributed across devices. Encrypted. Cost-effective.',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-midnight text-text-primary font-body antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
