function UsersSSR({ data }) {
  return (
    <div className="p-6 border border-amber-500">
      Users page - SSR

      <div>
        { !!data.length && data.map((user, i) => <div key={ i } className={ `p-5 ` }>
          <h1>{ user.name }</h1>
          <div>Address:</div>
          <div className="p-6 bg-orange-100">{ Object.entries(user.address).map(([k, v]) => <div key={ k }
                                                                                                 className="bg-emerald-100">
            { k } - { JSON.stringify(v) }
          </div>) }</div>
        </div>) }
      </div>
    </div>
  )
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}

export default UsersSSR



