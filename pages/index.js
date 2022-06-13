import Link from "next/link";
import Head from "next/head";

const App = () => {

  return (
    <div className="min-h-screen relative p-12">
      <Head>
        <title>Home</title>
      </Head>
      <div className="p-9 border  bg-gray-50 ">
        <div className="w-full p-5 flex flex-col space-y-4">
          <h3>Pre Rendering</h3>
          <p>
            In order to see a proof for Pre-rendering - the easiest thing would be <b>to disable JavaScript</b>
          </p>
          <div>
            this can be done quite fast by:
            <ul>
              <li>1 - entering dev tool <b>(`cmd` + `option` + `j`)</b></li>
              <li>2 - run command <b>(`cmd` + `shift` + `p`)</b></li>
              <li>3 - when the dialog with the <b>`Run Command`</b> appear - type javascript
         and choose - Disable Javascript -(orange debugger)
              </li>
            </ul>
          </div>
          <p>
            Once its done when you refresh the page - The html keep rendering.
            <br/>
            quite shitty. but it renders. wont happend with react
          </p>
        </div>
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