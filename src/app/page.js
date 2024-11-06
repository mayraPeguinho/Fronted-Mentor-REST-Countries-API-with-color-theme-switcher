import Tablero from "./components/Tablero";
import Search from "./components/Search";

export default function Home() {

  return <main className="h-full w-full flex flex-col">
    <div className="flex flex-col gap-10 m-5 justify-center items-center md:mx-20 md:mt-10">
      <Search />
      <Tablero />
    </div>
  </main>
}


