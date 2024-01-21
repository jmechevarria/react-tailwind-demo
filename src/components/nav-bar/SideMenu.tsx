type SideMenuProps = {
  open: boolean;
};

import { Link } from "react-router-dom";
import styles from "./SideMenu.module.css";

export default function SideMenu({ open }: SideMenuProps) {
  const menuItems: { label: string; route?: string }[] = [
    {
      label: "Home",
      route: "/",
    },
    {
      label: "Vision",
    },
    {
      label: "Residences",
    },
    {
      label: "Amenities",
    },
    {
      label: "Neighborhood",
    },
    {
      label: "Availability",
    },
    {
      label: "Gallery",
    },
    {
      label: "Contact",
      route: "/contact",
    },
  ];

  return (
    <div
      className={`fixed left-0 top-0 w-96 h-dvh bg-sky-950 duration-700 ${
        open ? "translate-x-0" : "-translate-x-full"
      } z-10 py-32 pl-10 text-white overflow-auto uppercase`}
    >
      <ul
        id={`${styles.list}`}
        className={`text-3xl ${open && styles.visible}`}
      >
        {menuItems.map((action, index) => (
          <li
            key={index}
            style={{
              transition: `color 0.4s 0s ease, opacity 0.5s ${
                (index + 2) * 100
              }ms, transform 0.5s ${(index + 2) * 100}ms`,
            }}
            className={`${
              open ? "opacity-1 translate-x-0" : "opacity-0 -translate-x-1/4"
            } mb-5 hover:text-amber-800`}
          >
            <Link to={action.route || "#"}>
              {action.label}{" "}
              {action.route ? (
                <span className="lowercase text-sm">(demoed)</span>
              ) : (
                ""
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
