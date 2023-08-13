import { ClerkProvider } from '@clerk/nextjs'
import { Inter } from 'next/font/google'
import '../globals.css'

export const metadata = {
  title: 'Konekt',
  description: 'Connect with your friends and family seamlessly',
}

const inter = Inter({ subsets: ['latin'] })

type RootLayoutProps = {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body className={`${inter.className} bg-dark-1`}>{children}</body>
      </html>
    </ClerkProvider>
  )
}
