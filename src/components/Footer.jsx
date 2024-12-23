import React from "react";
import Logo from "../assets/logo.png";
import Instagram from "../assets/instagram.png";
import Facebook from "../assets/facebook.png";
import Tiktok from "../assets/tiktok.png";

const Footer = () => {
  return (
    <footer className="bg-primaryColor flex flex-col items-center text-white pt-20 pb-10">
      <div className="grid xl:grid-cols-4 gap-10 xl:gap-20 place-content-between container w-4/6">
        <div className="w-60">
          <img src={Logo} alt="logo" />
          <p className="my-4 text-sm">Masjid ini memiliki desain arsitektur indah dan fasilitas lengkap. menyediakan lingkungan yang nyaman untuk ibadah dan kegiatan komunitas</p>
          <div className="flex gap-3">
            <a href="#">
              <img src={Facebook} alt="Link to Facebook" />
            </a>
            <a href="#">
              <img src={Instagram} alt="Link to Instagram" />
            </a>
            <a href="#">
              <img src={Tiktok} alt="Link to Tiktok" />
            </a>
          </div>
        </div>
        <div className="flex flex-col xl:mx-auto">
          <h3 className="font-extrabold mb-2">Halaman</h3>
          <ul className="text-sm flex flex-col gap-2">
            <li>
              <a href="#" className="hover:border-b-2 duration-200">
                Beranda
              </a>
            </li>
            <li>
              <a href="#" className="hover:border-b-2 duration-200">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:border-b-2 duration-200">
                Kegiatan
              </a>
            </li>
            <li>
              <a href="#" className="hover:border-b-2 duration-200">
                Tentang
              </a>
            </li>
            <li>
              <a href="#" className="hover:border-b-2 duration-200">
                Kontak
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-extrabold mb-2">Kegiatan</h3>
          <ul className="text-sm flex flex-col gap-2">
            <li>Kajian Fiqih</li>
            <li>Kajian Ibadah 4 Madzhab</li>
            <li>Santunan Dhuafa</li>
            <li>Pelatihan Kewirausahaan</li>
            <li>Belajar Ngaji</li>
          </ul>
        </div>
        <div className="">
          <h3 className="font-extrabold mb-2">Kontak</h3>
          <ul className="text-sm flex flex-col gap-2">
            <li>
              081234567890 <b>(WA)</b>
            </li>
            <li>
              987F1D6L <b>(PIN BBM)</b>
            </li>
            <li>
              087634561234 <b>(Telegram)</b>
            </li>
          </ul>
        </div>
      </div>
      <h6 className="mt-10 xl:mt-20 text-sm font-semibold">© 2024 Masjid Al-Kandari All Rights Reserved</h6>
    </footer>
  );
};

export default Footer;
