import React from "react";
import Navbar from "./Navbar";
import Button from "./Button";
import Phone from "../assets/phone.png";

const Header = () => {
  return (
    <header className="relative h-screen overflow-hidden text-white bg-hero bg-cover bg-center">
      <div className="absolute inset-0 bg-primaryColor opacity-85">
        <Navbar />
        <div className="xl:h-5/6 flex items-center justify-center">
          <div className="text-center w-1/2 gap-4 flex flex-col">
            <h1 className="font-extrabold text-2xl xl:text-4xl">Temukan Kedamaian Melalui dekat dengan Tuhan</h1>
            <h3>Masjid bukan hanya sebagai tempat ibadah yang nyaman, tapi juga jadi tempat berbagai kegiatan, memupuk persaudaraan hingga membangkitkan perekonomian, atau tempat apapun yang berkaitan dengan keumatan</h3>
            <div className="flex justify-center align-center border-2 gap-2 flex-col xl:flex-row">
              <Button onClick={() => alert("Primary Button Clicked!")}>Baca Selengkapnya</Button>
              <Button variant="secondary" className="ml-4">
                <img src={Phone} alt="" className="" />
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
