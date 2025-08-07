import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'BOD Financial Group - SBA 7(a) Small Business Lending Specialists',
  description: 'Specialized SBA lending solutions with cutting-edge technology. Expert support for community banks and credit unions in small business lending.',
  keywords: 'SBA loans, 7a loans, small business loans, lending service provider, LSP, community banks, credit unions',
  openGraph: {
    title: 'BOD Financial Group',
    description: 'Your Partner in SBA 7(a) Small Business Lending',
    url: 'https://bodfin.thefortaiagency.ai',
    siteName: 'BOD Financial Group',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans">
        {children}
      </body>
    </html>
  )
}