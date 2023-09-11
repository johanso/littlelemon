import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import Booking from "./components/Pages/Booking";

import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Header />
      <main className="relative">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
