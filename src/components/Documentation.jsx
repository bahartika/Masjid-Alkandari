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
        <div className="grid grid-cols-5 border-2 w-2/3 mx-auto p-4">
          <div className="">
            <img src={Dokum1} alt="Image 1" className="object-cover w-full h-full rounded-lg shadow-lg" />
          </div>
          <div className="">
            <img src={Dokum2} alt="Image 1" className="object-cover w-full h-full rounded-lg shadow-lg" />
          </div>
          <div className="">
            <img src={Dokum3} alt="Image 1" className="object-cover w-full h-full rounded-lg shadow-lg" />
          </div>
          <div className="">
            <img src={Dokum4} alt="Image 1" className="object-cover w-full h-full rounded-lg shadow-lg" />
          </div>
          <div className="">
            <img src={Dokum5} alt="Image 1" className="object-cover w-full h-full rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </section>
    // <div className="grid grid-cols-2 gap-2 p-2 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6">
    //   <div className="col-span-2 row-span-2 sm:col-span-2 sm:row-span-2 lg:col-span-4">
    //     <img src="https://picsum.photos/600/400" alt="Image 1" className="w-full h-full object-cover rounded-lg shadow-lg" />
    //   </div>

    //   <div>
    //     <img src="https://picsum.photos/200/300" alt="Image 2" className="w-full h-full object-cover rounded-lg shadow-lg" />
    //   </div>
    //   <div>
    //     <img src="https://picsum.photos/200/300" alt="Image 3" className="w-full h-full object-cover rounded-lg shadow-lg" />
    //   </div>
    //   <div>
    //     <img src="https://picsum.photos/200/300" alt="Image 4" className="w-full h-full object-cover rounded-lg shadow-lg" />
    //   </div>
    //   <div>
    //     <img src="https://picsum.photos/200/300" alt="Image 5" className="w-full h-full object-cover rounded-lg shadow-lg" />
    //   </div>
    //   <div className="col-span-2 sm:col-span-2 lg:col-span-3">
    //     <img src="https://picsum.photos/600/300" alt="Image 6" className="w-full h-full object-cover rounded-lg shadow-lg" />
    //   </div>
    //   <div>
    //     <img src="https://picsum.photos/200/300" alt="Image 7" className="w-full h-full object-cover rounded-lg shadow-lg" />
    //   </div>
    // </div>
  );
};

export default Documentation;
