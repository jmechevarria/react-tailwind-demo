import { Outlet } from "react-router-dom";
import NavBar from "./nav-bar/NavBar";

export default function RootLayout() {
  return (
    <>
      <NavBar></NavBar>
      <Outlet />
    </>
  );
}
