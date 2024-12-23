import React from "react";
import Navbar from "./Navbar";
import Button from "./Button";
import Phone from "../assets/phone.png";

const Header = () => {
  return (
    <header className="relative h-screen overflow-hidden text-white bg-hero bg-cover bg-center">
      <div className="absolute inset-0 bg-primaryColor opacity-85">
        <Navbar />
        <div className="xl:h-5/6 flex items-center justify-center mt-16 xl:mt-0">
          <div className="text-center w-3/4 xl:w-2/3 gap-8 xl:gap-6 xl:px-12 flex flex-col">
            <h1 className="font-extrabold text-3xl xl:text-6xl">Temukan Kedamaian Melalui dekat dengan Tuhan</h1>
            <h3 className="text-lg xl:px-20">
              Masjid bukan hanya sebagai tempat ibadah yang nyaman, tapi juga jadi tempat berbagai kegiatan, memupuk persaudaraan hingga membangkitkan perekonomian, atau tempat apapun yang berkaitan dengan keumatan.
            </h3>
            <div className="flex justify-center align-center gap-2 flex-col xl:flex-row">
              <Button onClick={() => alert("Primary Button Clicked!")} className="hover:-translate-y-1 duration-100">
                Baca Selengkapnya
              </Button>
              <Button variant="secondary" className="hover:-translate-y-1 duration-100">
                <img src={Phone} alt="call" />
                Hubungi Kami
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
