import Tablero from "./components/Tablero";
import Search from "./components/Search";
import Loading from "./loading";
import { Suspense } from "react";

export default async function Home({ searchParams }) {

  const params = await searchParams;
  const country = params?.country || ''
  const region = params?.region || ''

  return <main className="h-full w-full flex flex-col">
    <div className="flex flex-col gap-10 m-5 justify-center items-center md:mx-20 md:mt-10">
      <Search />
      <Suspense key={country + region} fallback={<Loading />}>
        <Tablero country={country} region={region} />
      </Suspense>
    </div>
  </main>
}


