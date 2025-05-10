"use client";
import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

type CyberpunkLayoutProps = {
  children: React.ReactNode;
};

const CyberpunkLayout = ({ children }: CyberpunkLayoutProps) => {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-900 text-gray-300 font-mono px-6 pt-16">
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(6, 182, 212, 0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(6, 182, 212, 0.2) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          {children}

          <Footer
            version="v2.4.7"
            system="NetCorp Data Systems"
            product="Secure File Transfer Portal"
          />
        </div>
      </div>
    </>
  );
};

export default CyberpunkLayout;
