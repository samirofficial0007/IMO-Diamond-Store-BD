function Register() {
  return (
    <div>
      <h1>Create Account</h1>

      <input
        type="text"
        placeholder="Username"
      />

      <br />
      <br />

      <input
        type="email"
        placeholder="Email"
      />

      <br />
      <br />

      <input
        type="password"
        placeholder="Password"
      />

      <br />
      <br />

      <input
        type="password"
        placeholder="Confirm Password"
      />

      <br />
      <br />

      <button>Create Account</button>

      <br />
      <br />

      <button>Continue with Google</button>
    </div>
  );
}

export default Register;
