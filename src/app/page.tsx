import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Paragraph from './components/ui/Paragraph'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="bg-red-700">
      <Paragraph size='sm'/>
    </main>
  )
}
