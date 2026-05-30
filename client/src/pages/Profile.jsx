function Profile() {
  return (
    <div>
      <h1>My Profile</h1>

      <p>Username: User</p>
      <p>Email: user@example.com</p>

      <hr />

      <h2>Account</h2>

      <button>Edit Profile</button>

      <br />
      <br />

      <button>Change Password</button>

      <hr />

      <h2>Orders</h2>

      <p>Pending Orders: 0</p>
      <p>Processing Orders: 0</p>
      <p>Completed Orders: 0</p>

      <hr />

      <h2>Notifications</h2>

      <p>No notifications yet.</p>

      <hr />

      <h2>Language</h2>

      <button>English</button>
      <button>বাংলা</button>

      <hr />

      <button>Logout</button>
    </div>
  );
}

export default Profile;
