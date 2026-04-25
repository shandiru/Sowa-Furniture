import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./page/Home.jsx";
import ServiceDetail from "./page/ServiceDetail.jsx";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen bg-[var(--sowa-ink)] text-[var(--sowa-cream)]">
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service/:slug" element={<ServiceDetail />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
