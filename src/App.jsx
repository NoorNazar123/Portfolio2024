import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <div>
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
