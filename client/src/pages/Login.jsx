function Login() {
  return (
    <div>
      <h1>Login</h1>

      <input
        type="text"
        placeholder="Email or Username"
      />

      <br />
      <br />

      <input
        type="password"
        placeholder="Password"
      />

      <br />
      <br />

      <button>Login</button>

      <br />
      <br />

      <button>Continue with Google</button>

      <br />
      <br />

      <a href="#">Forgot Password?</a>
    </div>
  );
}

export default Login;
