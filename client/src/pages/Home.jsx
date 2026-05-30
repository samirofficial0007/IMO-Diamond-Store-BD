import Navbar from "../components/Navbar";
import LanguageSwitcher from "../components/LanguageSwitcher";
import PackageList from "../components/PackageList";
import WarningNotice from "../components/WarningNotice";

function Home() {
  return (
    <div>
      <Navbar />

      <LanguageSwitcher />

      <h1>IMO Diamond Store BD</h1>

      <p>Trusted IMO Diamond Seller</p>

      <PackageList />

      <WarningNotice />
    </div>
  );
}

export default Home;
