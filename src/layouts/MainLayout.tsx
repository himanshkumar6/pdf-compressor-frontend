import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";

const MainLayout: React.FC = () => {
  return (
    <>
      <Navbar />
      <main className="grow">
        <Outlet />
      </main>
      <Suspense fallback={<div className="h-20" />}>
        <Footer />
      </Suspense>
    </>
  );
};

export default MainLayout;
