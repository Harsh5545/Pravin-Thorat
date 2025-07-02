import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Pravin Thorat - Financial Advisor & Insurance Expert | Mumbai",
  description:
    "Experienced financial advisor in Mumbai with 15+ years expertise in life insurance, health insurance, mutual funds, and retirement planning. IRDAI licensed agent offering personalized financial solutions.",
  keywords:
    "financial advisor Mumbai, insurance agent, mutual funds, life insurance, health insurance, retirement planning, tax saving, ELSS, SIP, Kalyan East",
  authors: [{ name: "Pravin Thorat" }],
  openGraph: {
    title: "Pravin Thorat - Financial Advisor & Insurance Expert",
    description: "Expert financial planning services in Mumbai. 15+ years experience in insurance and mutual funds.",
    type: "website",
    locale: "en_IN",
  },
  robots: {
    index: true,
    follow: true,
  },
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1f2937" />
        <link rel="canonical" href="https://pravinthorat.com" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
