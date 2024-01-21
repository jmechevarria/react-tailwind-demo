import { useEffect } from "react";
import Hamburger from "./Hamburger";
import styles from "./NavBar.module.css";
import SideMenu from "./SideMenu";
import { Link } from "react-router-dom";

type NavBarDataProps = {
  scrolled: boolean;
  sideMenuOpen: boolean;
  setSideMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function NavBarData({
  scrolled = false,
  sideMenuOpen = false,
  setSideMenuOpen,
}: NavBarDataProps) {
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (sideMenuOpen && event.key === "Escape") setSideMenuOpen(false);
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  });

  return (
    <div
      className={`relative flex items-center justify-between text-sm z-10 px-5 lg:px-10 ${
        styles["navbar-data"]
      } ${scrolled && styles.scrolled}`}
    >
      <div className="flex justify-around items-center">
        <Hamburger
          scrolled={scrolled}
          sideMenuOpen={sideMenuOpen}
          setSideMenuOpen={setSideMenuOpen}
        />
        <h4
          className={`${
            styles["animated-underline"]
          } cursor-pointer transition-colors duration-500 ${
            sideMenuOpen || scrolled
              ? "text-white after:bg-white"
              : "text-black after:bg-black"
          } z-20 uppercase`}
        >
          Schedule an appointment
        </h4>
        <SideMenu open={sideMenuOpen}></SideMenu>

        {/* Overlay shown when the side menu is open */}
        <div
          className={`absolute w-screen h-screen top-0 left-0 bg-black
        ${
          sideMenuOpen
            ? "opacity-50 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } `}
          onClick={() => {
            setSideMenuOpen(false);
          }}
        ></div>
      </div>

      <div className="flex justify-around items-center -z-10">
        <h4
          className={`${styles["animated-underline"]} ${
            scrolled ? "after:bg-white" : "after:bg-black"
          } cursor-pointer transition-colors duration-500 mr-5`}
        >
          000.000.0000
        </h4>
        <Link
          to="/contact"
          role="button"
          className="uppercase bg-slate-200 hover:bg-yellow-700 text-slate-800 hover:text-stone-100 py-2 px-4
    transition-colors duration-500"
        >
          Contact
        </Link>
      </div>
    </div>
  );
}
