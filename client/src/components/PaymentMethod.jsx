function PaymentMethod() {
return (
<div
style={{
background: "#1b1b1b",
border: "1px solid #333",
borderRadius: "12px",
margin: "15px",
padding: "15px"
}}
>
<h2 style={{ color: "#ff7a00", marginBottom: "10px" }}>
💳 Payment Methods
</h2>

  <ul style={{ paddingLeft: "20px" }}>
    <li>bKash</li>
    <li>Nagad</li>
    <li>Binance Pay</li>
  </ul>
</div>

);
}

export default PaymentMethod;
