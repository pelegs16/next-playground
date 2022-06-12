import { useState, useEffect } from "react";


//env
const ssoApi = 'http://psp.zota-dev.com:1323'
const officeApi = 'http://psp.zota-dev.com:8040'
const authStorageName = 'mgauth'
export default function Login({ gates }) {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [user, setUser] = useState()
  const [scriptLoaded, setScriptLoaded] = useState();
  const [mgAccessToken, setMgAccessToken] = useState('')
  const [gmailToken, setGmailToken] = useState('')


  // inject google api object.
  useEffect(() => {
    setScriptLoaded(false);
    const script = document.createElement("script");
    script.src = "https://apis.google.com/js/platform.js";
    script.async = true;
    script.onload = () => setScriptLoaded(true);
    document.body.appendChild(script);
  }, []);


  const loginWithGoggleToken = async (gmailToken) => {
    if (gmailToken) {
      setGmailToken(gmailToken)
    }

    const token = gmailToken
    const url = `${ ssoApi }/api/v2/auth/psp/login/`;

    const params = { token, username: '', password: '' };
    const opts = {
      method: "POST",
      headers: { "Accept": "application/json", "Content-Type": "application/json" },
      credentials: 'include',
      body: JSON.stringify(params),
    };
    const resp = await fetch(url, opts);


    const userData = await resp.json()

    const { refreshToken, accessToken, claims } = userData?.data
    storeTokens({ refreshToken, accessToken, claims })

    setMgAccessToken(accessToken)


  }
  const next = async (fn, context, props) => {
    const res = await fn(context);

    if ("props" in res) {
      const currProps = await res.props;
      return {
        props: {
          ...currProps,
          ...props
        }
      };
    }
    return await res;
  };
  const loadTokens = () => {
    const tokens = localStorage.getItem(config.authStorageName);
    if (!!!tokens) {
      return null;
    }
    try {
      return JSON.parse(tokens);
    } catch (err) {
      return null;
    }
  }


  useEffect(() => void whoami(), []);

  const storeTokens = ({ accessToken, refreshToken, claims }) =>
    localStorage.setItem(authStorageName, JSON.stringify({ accessToken, refreshToken, claims }));

  const clearTokens = () => {
    localStorage.removeItem(authStorageName);
  }

  const whoami = async () => {
    const url = `${ officeApi }/api/v2/psp/whoami/`
    const opts = { credentials: 'include' };
    const resp = await fetch(url, opts);
    if (resp.ok) {
      const userData = await resp.json()
      console.log('who am i: ', userData)
      setUser(userData.data.user)
    }
  }

  async function getUserFromContext(context) {
    /**
     * Consider that here we could parse the session
     * out of the context and call the db to get the
     * user.
     */
    return {
      username: "John Doe",
      role: "Viewer"
    };
  }


  const withAuthentication = (fn) => async (context) => {
    const user = await getUserFromContext(context);

    if (!user) {
      return {
        redirect: {
          destination: "/login",
          permanent: false
        }
      };
    }

    return next(fn, { ...context, user: user }, { user: user.username });
  };


  useEffect(() => {
    if (!scriptLoaded) {
      return;
    }

    window.gapi.load('auth2', function () {
      // Retrieve the singleton for the GoogleAuth library and set up the client.
      window.auth2 = window.gapi.auth2.init({
        client_id: '194403717115-582qft8bl5qmhl51vo6ukqomoda4e2ri.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
      });

      let el = document.getElementById('glogin');
      window.auth2.attachClickHandler(el, {},
        function (res) {
          setSubmitted(true);
          const token = res.getAuthResponse().id_token;
          loginWithGoggleToken(token)
          // _this.submitGoogleToken(token);
          // _this.btnLoading = false;
        }, function (error) {
          setSubmitting(false);
          // _this.btnLoading = false;
          // console.log(JSON.stringify(error, undefined, 2));
        });
    });
  }, [scriptLoaded]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setScriptLoaded(!!window.gapi)
    }
  }, [])

  const showError = () => {
    if (!error) {
      return false;
    }
    // if (hasClaims && error?.code === "Unauthorized") {
    //   return false;
    // }
    if (!submitted) {
      return false;
    }
    return true;
  }
  const googleLogin = () => {
    console.log(
      'google login'
    )

  }


  return (


    <div className="bg-indigo-50 border-indigo-900 border-2 p-12 min-h-screen w-full">
      <div
        className="bg-gray-200 bg-gradient-to-r from-indigo-600 to-indigo-900 fixed top-0 left-0 w-full h-full opacity-40" />
      <div className="bg-gradient-to-r from-transparent to-black fixed top-0 left-0 w-full h-full opacity-50" />
      <div className="content relative z-10">
        <div>Hello { user?.name || '-' }</div>

        <div>
          submitted ? <code className="inline">{ JSON.stringify(submitted) }</code>
        </div>

        <LoginBtn
          id="glogin"
          onClick={ () => googleLogin() }
        >
          Sign in with Google
        </LoginBtn>

        {/*<LoginBtn onClick={ () => void whoami() }>*/}
        {/*  Who Am i?*/}
        {/*</LoginBtn>*/}
      </div>

    </div>
  )
}


const LoginBtn = ({ children, ...props }) => {
  return (
    <button
      className="p-3 text-xs inline-flex cursor-pointer items-center justify-center font-medium rounded focus:outline-none focus:ring-2 focus:ring-offset-2
 transition-all whitespace-nowrap
        transition-opacity group border border-gray-300 shadow-sm text-sm text-gray-700 bg-white hover:bg-gray-50 focus:ring-indigo-500 transition-all"
      { ...props }
    >
      { children }
    </button>
  )
}