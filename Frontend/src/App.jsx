// import { Routes, Route } from "react-router-dom";

// // pages

// import Home from "./pages/Home";

// function App() {
//   return (
//     <div>
//       {/* <Home /> */}
//       {/* <CursorGlow /> */}
//       <Routes>
//         <Route path="/" element={<Home />} />

//       </Routes>
//     </div>
//   );
// }

// export default App;

// import { Routes, Route } from "react-router-dom";

// // components
// import CursorGlow from "./components/CursorGlow";
// import Navbar from "./components/Navbar";
// // import Footer from "../components/Footer"
// import Footer from "./components/Footer";

// // pages
// import Home from "./pages/Home";
// import AdminLogin from "./admin/AdminLogin";
// import Dashboard from "./admin/Dashboard";

// function App() {
//   return (
//     <div className="bg-black text-white min-h-screen">
//       {/* Cursor Glow Effect */}
//       <CursorGlow />

//       {/* Navbar */}
//       <Navbar />

//       {/* Routes */}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/admin" element={<AdminLogin />} />

//         <Route path="/dashboard" element={<Dashboard />} />
//       </Routes>
//       {/* Footer */}
//       <Footer />
//     </div>
//   );
// }

// export default App;


















import { Routes, Route, useLocation, Navigate } from "react-router-dom";

// components
import CursorGlow from "./components/CursorGlow";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// pages
import Home from "./pages/Home";
import AdminLogin from "./admin/AdminLogin";
import Dashboard from "./admin/Dashboard";

function App() {

  const location = useLocation();

  // Dashboard pages पर Navbar और Footer hide
  const hideLayout =
    location.pathname === "/dashboard" || location.pathname === "/admin";

  // Admin protection
  const isAdmin = localStorage.getItem("admin");

  return (
    <div className="bg-black text-white min-h-screen">

      {/* Cursor Glow */}
      <CursorGlow />

      {/* Navbar */}
      {!hideLayout && <Navbar />}

      <Routes>

        <Route path="/" element={<Home />} />

        {/* Admin login page */}
        <Route path="/admin" element={<AdminLogin />} />

        {/* Protected dashboard */}
        <Route
          path="/dashboard"
          element={isAdmin ? <Dashboard /> : <Navigate to="/admin" />}
        />

      </Routes>

      {/* Footer */}
      {!hideLayout && <Footer />}

    </div>
  );
}

export default App;