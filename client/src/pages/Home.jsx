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
      padding: "35px 20px"
    }}
  >
    <LanguageSwitcher />

    <div
      style={{
        marginTop: "25px",
        background:
          "linear-gradient(135deg, #1D262B, #242E35, #4D626C)",
        border: "1px solid #A6D2E6",
        borderRadius: "18px",
        padding: "25px",
        boxShadow: "0 0 20px rgba(166,210,230,0.25)"
      }}
    >
      <div
        style={{
          fontSize: "48px",
          color: "#CBE6F2",
          textShadow:
            "0 0 12px rgba(166,210,230,0.8)"
        }}
      >
        ◈
      </div>

      <h1
        style={{
          color: "#CBE6F2",
          marginTop: "10px",
          fontSize: "32px",
          textShadow:
            "0 0 15px rgba(166,210,230,0.8)"
        }}
      >
        IMO Black Diamond Store BD
      </h1>

      <p
        style={{
          marginTop: "12px",
          color: "#A6D2E6"
        }}
      >
        Fast • Trusted • Secure Delivery
      </p>

      <p
        style={{
          marginTop: "10px",
          color: "#CBE6F2",
          fontSize: "14px"
        }}
      >
        ✓ Instant Processing
        <br />
        ✓ Trusted Seller
        <br />
        ✓ Manual Verification
      </p>

      <div
        style={{
          marginTop: "20px"
        }}
      >
        <button>
          Buy Diamond Now
        </button>
      </div>
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
