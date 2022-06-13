function UsersSSR({ data }) {
  return (
    <div className="p-6 border border-amber-500">


      <div className="flex items-center space-x-4">
        <div>{data.results[0].name.first || '-'}</div>
        <div className="text-xs font-medium">{data.results[0].gender || '-'}</div>
      </div>
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
  const res = await fetch("https://randomuser.me/api/")
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}

export default UsersSSR



