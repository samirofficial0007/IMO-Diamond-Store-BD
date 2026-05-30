import { useState } from "react";

function Navbar() {
const [menuOpen, setMenuOpen] = useState(false);

const scrollToPackages = () => {
const section = document.getElementById("packages");

if (section) {
  section.scrollIntoView({
    behavior: "smooth"
  });
}

setMenuOpen(false);

};

const scrollToTop = () => {
window.scrollTo({
top: 0,
behavior: "smooth"
});

setMenuOpen(false);

};

return (
<nav>
<div
style={{
display: "flex",
justifyContent: "space-between",
alignItems: "center"
}}
>
<button
onClick={() => setMenuOpen(!menuOpen)}
style={{
fontSize: "20px"
}}
>
☰
</button>

    <h2
      style={{
        color: "#CBE6F2",
        textShadow: "0 0 10px rgba(166,210,230,0.8)",
        fontSize: "18px"
      }}
    >
      ◈ IMO Black Diamond Store BD
    </h2>
  </div>

  {menuOpen && (
    <div
      style={{
        marginTop: "15px",
        display: "flex",
        flexDirection: "column",
        gap: "8px"
      }}
    >
      <button onClick={scrollToTop}>
        Home
      </button>

      <button onClick={scrollToPackages}>
        Buy Diamond
      </button>

      <button>
        Login
      </button>

      <button>
        Register
      </button>

      <button>
        Contact
      </button>

      <button>
        English
      </button>

      <button>
        বাংলা
      </button>
    </div>
  )}
</nav>

);
}

export default Navbar;
