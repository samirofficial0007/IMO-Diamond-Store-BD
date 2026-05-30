function Packages() {
  return (
    <div>
      <h1>Manage Diamond Packages</h1>

      <hr />

      <h2>Add New Package</h2>

      <input
        type="text"
        placeholder="Diamond Amount"
      />

      <br />
      <br />

      <input
        type="text"
        placeholder="Price (BDT)"
      />

      <br />
      <br />

      <button>Add Package</button>

      <hr />

      <h2>Current Packages</h2>

      <div>
        <p>420 Diamond - 500 BDT</p>

        <button>Edit</button>
        <button>Delete</button>
      </div>

      <hr />

      <div>
        <p>840 Diamond - 1000 BDT</p>

        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  );
}

export default Packages;
