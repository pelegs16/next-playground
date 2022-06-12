
import { useState, useEffect,  } from "react";
import Box from "/components/Box";


const App =  ({data}) => {
  // const ssoApi = 'http://psp.zota-dev.com:1323'
  const officeApi = 'http://psp.zota-dev.com:8040'

  const [user, setUser] = useState({name: '-'})


  const whoami = async () => {
    const url = `${ officeApi }/api/v2/psp/whoami`
    const opts = { credentials: 'include' };
    const resp = await fetch(url, opts);
    const userData = await resp.json()
    setUser(userData.data.user)


  }
  useEffect(() => void whoami(), []);

  return (
    <div  className="min-h-full w-full">
     <Box className="bg-amber-100 border-2 border-amber-400 p-12 flex items-center justify-start h-full">
        Welcome to App ! {JSON.stringify(user.name)}
     </Box>

    </div>
  )
}




export default App