import { useState } from "react";

function PaymentModal({ isOpen, onClose }) {
const [method, setMethod] = useState("Nagad");

if (!isOpen) return null;

const getPaymentInfo = () => {
if (method === "bKash") {
return "Coming Soon";
}

if (method === "Nagad") {
  return "01631603338";
}

return "895171022";

};

const copyInfo = () => {
navigator.clipboard.writeText(getPaymentInfo());
alert("Copied");
};

return (
<div
style={{
position: "fixed",
inset: 0,
background: "rgba(0,0,0,0.8)",
display: "flex",
justifyContent: "center",
alignItems: "center",
zIndex: 9999
}}
>
<div
style={{
width: "90%",
maxWidth: "420px",
background: "#1D262B",
border: "1px solid #A6D2E6",
borderRadius: "16px",
padding: "20px"
}}
>
<h2>Payment Form</h2>

    <input
      type="text"
      placeholder="Enter IMO ID"
      style={{
        width: "100%",
        padding: "10px",
        marginTop: "10px",
        marginBottom: "10px"
      }}
    />

    <select
      value={method}
      onChange={(e) => setMethod(e.target.value)}
      style={{
        width: "100%",
        padding: "10px",
        marginBottom: "10px"
      }}
    >
      <option>Nagad</option>
      <option>bKash</option>
      <option>Binance Pay</option>
    </select>

    <div
      style={{
        background: "#242E35",
        padding: "10px",
        borderRadius: "8px",
        marginBottom: "10px"
      }}
    >
      {getPaymentInfo()}
    </div>

    <button
      onClick={copyInfo}
      style={{
        width: "100%",
        marginBottom: "10px"
      }}
    >
      Copy
    </button>

    <div
      style={{
        color: "#ffb3b3",
        fontSize: "13px",
        marginBottom: "10px"
      }}
    >
      ⚠️ ভুল IMO ID অথবা ভুল নম্বরে টাকা পাঠালে
      আমরা দায়ী থাকবো না।
    </div>

    <input
      type="text"
      placeholder={
        method === "Binance Pay"
          ? "Enter Order ID"
          : "Enter Transaction ID"
      }
      style={{
        width: "100%",
        padding: "10px",
        marginBottom: "10px"
      }}
    />

    <button
      style={{
        width: "100%",
        marginBottom: "10px"
      }}
    >
      Submit Order
    </button>

    <button
      onClick={onClose}
      style={{
        width: "100%"
      }}
    >
      Close
    </button>
  </div>
</div>

);
}

export default PaymentModal;
