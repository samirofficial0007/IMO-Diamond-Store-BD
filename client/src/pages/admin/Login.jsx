function AdminLogin() {
  return (
    <div>
      <h1>Admin Login</h1>

      <p>Authorized Access Only</p>

      <br />

      <input
        type="text"
        placeholder="Admin Username"
      />

      <br />
      <br />

      <input
        type="password"
        placeholder="Admin Password"
      />

      <br />
      <br />

      <button>Login</button>

      <br />
      <br />

      <p>
        Hidden Route:
        /imo-samir-admin-0007
      </p>
    </div>
  );
}

export default AdminLogin;
