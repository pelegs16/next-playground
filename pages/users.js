

export async function getStaticProps() {
  const resp = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  return {
    props: {
      data: await resp.json(),
    },
  };
}


const UserList = ({ data }) => {

  return (
    <div className="p-6 border-amber-400 border bg-gray-200 shadow rounded min-h-screen">
      <div className="flex items-center justify-center h-full">
        Users SSG:
        <div>
          {!!data.length && data.map((user, i)=><div key={i} className={`p-5 `}>
            <h1>{user.name}</h1>
            <div>Address:</div>
            <div className="p-6 bg-orange-100">{Object.entries(user.address).map(([k,v])=><div key={k} className="bg-emerald-100">
              {k} - {JSON.stringify(v)}
            </div>)}</div>
          </div>)}

        </div>
      </div>
    </div>
  )
}


export default UserList