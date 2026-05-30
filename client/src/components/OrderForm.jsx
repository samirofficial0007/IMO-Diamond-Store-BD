function OrderForm() {
return (
<div
id="order-form"
style={{
background:
"linear-gradient(135deg,#1D262B,#242E35,#4D626C)",
border: "1px solid #A6D2E6",
borderRadius: "16px",
padding: "20px",
margin: "15px",
boxShadow: "0 0 15px rgba(166,210,230,0.25)"
}}
>
<h2
style={{
color: "#CBE6F2",
marginBottom: "15px",
textAlign: "center"
}}
>
Place Your Order
</h2>

  <input
    type="text"
    placeholder="Enter IMO UID"
    style={{
      width: "100%",
      padding: "12px",
      marginBottom: "10px",
      borderRadius: "8px",
      border: "1px solid #A6D2E6"
    }}
  />

  <select
    style={{
      width: "100%",
      padding: "12px",
      marginBottom: "10px",
      borderRadius: "8px"
    }}
  >
    <option>Select Package</option>
    <option>25 Diamond</option>
    <option>50 Diamond</option>
    <option>115 Diamond</option>
    <option>240 Diamond</option>
    <option>355 Diamond</option>
    <option>420 Diamond</option>
    <option>610 Diamond</option>
    <option>840 Diamond</option>
    <option>1240 Diamond</option>
    <option>2530 Diamond</option>
    <option>5060 Diamond</option>
    <option>10120 Diamond</option>
  </select>

  <select
    style={{
      width: "100%",
      padding: "12px",
      marginBottom: "10px",
      borderRadius: "8px"
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
      padding: "12px",
      marginBottom: "10px",
      borderRadius: "8px",
      border: "1px solid #A6D2E6"
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
