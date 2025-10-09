import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Devipriya - Full Stack Developer Portfolio',
  description: 'Full Stack Developer specializing in React, Next.js, and modern web technologies. Building interactive web experiences with passion and creativity.',
  keywords: ['Full Stack Developer', 'React', 'Next.js', 'TypeScript', 'Web Development', 'Portfolio'],
  authors: [{ name: 'Devipriya' }],
  creator: 'Devipriya',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://devipriya.dev',
    title: 'Devipriya - Full Stack Developer Portfolio',
    description: 'Full Stack Developer specializing in React, Next.js, and modern web technologies.',
    siteName: 'Devipriya Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Devipriya - Full Stack Developer Portfolio',
    description: 'Full Stack Developer specializing in React, Next.js, and modern web technologies.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}

