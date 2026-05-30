function Dashboard() {
  return (
    <div>
      <h1>Admin Dashboard</h1>

      <hr />

      <h2>Order Statistics</h2>

      <p>Total Orders: 0</p>
      <p>Pending Orders: 0</p>
      <p>Processing Orders: 0</p>
      <p>Completed Orders: 0</p>
      <p>Payment Not Found: 0</p>

      <hr />

      <h2>Quick Actions</h2>

      <button>Manage Orders</button>

      <br />
      <br />

      <button>Manage Packages</button>

      <br />
      <br />

      <button>Manage Payments</button>

      <br />
      <br />

      <button>Send Notification</button>

      <hr />

      <h2>Recent Orders</h2>

      <p>No Orders Found</p>
    </div>
  );
}

export default Dashboard;
