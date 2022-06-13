
import Box from "/components/Box";
import Link from "next/link";
import Head from "next/head";


const App =  ({data}) => {

  return (
    <div className="min-h-screen relative bg-gray-300 p-12">
      <Head>
        <title>Home</title>
      </Head>
      <div  className="h-full relative m-auto  bg-emerald-50 border border-emerald-800 rounded">
        <h2 className="text-center p-5">Choose Users Page</h2>
        <div className="flex-1 flex w-full p-12 space-x-8 justify-center items-center bg-emerald-100">

          <Link href="/usersSSR" >
            <a  className="text-indigo-600 border border-indigo-400 p-2 rounded">Users (SSR)</a>
          </Link>

          <Link href="/users" >
            <a  className="text-indigo-600 border border-indigo-400 p-2 rounded">Users (SSG)</a>
          </Link>

        </div>
      </div>
    </div>
  )
}

const CustomBtn = ({ children, ...props }) => {
  return (
    <button
      className="p-1 text-xs inline-flex cursor-pointer items-center justify-center font-medium rounded focus:outline-none focus:ring-2 focus:ring-offset-2
 transition-all whitespace-nowrap
        transition-opacity group border border-gray-300 shadow-sm text-sm text-gray-700 bg-white hover:bg-gray-50 focus:ring-indigo-500 transition-all"
      { ...props }
    >
      { children }
    </button>
  )
}




export default App