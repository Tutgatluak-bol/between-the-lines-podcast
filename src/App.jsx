
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import About from "./pages/About";
import Episodes from "./pages/Episodes";
import Guests from "./pages/Guests";
import Topics from "./pages/Topics";
import BeGuest from "./pages/BeGuest";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

import WorkWithUs from "./pages/WorkWithUs";
import Sponsorship from "./pages/Sponsorship";
import Partnerships from "./pages/Partnerships";
import Advertise from "./pages/Advertise";
import MediaKit from "./pages/MediaKit";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/episodes" element={<Episodes />} />
          <Route path="/guests" element={<Guests />} />
          <Route path="/topics" element={<Topics />} />
          <Route path="/be-a-guest" element={<BeGuest />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />

          {/* Business & Commercial Pages */}
          <Route path="/work-with-us" element={<WorkWithUs />} />
          <Route path="/sponsorship" element={<Sponsorship />} />
          <Route path="/partnerships" element={<Partnerships />} />
          <Route path="/advertise" element={<Advertise />} />
          <Route path="/media-kit" element={<MediaKit />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
