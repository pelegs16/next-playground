const RandomUser = ({ user }) => {
  return (
    <div className="p-8 pb-12 border bg-indigo-50 border-indigo-700  text-sm relative flex flex-col space-y-2">
      <img
        className="w-[100px] h-[100px]"
        src={user.picture.large}
        alt={user.name.first}
      />

      <div className="font-bold py-3 text-indigo-800">Random User</div>
      <div>Name: <span
        className="text-xs font-bold">{ user.name.title || '-' } { user.name.first || '-' } { user.name.last || '-' }</span>
      </div>
      <div>Gender: <span className="text-xs font-bold">{ user.gender }</span></div>
      <div>Email: <span className="text-xs font-bold">{ user.email }</span></div>
      <div>Address:
        <span className="text-xs font-bold">
          { user.location?.street?.name || '-' } { user.location?.street?.number || '-' } , { user.location.city } , { user.location.country }
          </span>
      </div>
      <div className="absolute bottom-2 text-xs left-2 font-semibold text-gray-700">
        https://randomuser.me/api/
      </div>
    </div>
  )
}


export default RandomUser