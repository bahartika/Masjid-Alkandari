import { useState } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Beranda", link: "#Beranda" },
    { name: "Blog", link: "#Blog" },
    { name: "Kegiatan", link: "#Kegiatan" },
    { name: "Tentang", link: "#Tentang" },
    { name: "Kontak", link: "#Kontak" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="container mx-auto flex justify-between items-center p-4 xl:px-10 xl:py-2 xl:mt-8 bg-primaryColor xl:rounded-full relative">
      <div className="text-white text-xl">
        <img src={logo} alt="logo Masjid Al-Kandari" />
      </div>
      <div className="lg:hidden" onClick={toggleMenu}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-white">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </div>
      <ul className={`lg:flex space-x-6 ${isOpen ? "block" : "hidden"} absolute lg:relative bg-gray-800 lg:bg-transparent p-4 lg:p-0 top-16 right-4 rounded-lg lg:top-0 lg:right-0`}>
        {menuItems.map((item, index) => (
          <li key={index}>
            <a href={item.link} className="text-white hover:text-gray-400">
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
