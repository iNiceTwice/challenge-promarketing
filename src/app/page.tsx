import { GamesList } from './components/GamesList'

export default function Home() {
  return (
    <main className="flex flex-col py-24 min-h-screen w-full items-center justify-center bg-zinc-800">
      <GamesList/>
    </main>
  )
}
