import { Header } from "../components/header.tsx";

export default function Home() {
  return (
    <>
      <Header isChallengePage={false}/>
      <body>
        <main class="flex flex-col items-center justify-center h-screen">
          <h1 class="text-5xl font-bold text-green-600 dark:text-green-300">Deno served</h1>
          <p class="text-xl text-green-600 dark:text-green-300">A simple web server written in Deno</p>
        </main>    
      </body>
    </>
  );
}
