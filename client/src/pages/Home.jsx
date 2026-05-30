import Navbar from "../components/Navbar";
import LanguageSwitcher from "../components/LanguageSwitcher";
import PackageList from "../components/PackageList";
import WarningNotice from "../components/WarningNotice";
import NotificationBox from "../components/NotificationBox";
import PaymentMethod from "../components/PaymentMethod";
import Footer from "../components/Footer";

function Home() {
return (
<div>
<Navbar />

  <div style={{ textAlign: "center", padding: "20px" }}>
    <LanguageSwitcher />

    <h1 style={{ color: "#ff7a00", marginTop: "15px" }}>
      IMO Diamond Store BD
    </h1>

    <p style={{ marginTop: "10px" }}>
      Trusted & Fast IMO Diamond Seller
    </p>
  </div>

  <NotificationBox />

  <PackageList />

  <PaymentMethod />

  <WarningNotice />

  <Footer />
</div>

);
}

export default Home;
