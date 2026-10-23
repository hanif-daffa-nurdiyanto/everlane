import React from 'react'
import './styles.css'
import { Work_Sans } from 'next/font/google'
import Header from '@/components/header'
import Footer from '@/components/footer'

const workSans = Work_Sans({
  subsets: ['latin'],
  variable: '--font-work-sans',
})

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en" className={workSans.variable}>
      <body className="text-everlane-500">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
