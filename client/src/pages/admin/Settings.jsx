function Settings() {
  return (
    <div>
      <h1>Website Settings</h1>

      <hr />

      <h2>Website Information</h2>

      <input
        type="text"
        placeholder="Website Name"
      />

      <br />
      <br />

      <input
        type="text"
        placeholder="Logo Text"
      />

      <br />
      <br />

      <button>Save Website Settings</button>

      <hr />

      <h2>Contact Settings</h2>

      <input
        type="text"
        placeholder="Telegram Link"
      />

      <br />
      <br />

      <input
        type="text"
        placeholder="Facebook Link"
      />

      <br />
      <br />

      <input
        type="text"
        placeholder="Discord Username"
      />

      <br />
      <br />

      <button>Save Contact Settings</button>

      <hr />

      <h2>Language</h2>

      <button>English</button>
      <button>বাংলা</button>

      <hr />

      <h2>Maintenance Mode</h2>

      <button>Enable Maintenance</button>
      <button>Disable Maintenance</button>

      <hr />

      <h2>Current Information</h2>

      <p>Website: IMO Diamond Store BD</p>
      <p>Discord: panelvai07</p>
      <p>Binance Pay ID: 895171022</p>
    </div>
  );
}

export default Settings;
