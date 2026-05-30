function WarningNotice() {
return (
<div
style={{
background: "#1b1b1b",
border: "1px solid #ff7a00",
borderRadius: "12px",
margin: "15px",
padding: "15px"
}}
>
<h2 style={{ color: "#ff7a00", marginBottom: "10px" }}>
⚠️ Important Notice
</h2>

  <ul style={{ paddingLeft: "20px" }}>
    <li>Check your IMO ID carefully.</li>
    <li>Transaction ID must be correct.</li>
    <li>Duplicate Transaction IDs are not allowed.</li>
    <li>Orders are manually verified.</li>
    <li>Fake payments will be rejected.</li>
  </ul>
</div>

);
}

export default WarningNotice;
