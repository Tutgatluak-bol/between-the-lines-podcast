
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageTransition from "../components/PageTransition";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />

      <PageTransition>
        <Outlet />
      </PageTransition>

      <Footer />
    </div>
  );
}
