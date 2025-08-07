import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BOD Financial Group - SBA 7(a) Small Dollar Loan Specialists',
  description: 'Specialized SBA lending solutions with cutting-edge technology. Expert support for community banks and credit unions in small dollar loan production.',
  keywords: 'SBA loans, 7a loans, small dollar loans, lending service provider, LSP, community banks, credit unions',
  openGraph: {
    title: 'BOD Financial Group',
    description: 'Your Partner in SBA 7(a) Small Dollar Lending',
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
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}