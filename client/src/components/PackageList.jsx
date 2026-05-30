import DiamondCard from "./DiamondCard";

function PackageList() {
  return (
    <div>
      <h2>Diamond Packages</h2>

      <DiamondCard diamond="25" price="25" />
      <DiamondCard diamond="50" price="50" />
      <DiamondCard diamond="115" price="110" />
      <DiamondCard diamond="240" price="220" />
      <DiamondCard diamond="420" price="500" />
      <DiamondCard diamond="840" price="1000" />
    </div>
  );
}

export default PackageList;
