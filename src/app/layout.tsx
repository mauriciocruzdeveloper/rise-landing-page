import type { Metadata } from 'next'
import './globals.css'
import { Inter } from "next/font/google"


export const metadata: Metadata = {
  title: 'Argenia',
  description: 'Software development company',
}

const inter = Inter({ subsets: ['latin'], weight: ["400", "500", "600"] })



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (   
    <html lang="en">
      <body  className={inter.className} >{children}</body>
    </html>
  )
}
