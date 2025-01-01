import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Emmanuel Villada Suárez - Portfolio',
  description: 'Personal portfolio of Emmanuel Villada Suárez, a passionate programmer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className} >

        <main className='bg-gray-100'>{children}</main>

      </body>
    </html>
  )
}

