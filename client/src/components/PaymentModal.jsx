import { useState } from "react";

function PaymentModal({ isOpen, onClose }) {
const [method, setMethod] = useState("Nagad");
const [copied, setCopied] = useState(false);

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

setCopied(true);

setTimeout(() => {
  setCopied(false);
}, 2000);

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
padding: "20px",
color: "#CBE6F2"
}}
>
<h2
style={{
textAlign: "center",
marginBottom: "15px"
}}
>
Payment Form
</h2>

    <input
      type="text"
      placeholder="Enter IMO ID"
      style={{
        width: "100%",
        padding: "10px",
        marginBottom: "10px",
        borderRadius: "8px"
      }}
    />

    <select
      value={method}
      onChange={(e) => setMethod(e.target.value)}
      style={{
        width: "100%",
        padding: "10px",
        marginBottom: "10px",
        background: "#242E35",
        color: "#CBE6F2",
        border: "1px solid #A6D2E6",
        borderRadius: "8px"
      }}
    >
      <option value="Nagad">Nagad</option>
      <option value="bKash">bKash</option>
      <option value="Binance Pay">Binance Pay</option>
    </select>

    {method === "Nagad" && (
      <p
        style={{
          fontSize: "13px",
          marginBottom: "8px"
        }}
      >
        Nagad Personal Number (Send Money)
      </p>
    )}

    <div
      style={{
        background: "#242E35",
        padding: "12px",
        borderRadius: "8px",
        marginBottom: "10px",
        textAlign: "center",
        fontWeight: "bold"
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

    {copied && (
      <p
        style={{
          textAlign: "center",
          color: "#A6D2E6",
          marginBottom: "10px"
        }}
      >
        Copied ✓
      </p>
    )}

    <div
      style={{
        color: "#ffb3b3",
        fontSize: "13px",
        marginBottom: "10px"
      }}
    >
      ⚠️ ভুল IMO ID দিলে বা ভুল নম্বরে টাকা পাঠালে
      আমরা কোনো দায়ভার গ্রহণ করবো না।
      Payment করার আগে সব তথ্য যাচাই করুন।
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
        marginBottom: "10px",
        borderRadius: "8px"
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
