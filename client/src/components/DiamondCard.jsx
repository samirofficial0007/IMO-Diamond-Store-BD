function DiamondCard({ diamond, price }) {
  return (
    <div>
      <h3>{diamond} Diamond</h3>

      <p>Price: {price} BDT</p>

      <button>Buy Now</button>
    </div>
  );
}

export default DiamondCard;
