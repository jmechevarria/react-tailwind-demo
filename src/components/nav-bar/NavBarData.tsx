import Hamburger from "./Hamburger";
import styles from "./NavBar.module.css";
import SideMenu from "./SideMenu";

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
  return (
    <div
      className={`relative flex items-center uppercase justify-between text-sm z-10 px-10 ${
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
          } z-20`}
        >
          Schedule an appointment
        </h4>
        <SideMenu open={sideMenuOpen}></SideMenu>
        <div
          className={`absolute w-screen h-screen top-0 left-0 bg-black
        ${
          sideMenuOpen
            ? "opacity-50 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } `}
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
        <button
          className="uppercase bg-slate-200 hover:bg-yellow-700 text-slate-800 hover:text-stone-100 py-2 px-4
    transition-colors duration-500"
        >
          Contact
        </button>
      </div>
    </div>
  );
}
