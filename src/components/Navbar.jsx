import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaGift, FaChartBar, FaGamepad,FaCog } from "react-icons/fa";

export default function Navbar() {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home", icon: <FaHome /> },
    { path: "/reward", label: "Rewards", icon: <FaGift /> },
    { path: "/games", label: "Games", icon: <FaGamepad /> },
    { path: "/settings", label: "Settings", icon: <FaCog /> },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gradient-to-r from-yellow-500 via-orange-500 to-pink-600 shadow-lg z-50">
      <ul className="flex justify-around items-center py-3 text-white">
        {navItems.map((item) => (
          <li key={item.path}>
            <Link
              to={item.path}
              className={`flex flex-col items-center p-2 rounded-xl shadow-md transition-all duration-200 ${
                location.pathname === item.path
                  ? "bg-yellow-400 text-white scale-105"
                  : "bg-gray-100 text-gray-800 hover:bg-yellow-300"
              }`}
            >
              <div className="text-2xl">{item.icon}</div>
              <span className="text-sm font-bold">{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
