import React ,{lazy,Suspense}from "react";
import { useSelector } from "react-redux";
import { Header, Footer } from "./components/index";
import { About, Contact, Grocery, Home, RestMenu,Cart } from "./components/index";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import CheckOnline from "./components/checkOnline/CheckOnline";
import ScrollToTop from "./components/ScrollToTop";
import { ToastContainer } from "react-toastify";

const Services = lazy(() => import("./components/services/Services"));
// Define the router
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <ToastContainer /> {/* Toast notifications */}
        <ScrollToTop /> {/* Scroll to top on route change */}
        <Outlet /> {/* Render child routes here */}
        <Footer />
      </>
    ),
    errorElement: <h1>Oops! Something went wrong.</h1>,
    children: [
      { path: "/", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "services", element:<Suspense fallback={<h1>Loading....</h1>}><Services /> </Suspense> },
      { path: "contact", element: <Contact /> },
      { path: "grocery", element: <Grocery /> },
      { path: "cart", element: <Cart /> },

      { path: "restaurant/:restId", element: <RestMenu /> },
    ],
  },
]);

function App() {
  const online = useSelector((state) => state.home.online); // Access online status from Redux

  return (
    <>
      {/* Include CheckOnline component to set up network event listeners */}
      <CheckOnline /> 

      {/* Conditionally render based on online status */}
      {online === "false" ? (
         <div className="flex items-center justify-center min-h-screen bg-gray-800">
         {online === "false" && (
           <h1 className="text-2xl font-semibold text-red-600">
             The network connection has been lost.
           </h1>
         )}
       </div>
      ) : (
        <RouterProvider router={router} />
      )}
    </>
  );
}

export default App;
