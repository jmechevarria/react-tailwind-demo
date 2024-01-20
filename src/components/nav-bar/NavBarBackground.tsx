import styles from "./NavBar.module.css";
type NavBarBackgroundProps = {
  scrolled: boolean;
};

export default function NavBarBackground({ scrolled }: NavBarBackgroundProps) {
  return (
    <div
      className={`relative ${styles["navbar-bg"]} after:bg-sky-950 ${
        scrolled ? `${styles.scrolled}` : ``
      } `}
    ></div>
  );
}
