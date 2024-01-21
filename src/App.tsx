import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LandingPage from "./components/landing-page/LandingPage";
import Contact from "./components/contact/Contact";
import RootLayout from "./components/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="font-grotesk">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
