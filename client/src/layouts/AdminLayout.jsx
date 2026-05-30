function AdminLayout({ children }) {
  return (
    <div>
      <header>
        <h1>IMO Diamond Store BD - Admin Panel</h1>
      </header>

      <hr />

      <nav>
        <button>Dashboard</button>
        <button>Orders</button>
        <button>Packages</button>
        <button>Payments</button>
        <button>Users</button>
        <button>Notifications</button>
        <button>Settings</button>
      </nav>

      <hr />

      <main>
        {children}
      </main>

      <hr />

      <footer>
        <p>Admin Panel</p>
      </footer>
    </div>
  );
}

export default AdminLayout;
