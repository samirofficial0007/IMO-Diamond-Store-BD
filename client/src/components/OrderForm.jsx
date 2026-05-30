function OrderForm() {
return (
<div
id="order-form"
style={{
background: "linear-gradient(135deg,#1D262B,#242E35,#4D626C)",
border: "1px solid #A6D2E6",
borderRadius: "16px",
padding: "20px",
margin: "15px"
}}
>
<h2
style={{
color: "#CBE6F2",
marginBottom: "15px"
}}
>
Place Your Order
</h2>

  <input
    type="text"
    placeholder="Enter IMO UID"
    style={{
      width: "100%",
      padding: "10px",
      marginBottom: "10px"
    }}
  />

  <select
    style={{
      width: "100%",
      padding: "10px",
      marginBottom: "10px"
    }}
  >
    <option>bKash</option>
    <option>Nagad</option>
    <option>Binance Pay</option>
  </select>

  <input
    type="text"
    placeholder="Transaction ID"
    style={{
      width: "100%",
      padding: "10px",
      marginBottom: "10px"
    }}
  />

  <button
    style={{
      width: "100%"
    }}
  >
    Submit Order
  </button>
</div>

);
}

export default OrderForm;
