import CodeBox from "/components/CodeBox";
import RandomUser from "/components/RandomUser";

export async function getStaticProps() {
  const url = "https://randomuser.me/api/"
  const resp = await fetch(url);
  return {
    props: {
      data: await resp.json(),
    },
  };
}

const Users = ({ data }) => {
  const user = data.results[0]
  return (
    <div className="p-9 border  bg-gray-50 ">
      <h1 className="font-bold text-xl py-2">Users SSG</h1>
      <div>- This page using Static Generation for pre-rendering and data-fetching.</div>
      <div className="flex flex-col space-y-6 pt-2">
        <CodeBox>
          { codeSSG }
        </CodeBox>
        <RandomUser user={ user } />
      </div>
    </div>
  )
}

export default Users

const codeSSG = `export async function getStaticProps() {
      const url = "https://randomuser.me/api/"
      const resp = await fetch(url);
      return {
        props: {
          data: await resp.json(),
        },
      }
    }`