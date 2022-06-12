import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const fetcher = (...args) => fetch(...args).then((res) => res.json())

const withAuth = (Component) => {
  const AuthenticatedComponent = () => {
    const router = useRouter();
    const [data, setData] = useState()
    const officeApi = 'http://psp.zota-dev.com:8040'
    useEffect(() => {
      const whoami = async () => {
        const url = `${ officeApi }/api/v2/psp/whoami/`
        const opts = { credentials: 'include' };
        const resp = await fetch(url, opts);
        if (!resp || !resp.ok) {
          await router.push('/login/');
          return
        }
        const userData = await resp.json()
        setData(userData.data)


      }
      void whoami();
    }, []);

    return !!data ? <Component data={data} /> : <div>Loading</div>; // Render whatever you want while the authentication occurs
  };

  return AuthenticatedComponent;
};

export default withAuth