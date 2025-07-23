import "@/styles/globals.css"
import { Inter } from "next/font/google"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "QR Code Generator - Free Online QR Code Creator",
  description:
    "Generate custom QR codes instantly with our free online QR Code Generator. Customize colors, size, and error correction levels. Perfect for URLs, text, and more.",
  keywords: "QR code generator, free QR code, online QR creator, custom QR code, URL to QR code",
  authors: [{ name: "xsrazy", url: "https://xsrazy.web.id" }],
  creator: "xsrazy",
  publisher: "xsrazy",

  // Basic meta tags
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",

  // Open Graph tags for Facebook, WhatsApp, etc.
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://qr.xsrazy.web.id",
    siteName: "QR Code Generator",
    title: "QR Code Generator - Free Online QR Code Creator",
    description:
      "Generate custom QR codes instantly with our free online QR Code Generator. Customize colors, size, and error correction levels.",
    images: [
      {
        url: "https://qr.xsrazy.web.id/og-image.png",
        width: 1200,
        height: 630,
        alt: "QR Code Generator - Create custom QR codes online",
        type: "image/png",
      },
    ],
  },

  // Twitter Card tags
  twitter: {
    card: "summary_large_image",
    site: "@xsrazy",
    creator: "@xsrazy",
    title: "QR Code Generator - Free Online QR Code Creator",
    description:
      "Generate custom QR codes instantly with our free online QR Code Generator. Customize colors, size, and error correction levels.",
    images: ["https://qr.xsrazy.web.id/og-image.png"],
  },

  // Additional meta tags for other platforms
  other: {
    // WhatsApp specific
    "og:image:width": "1200",
    "og:image:height": "630",

    // Telegram
    "telegram:channel": "@xsrazy",

    // TikTok and other platforms
    "theme-color": "#000000",
    "msapplication-TileColor": "#000000",
    "msapplication-TileImage": "/favicon.png",

    // Apple specific
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "QR Generator",

    // Additional SEO
    "application-name": "QR Code Generator",
    referrer: "origin-when-cross-origin",
    "format-detection": "telephone=no",
  },

  // Icons
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: "/favicon.png",
      },
    ],
  },

  // Manifest for PWA
  manifest: "/manifest.json",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Additional meta tags that can't be set via metadata API */}
        <link rel="canonical" href="https://qr.xsrazy.web.id" />
        <meta name="google-site-verification" content="" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
