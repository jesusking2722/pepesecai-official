import React, { ReactNode } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className="flex flex-col min-h-screen overflow-hidden"
      style={{
        background: "url('./assets/background.gif')",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Navbar />
      <div className="flex-grow w-full mx-auto ">{children}</div>
      <Footer />
    </div>
  );
};

export default Container;
