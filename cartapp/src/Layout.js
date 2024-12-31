import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
export default Layout;
