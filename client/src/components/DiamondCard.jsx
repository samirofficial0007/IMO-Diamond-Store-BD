function DiamondCard({ diamond, price }) {
return (
<div className="package-card">
<div
style={{
fontSize: "34px",
marginBottom: "10px",
color: "#CBE6F2",
textShadow: "0 0 12px rgba(166,210,230,0.9)"
}}
>
◈
</div>

  <h3>{diamond} Diamond</h3>

  <p>{price} BDT</p>

  <button>Buy Now</button>
</div>

);
}

export default DiamondCard;
