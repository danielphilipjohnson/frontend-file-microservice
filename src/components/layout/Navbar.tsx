import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

import Link from "next/link";
import { Upload, BarChart2, Menu, X, Shield, Terminal } from "lucide-react";

interface NavLink {
  id: string;
  href: string;
  label: string;
  icon: React.ReactNode;
  description: string;
}

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll events to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Navigation links
  const navLinks: NavLink[] = [
    {
      id: "upload",
      href: "/",
      label: "Upload",
      icon: <Upload className="w-4 h-4 mr-2" />,
      description: "File upload interface",
    },
    {
      id: "dashboard",
      href: "/system",
      label: "Dashboard",
      icon: <BarChart2 className="w-4 h-4 mr-2" />,
      description: "System metrics and health",
    },
  ];

  return (
    <>
      {/* Main navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-gray-900 bg-opacity-90 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div
                className="text-cyan-400 border-2 border-cyan-400 p-2 mr-2 flex-shrink-0"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 100% 70%, 85% 100%, 0 100%)",
                }}
              >
                <Terminal className="w-5 h-5" />
              </div>
              <div>
                <div className="font-mono text-cyan-400 font-bold text-lg">
                  NetCore
                </div>
                <div className="text-gray-500 text-xs -mt-1">v2.4.7</div>
              </div>
            </div>

            {/* Desktop navigation */}
            <div className="hidden md:flex md:items-center">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <Link
                    key={link.id}
                    href={link.href}
                    className={`flex items-center px-4 py-2 mx-2 font-mono text-sm transition-colors relative ${isActive ? "text-cyan-400" : "text-gray-400 hover:text-cyan-400"
                      }`}
                  >
                    {link.icon}
                    {link.label}
                    {isActive && (
                      <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-cyan-400"></div>
                    )}
                  </Link>
                );
              })}

            </div>

            {/* System status indicator */}
            <div className="hidden md:flex items-center">
              <div
                className="flex items-center px-3 py-1 bg-gray-800 border border-green-400"
                style={{
                  clipPath:
                    "polygon(0 0, 100% 0, 100% 100%, 10px 100%, 0 calc(100% - 10px))",
                }}
              >
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse mr-2"></div>
                <span className="text-green-400 font-mono text-xs">
                  SYSTEM ONLINE
                </span>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                title="Open menu"
                className="text-cyan-400 p-2 focus:outline-none"
                onClick={toggleMenu}
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile navigation overlay */}
      <div
        className={`fixed inset-0 z-50 bg-gray-900 bg-opacity-95 backdrop-blur-md transition-all duration-300 md:hidden ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col h-full p-6">
          {/* Close button */}
          <div className="flex justify-end">
            <button
              title="Close menu"
              className="text-cyan-400 p-2 focus:outline-none"
              onClick={toggleMenu}
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile nav links */}
          <div className="flex flex-col space-y-6 mt-10">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.id}
                  href={link.href}
                  onClick={toggleMenu}
                  className={`text-left font-mono text-lg ${isActive ? "text-cyan-400" : "text-gray-400"
                    }`}
                >
                  <div className="flex items-center mb-1">
                    {link.icon}
                    {link.label}
                  </div>
                  <p className="text-xs text-gray-500 ml-6">{link.description}</p>
                </Link>
              );
            })}

          </div>

          {/* System info in mobile menu */}
          <div className="mt-auto mb-10">
            <div className="border border-gray-800 p-4 bg-gray-900 bg-opacity-50">
              <div className="flex items-center mb-2">
                <Shield className="w-4 h-4 text-green-400 mr-2" />
                <span className="text-green-400 font-mono">SYSTEM STATUS</span>
              </div>
              <div className="flex text-xs text-gray-400">
                <div className="w-2 h-2 rounded-full bg-green-400 mt-1 mr-2"></div>
                <div>
                  <p>All systems operational</p>
                  <p className="text-gray-500 mt-1">
                    Last checked: {new Date().toLocaleTimeString()}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
