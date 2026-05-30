function AdminOrders() {
  return (
    <div>
      <h1>Manage Orders</h1>

      <hr />

      <div>
        <h3>Order #1001</h3>
        <p>User: user123</p>
        <p>IMO ID: 123456789</p>
        <p>Diamond: 420</p>
        <p>Price: 500 BDT</p>
        <p>Status: Pending</p>

        <button>Processing</button>
        <button>Completed</button>
        <button>Payment Not Found</button>
      </div>

      <hr />

      <div>
        <h3>Order #1002</h3>
        <p>User: user456</p>
        <p>IMO ID: 987654321</p>
        <p>Diamond: 840</p>
        <p>Price: 1000 BDT</p>
        <p>Status: Processing</p>

        <button>Completed</button>
        <button>Payment Not Found</button>
      </div>
    </div>
  );
}

export default AdminOrders;
