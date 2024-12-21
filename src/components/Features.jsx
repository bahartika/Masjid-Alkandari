import React from "react";
import Fitur1 from "../assets/fitur1.png";
import Fitur2 from "../assets/fitur2.png";
import Fitur3 from "../assets/fitur3.png";
import Fitur4 from "../assets/fitur4.png";
import Card from "./Card";

const Features = () => {
  const featureItems = [
    {
      image: Fitur1,
      text: "Imam Hafidz Qur'an dan Menguasai Berbagai Nagham",
    },
    {
      image: Fitur2,
      text: "Masjid Dilengkapi AC, Memastikan Ruangan Sejuk",
    },
    {
      image: Fitur3,
      text: "Masjid Terbuka 24 Jam dengan Jaminan Keamanan",
    },
    {
      image: Fitur4,
      text: "Menggunakan Karpet Terbaik yang Lembut Dipakai Sujud",
    },
  ];

  return (
    <section className="container mx-auto flex justify-center items-center text-center py-24">
      <div>
        <h6 className="text-primaryColor font-bold text-lg">FITUR</h6>
        <h1 className="text-5xl font-extrabold">Semua Kenyamanan dalam Satu Masjid</h1>
        <div className="flex flex-col items-center xl:flex-row gap-6 mt-10">
          {featureItems.map((feature, index) => (
            <Card key={index} image={feature.image} text={feature.text} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
