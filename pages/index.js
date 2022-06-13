import Link from "next/link";
import Head from "next/head";

const App = () => {

  return (
    <div className="min-h-screen relative p-12">
      <Head>
        <title>Home</title>
      </Head>
      <div className="p-9 border  bg-gray-50 ">
        <h1 className="font-bold text-xl py-2">Choose Users Page</h1>
        <div className="flex-1 flex w-full p-12 space-x-8 justify-center items-center">
          <Link href="/usersSSR">
            <a className="text-indigo-600 border border-indigo-400 p-2 rounded">Users (SSR)</a>
          </Link>
          <Link href="/users">
            <a className="text-indigo-600 border border-indigo-400 p-2 rounded">Users (SSG)</a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default App