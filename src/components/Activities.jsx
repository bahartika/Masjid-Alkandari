import React from "react";
import CardActivity from "./CardActivity";
import Foto1 from "../assets/foto1.png";
import Foto2 from "../assets/foto2.png";
import Foto3 from "../assets/foto3.png";

const Activities = () => {
  const activityItems = [
    {
      title: "Kajian Fiqih, Kajian Ibadah 4 Madzhab dan Belajar Ngaji",
      text: "Di setiap harinya, masjid akan melaksanakan banyak kegiatan keislaman, terbuka untuk masyarakat sekitar dan untuk umum",
      image: Foto1,
    },
    {
      title: "Sembako Gratis dan Santunan Terhadap Dhuafa",
      text: "Tersedia paket sembako gratis dan juga rutin melaksanakan kegiatan santunan terhadap dhuafa",
      image: Foto2,
    },
    {
      title: "Pendidikan dan Pelatihan Kewirausahaan",
      text: "Masjid rutin membina jama'ah di segala usia agar memiliki keterampilan dan minat belajar yang tinggi demi masa depan yang cerah",
      image: Foto3,
    },
  ];

  return (
    <section className="container mx-auto flex justify-center items-center text-center py-16 bg-primaryColor rounded-xl">
      <div>
        <h6 className="text-white font-bold text-lg">KEGIATAN</h6>
        <h1 className=" text-white text-5xl font-extrabold mx-auto text-center xl:w-3/5">Berbagai Kegiatan Menarik yang Tersedia di Masjid</h1>
        <div className="flex flex-col justify-center items-center xl:flex-row gap-6 mt-10">
          {activityItems.map((activity, index) => (
            <CardActivity key={index} title={activity.title} text={activity.text} image={activity.image} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;
