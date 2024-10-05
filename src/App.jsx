import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import About from "./pages/About";

// https://10web-site.ai/133/absolute-monster/
// https://10web-site.ai/190/harmless-ladybird/projects/
const App = () => {
  return (
    <div>
      <Header />
      <Outlet />

      <Footer />
    </div>
  );
};

export default App;
