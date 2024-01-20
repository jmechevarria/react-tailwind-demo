type SideMenuProps = {
  open: boolean;
};

import styles from "./SideMenu.module.css";

export default function SideMenu({ open }: SideMenuProps) {
  return (
    <div
      className={`fixed left-0 top-0 w-96 h-dvh bg-sky-950 duration-700 ${
        open ? "translate-x-0" : "-translate-x-full"
      } z-10 py-32 pl-10 text-white overflow-auto`}
    >
      <ul id={`${styles.list}`} className="text-3xl">
        <li>
          <a href="#"> Home</a>
        </li>
        <li>
          <a href="#">Vision</a>
        </li>
        <li>
          <a href="#">Residences</a>
        </li>
        <li>
          <a href="#">Amenities</a>
        </li>
        <li>
          <a href="#">Neighborhood</a>
        </li>
        <li>
          <a href="#">Availability</a>
        </li>
        <li>
          <a href="#">Gallery</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </div>
  );
}
