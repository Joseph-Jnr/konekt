import { ClerkProvider } from '@clerk/nextjs'
import '../globals.css'
import { Inter } from 'next/font/google'
import { BottomBar, LeftSideBar, RightSideBar, TopBar } from '@/components'

export const metadata = {
  title: 'Konekt',
  description: 'Connect with your friends and family seamlessly',
}

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body className={inter.className}>
          <TopBar />
          <main className='flex flex-row'>
            <LeftSideBar />
            <section className='main-container'>
              <div className='w-full max-w-4xl'>{children}</div>
            </section>
            <RightSideBar />
          </main>
          <BottomBar />
        </body>
      </html>
    </ClerkProvider>
  )
}
