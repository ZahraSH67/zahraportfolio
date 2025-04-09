import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Zahra Shahabi - Frontend Developer',
  description: 'Personal portfolio of Zahra Shahabi, Frontend Developer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="ltr">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/assets/img/favicon.png" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
