function Users() {
  return (
    <div>
      <h1>User Management</h1>

      <hr />

      <input
        type="text"
        placeholder="Search User"
      />

      <br />
      <br />

      <button>Search</button>

      <hr />

      <h2>Registered Users</h2>

      <div>
        <p>Username: user123</p>
        <p>Email: user123@example.com</p>
        <p>Status: Active</p>

        <button>View Profile</button>
        <button>Disable Account</button>
      </div>

      <hr />

      <div>
        <p>Username: user456</p>
        <p>Email: user456@example.com</p>
        <p>Status: Active</p>

        <button>View Profile</button>
        <button>Disable Account</button>
      </div>
    </div>
  );
}

export default Users;
