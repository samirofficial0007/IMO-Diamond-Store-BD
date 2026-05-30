function Payment() {
  return (
    <div>
      <h1>Payment</h1>

      <h2>Order Details</h2>

      <p>Diamond: 420</p>
      <p>Total Price: 500 BDT</p>

      <hr />

      <h2>IMO Information</h2>

      <input
        type="text"
        placeholder="Enter IMO ID"
      />

      <hr />

      <h2>Select Payment Method</h2>

      <div>
        <input type="radio" name="payment" />
        <label>bKash</label>
      </div>

      <div>
        <input type="radio" name="payment" />
        <label>Nagad</label>
      </div>

      <div>
        <input type="radio" name="payment" />
        <label>Binance Pay</label>
      </div>

      <hr />

      <h2>Payment Information</h2>

      <p>bKash Number: Your bKash Number</p>
      <p>Nagad Number: Your Nagad Number</p>
      <p>Binance Pay ID: 895171022</p>

      <hr />

      <input
        type="text"
        placeholder="Transaction ID"
      />

      <br />
      <br />

      <input
        type="file"
      />

      <p>Screenshot Upload (Optional)</p>

      <br />

      <button>Confirm Order</button>
    </div>
  );
}

export default Payment;
