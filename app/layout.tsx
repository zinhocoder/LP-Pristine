import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Pristine Clean',
  description: 'Higienização de Sofás, Colchões e Estofados em Curitiba',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
