import React from "react";
import Dokum1 from "../assets/dokum1.png";
import Dokum2 from "../assets/dokum2.png";
import Dokum3 from "../assets/dokum3.png";
import Dokum4 from "../assets/dokum4.png";
import Dokum5 from "../assets/dokum5.png";
import Dokum6 from "../assets/dokum6.png";
import Dokum7 from "../assets/dokum7.png";
import Dokum8 from "../assets/dokum8.png";

const Documentation = () => {
  return (
    <section className="xl:container xl:mx-auto flex justify-center items-center text-center py-24">
      <div>
        <h6 className="text-primaryColor font-bold text-lg">FOTO</h6>
        <h1 className=" text-primaryColor text-5xl font-extrabold mx-auto text-center xl:w-3/5">Menjelajahi Keindahan Masjid dari Berbagai Sisi</h1>
        <div className="grid xl:grid-cols-5 border-2 xl:w-2/3 mx-auto p-4 gap-4">
          <img src={Dokum1} alt="Image 1" className="object-cover rounded-lg shadow-lg col-span-2" />
          <img src={Dokum2} alt="Image 2" className="object-cover rounded-lg shadow-lg" />
          <img src={Dokum3} alt="Image 3" className="object-cover rounded-lg shadow-lg" />
          <img src={Dokum4} alt="Image 4" className="object-cover rounded-lg shadow-lg" />
          <img src={Dokum5} alt="Image 5" className="object-cover rounded-lg shadow-lg" />
          <img src={Dokum6} alt="Image 6" className="object-cover rounded-lg shadow-lg" />
          <img src={Dokum7} alt="Image 7" className="object-cover rounded-lg shadow-lg xl:col-span-2" />
          <img src={Dokum8} alt="Image 8" className="object-cover rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
  );
};

export default Documentation;
