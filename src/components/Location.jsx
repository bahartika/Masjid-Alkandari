import React from "react";
import Map from "../assets/map.png";

const Location = () => {
  return (
    <section className="xl:container xl:mx-auto flex justify-center items-center text-center py-24">
      <div>
        <h6 className="text-primaryColor font-bold text-lg">LOKASI</h6>
        <h1 className="text-5xl font-extrabold mx-auto">Lokasi Masjid Mudah Diakses</h1>
        <div className="group mt-10 overflow-hidden rounded-xl shadow-xl hover:shadow-2xl duration-200 px-4 xl:px-0">
          <img src={Map} alt="lokasi masjid pada peta" className=" group-hover:scale-110 duration-200" />
        </div>
      </div>
    </section>
  );
};

export default Location;
