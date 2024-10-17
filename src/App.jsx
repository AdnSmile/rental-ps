import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Toaster } from "sonner";

import Rental from "./page/customer/Rental";
import Login from "./page/Login";
import Register from "./page/Register";
import Sidebar from "./component/layout_admin/Sidebar";
import Dashboard from "./page/admin/Dashboard";
import KelolaDataPS from "./page/admin/kelola-ps/KelolaDataPS";
import KelolaMenu from "./page/admin/kelola-makanan/KelolaMenu";

export default function App() {
  const helmetContext = {};
  return (
    useEffect(() => {
      AOS.init({ once: true });
    }, []),
    (
      <>
        <Router>
          <HelmetProvider context={helmetContext}>
            <Routes>
              <Route path="/*" element={<Login />} />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="rental" element={<Rental />} />
              <Route element={<Sidebar />}>
                <Route path="dashboard" element={<Dashboard />} />
                {/* Admin */}
                <Route path="kelola-ps" element={<KelolaDataPS />} />
                <Route path="kelola-menu" element={<KelolaMenu />} />
              </Route>
            </Routes>
          </HelmetProvider>
        </Router>
        <Toaster position="top-right" richColors />
      </>
    )
  );
}
