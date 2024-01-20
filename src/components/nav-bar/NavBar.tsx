import { useEffect, useState } from "react";
import NavBarData from "./NavBarData";
import Logo from "./Logo";
import NavBarBackground from "./NavBarBackground";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [sideMenuOpen, setSideMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 5);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed w-dvw z-10`}>
      <Logo scrolled={scrolled}></Logo>
      <NavBarBackground scrolled={scrolled}></NavBarBackground>
      <NavBarData
        scrolled={scrolled}
        sideMenuOpen={sideMenuOpen}
        setSideMenuOpen={setSideMenuOpen}
      ></NavBarData>
    </nav>
  );
}
