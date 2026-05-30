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

      <LanguageSwitcher />

      <h1>IMO Diamond Store BD</h1>

      <p>Trusted IMO Diamond Seller</p>

      <NotificationBox />

      <PackageList />

      <PaymentMethod />

      <WarningNotice />

      <Footer />
    </div>
  );
}

export default Home;
