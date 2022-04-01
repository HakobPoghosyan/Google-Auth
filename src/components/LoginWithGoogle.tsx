import GoogleLogin from "react-google-login";

const LoginWithGoogle = (): JSX.Element => {
  const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID as string;
  const redirectUri = process.env.REACT_APP_REDIRECT_URI as string;

  const onFailure = (res: any): void => {
    console.log("[Login Failed] res:", res);
  };

  const handleLogin = (googleData: any): void => {
    console.log(googleData);
  };

  return (
    <GoogleLogin
      clientId={clientId}
      redirectUri={redirectUri}
      onSuccess={handleLogin}
      onFailure={onFailure}
      cookiePolicy="single_host_origin"
      buttonText="Login with Google"
    />
  );
};

export default LoginWithGoogle;
