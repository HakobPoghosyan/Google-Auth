import GoogleLogin from "react-google-login";

const LoginWithGoogle = (): JSX.Element => {
  const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID as string;

  const onFailure = (res: unknown): void => {
    console.log("[Login Failed] res:", res);
  };

  const handleLogin = (googleData: any): void => {
    console.log(googleData);
  };

  return (
    <GoogleLogin
      clientId={clientId}
      redirectUri=""
      onSuccess={handleLogin}
      onFailure={onFailure}
      cookiePolicy="single_host_origin"
      buttonText="Login with Google"
    />
  );
};

export default LoginWithGoogle;
