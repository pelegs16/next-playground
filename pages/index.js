import Link from "next/link";
import Head from "next/head";
import { useState } from "react";

const App = () => {
  const [showWhy, setShowWhy] = useState(false)
  return (
    <div className="min-h-screen relative p-12">
      <Head>
        <title>Home</title>
      </Head>
      <div className="p-9 border  bg-gray-50 ">
        <div className="w-full p-5 flex flex-col space-y-4 bg-gray-100 my-3">
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
        <div className="w-full p-5 flex flex-col space-y-4 bg-gray-100 my-3">
          <h4 className="font-bold text-xl py-2">Choose a random User Page - SSG or SSR</h4>
          <p>After routing to one of the pages - go back Home and then re-enter the page.

          </p>
          <p>
            Do it with both pages to see the differences
          </p>
          <div className="flex-1 flex w-full p-12 space-x-8 justify-center items-center">
            <Link href="/usersSSR">
              <a className="text-indigo-600 border border-indigo-400 p-2 rounded">Users (SSR)</a>
            </Link>
            <Link href="/users">
              <a className="text-indigo-600 border border-indigo-400 p-2 rounded">Users (SSG)</a>
            </Link>
          </div>

          <h4>Not Working?</h4>
          <div>
          <button className="text-indigo-800 border p-3 cursor-pointer" onClick={() => setShowWhy(true)}>
            press here
          </button>
            <div className={`${showWhy ? 'block' : 'hidden'}  transition-all duration-300 w-full p-5  borderflex flex-col space-y-4 bg-gray-200  text-gray-800 my-3`}>
              Thats because in dev mode static generation are pre rendered:
              <div>
                <blockquote className="jsx-2c4a16ef27e00414"><p>In development mode (when you run <code
                  className="text-pink-400">npm run dev</code> or <code className="jsx-d60897d45df4a3d0">yarn
                  dev</code>), every page is <a rel="noopener noreferrer" target="_blank"
                                                href="/docs/basic-features/pages#pre-rendering">pre-rendered</a> on each
                  request — even for pages that use <a rel="noopener noreferrer" target="_blank"
                                                       href="/docs/basic-features/pages#static-generation-recommended">Static
                    Generation</a>.</p></blockquote>

                <div>
                  enter: 

                  <a href="https://next-playground-rust.vercel.app/" target="_blank">
                    https://next-playground-rust.vercel.app/
                  </a>
                  <div>and see in live</div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default App