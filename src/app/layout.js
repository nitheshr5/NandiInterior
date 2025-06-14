// src/app/layout.js
import './globals.css'
import Navbar from './components/ui/Navbar'
import Footer from './components/ui/Footer'

export const metadata = {
  title: 'Nandi Interiors',
  description: 'Your Interior Design Studio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}