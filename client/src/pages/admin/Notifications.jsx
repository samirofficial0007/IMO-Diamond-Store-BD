function Notifications() {
  return (
    <div>
      <h1>Notification Management</h1>

      <hr />

      <h2>Send Notification</h2>

      <input
        type="text"
        placeholder="Notification Title"
      />

      <br />
      <br />

      <textarea
        placeholder="Notification Message"
        rows="5"
        cols="40"
      />

      <br />
      <br />

      <button>Send Notification</button>

      <hr />

      <h2>Quick Notifications</h2>

      <button>Order Completed</button>

      <br />
      <br />

      <button>Payment Not Found</button>

      <br />
      <br />

      <button>Maintenance Notice</button>

      <br />
      <br />

      <button>New Diamond Offer</button>

      <hr />

      <h2>Recent Notifications</h2>

      <p>No Notifications Sent Yet</p>
    </div>
  );
}

export default Notifications;
