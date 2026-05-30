function Payments() {
  return (
    <div>
      <h1>Payment Settings</h1>

      <hr />

      <h2>bKash</h2>

      <input
        type="text"
        placeholder="bKash Number"
      />

      <br />
      <br />

      <button>Save bKash Number</button>

      <hr />

      <h2>Nagad</h2>

      <input
        type="text"
        placeholder="Nagad Number"
      />

      <br />
      <br />

      <button>Save Nagad Number</button>

      <hr />

      <h2>Binance Pay</h2>

      <input
        type="text"
        placeholder="Binance Pay ID"
      />

      <br />
      <br />

      <button>Save Binance ID</button>

      <hr />

      <h2>Current Settings</h2>

      <p>bKash: Not Set</p>
      <p>Nagad: Not Set</p>
      <p>Binance Pay ID: 895171022</p>
    </div>
  );
}

export default Payments;
