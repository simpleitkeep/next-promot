import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Promot - AI-Powered Digital Marketing',
  description: 'Data-driven digital marketing with AI, ML, and automated workflows. 3-5x ROI improvements.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}