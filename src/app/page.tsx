import Button from '@/components/Button'
import { PiWalletFill } from 'react-icons/pi'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-col gap-8 min-h-screen items-center justify-center bg-gradient-to-t from-rose-900 to-violet-900 font-poppins">
      <Button color="accent" variant='outlined'>
        Button
        <PiWalletFill size={25} />
      </Button>
    </main>
  )
}
