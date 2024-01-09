import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav.jsx";
import Landing from "./pages/Landing.jsx";
import SearchPage from "./pages/SearchPage.jsx";
import VendorDetails from "./pages/VendorDetail.jsx";
import Footer from "./components/Footer.jsx";
import GetListedForm from "./components/GetListedForm.jsx";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/vendors" element={<SearchPage />} />
          <Route path="/vendors/:id" element={<VendorDetails />} />
          <Route path="/get-listed" element={<GetListedForm />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
