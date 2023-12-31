import Navbar from '@/components/navBar'
import './globals.css'
import type { Metadata } from 'next'
import Footer from '@/components/footer'
import { Header } from '@/components/header'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body className={"max-w-[1196px] m-auto text-black font-text-des-1 text-lg "}>
        <Header></Header>
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
        </body>
    </html>
  )
}
