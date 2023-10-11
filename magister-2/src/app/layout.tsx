import 'bootstrap/dist/css/bootstrap.css';
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Magister 2',
}

export default function RootLayout({ children }: { children: React.ReactNode}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
