import CodeBox from "/components/CodeBox";
import RandomUser from "/components/RandomUser";

const UsersSSR = ({ data }) => {
  const user = data.results[0]
  return (
    <div className="p-9 border  bg-gray-50 ">
      <h1 className="font-bold text-xl py-2">Users SSR</h1>
      <div>- This page using Server Side for pre-rendering and data-fetching.</div>
      <div className="flex flex-col space-y-6 pt-2">
        <CodeBox>
          { codeSSG }
        </CodeBox>
        <RandomUser user={ user } />
      </div>
    </div>
  )
}


export async function getServerSideProps() {

  const res = await fetch("https://randomuser.me/api/")
  const data = await res.json()

  return { props: { data } }
}

export default UsersSSR

const codeSSG = `export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch("https://randomuser.me/api/")
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}`

