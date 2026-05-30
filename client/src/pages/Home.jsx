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

  <div
    style={{
      textAlign: "center",
      padding: "30px 20px"
    }}
  >
    <LanguageSwitcher />

    <h1
      style={{
        color: "#CBE6F2",
        marginTop: "20px",
        fontSize: "32px",
        textShadow: "0 0 15px rgba(166,210,230,0.8)"
      }}
    >
      ◈ IMO Black Diamond Store BD
    </h1>

    <p
      style={{
        marginTop: "12px",
        color: "#A6D2E6"
      }}
    >
      Fast • Trusted • Secure Diamond Delivery
    </p>

    <div
      style={{
        marginTop: "20px"
      }}
    >
      <button>Buy Diamond Now</button>
    </div>
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
