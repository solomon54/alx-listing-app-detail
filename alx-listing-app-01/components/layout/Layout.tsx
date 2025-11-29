import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import PropertyListings from "./PropertyListings";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">{children}</main>
     
      <Footer />
    </>
  );
};

export default Layout;
