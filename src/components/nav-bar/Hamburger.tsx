import { useState } from "react";

type HamburgerProps = {
  scrolled: boolean;
  sideMenuOpen: boolean;
  setSideMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Hamburger({
  scrolled = false,
  sideMenuOpen = false,
  setSideMenuOpen,
}: HamburgerProps) {
  const borderBottom = `2px solid ${
    scrolled || sideMenuOpen ? "white" : "black"
  }`;
  const [hover, setHover] = useState(false);

  return (
    <div
      onClick={() => {
        setSideMenuOpen(!sideMenuOpen);
      }}
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
      style={{ width: 32, height: 13 }}
      className="relative cursor-pointer mr-5 z-20"
    >
      <span
        style={{
          width: "inherit",
          position: "absolute",
          display: "block",
          top: 0,
          borderBottom,
          transition: `border 0.5s 0s ease, transform .7s 0s ease`,
          transform: sideMenuOpen ? "translateY(300%) rotate(45deg)" : "none",
        }}
      ></span>
      <span
        style={{
          position: "absolute",
          display: "block",
          top: "50%",
          borderBottom,
          width: hover ? "inherit" : 25,
          transition:
            "border 0.5s 0s ease, width 0.5s 0s ease, transform .7s 0s ease, opacity .5s 0s ease",
          transform: sideMenuOpen ? "translateX(150%)" : "none",
          opacity: sideMenuOpen ? 0 : 1,
        }}
      ></span>
      <span
        style={{
          position: "absolute",
          width: "inherit",
          top: "100%",
          display: "block",
          borderBottom,
          transition: "border 0.5s 0s ease, transform .7s 0s ease",
          transform: sideMenuOpen ? "translateY(-400%) rotate(-45deg)" : "none",
        }}
      ></span>
    </div>
  );
}
