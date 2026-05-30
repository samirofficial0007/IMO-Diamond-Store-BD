import DiamondCard from "./DiamondCard";

function PackageList() {
const packages = [
{ diamond: 25, price: 25 },
{ diamond: 50, price: 50 },
{ diamond: 115, price: 110 },
{ diamond: 240, price: 220 },
{ diamond: 355, price: 330 },
{ diamond: 420, price: 500 },
{ diamond: 610, price: 650 },
{ diamond: 840, price: 1000 },
{ diamond: 1240, price: 1400 },
{ diamond: 2530, price: 2800 },
{ diamond: 5060, price: 5500 },
{ diamond: 10120, price: 11000 }
];

return (
<div>
<h2>Diamond Packages</h2>

  <div className="package-container">
    {packages.map((pkg, index) => (
      <DiamondCard
        key={index}
        diamond={pkg.diamond}
        price={pkg.price}
      />
    ))}
  </div>
</div>

);
}

export default PackageList;
