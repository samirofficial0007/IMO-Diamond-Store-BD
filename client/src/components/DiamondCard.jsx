function DiamondCard({ diamond, price }) {
return (
<div className="package-card">
<div
style={{
fontSize: "38px",
color: "#CBE6F2",
textShadow:
"0 0 10px rgba(166,210,230,0.8), 0 0 20px rgba(166,210,230,0.4)",
marginBottom: "10px"
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
