import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import {ThemeContext} from "@/shared/lib/context/ThemeContext";
import ThemeProvider from "@/app/providers/ThemeProvider/ThemeProvider";

const poppins = Poppins({ subsets: ['latin'], weight:['200', '300','400','500','600','700'] })

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
    <ThemeProvider >
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
    </ThemeProvider>
  )
}
