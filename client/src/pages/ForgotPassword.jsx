function ForgotPassword() {
  return (
    <div>
      <h1>Forgot Password</h1>

      <p>
        Enter your email address to receive a password reset link.
      </p>

      <input
        type="email"
        placeholder="Enter your Email"
      />

      <br />
      <br />

      <button>Send Reset Link</button>
    </div>
  );
}

export default ForgotPassword;
