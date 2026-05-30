function DiamondCard({ diamond, price }) {
return (
<div className="package-card">
<h3>{diamond} Diamond</h3>

  <p>{price} BDT</p>

  <button>Buy Now</button>
</div>

);
}

export default DiamondCard;
