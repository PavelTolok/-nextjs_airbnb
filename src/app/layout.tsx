import './globals.css'
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import Navbar from './components/navbar'
import ClientOnly from './components/ClientOnly'
import Modal from './components/modals/Modal'

import useRegisterModal from './hooks/useRegisterModal'

const nunito = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Airbnb',
  description: 'Airbnb Clone',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <ClientOnly>
          <Navbar/>
      
          {/* <Modal
            isOpen={true}
            /> */}
        </ClientOnly>
        {children}
      </body>
    </html>
  )
}
