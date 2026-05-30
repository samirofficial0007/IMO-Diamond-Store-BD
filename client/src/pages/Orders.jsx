function Orders() {
  return (
    <div>
      <h1>My Orders</h1>

      <div>
        <h3>Order #1001</h3>
        <p>Diamond: 420</p>
        <p>Price: 500 BDT</p>
        <p>Status: Pending</p>
      </div>

      <hr />

      <div>
        <h3>Order #1002</h3>
        <p>Diamond: 840</p>
        <p>Price: 1000 BDT</p>
        <p>Status: Processing</p>
      </div>

      <hr />

      <div>
        <h3>Order #1003</h3>
        <p>Diamond: 2100</p>
        <p>Price: 2500 BDT</p>
        <p>Status: Completed</p>
      </div>

      <hr />

      <div>
        <h3>Order #1004</h3>
        <p>Diamond: 4200</p>
        <p>Price: 5000 BDT</p>
        <p>Status: Payment Not Found</p>
      </div>
    </div>
  );
}

export default Orders;
