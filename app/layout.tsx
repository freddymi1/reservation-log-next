import { Nunito } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar/Navbar';
import { ClientOnly } from './features/ClientOnly';
import { Modals } from './features/Modals/Modals';
import { RegisterModal } from './components/Modals/RegisterModal';
import { ToastProvider } from './providers/ToastProvider';

export const metadata = {
  title: 'Reservation logement',
  description: 'Reservation de logement à Madagascar!',
}

const font = Nunito({
  subsets: ["latin"]
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToastProvider/>
          <RegisterModal/>
          <Navbar/>
        </ClientOnly>
        {children}
      </body>
    </html>
  )
}
