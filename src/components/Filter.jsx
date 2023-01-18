import React, { useState } from "react";
import { TbLocation } from "react-icons/tb";
import { FiSearch } from "react-icons/fi";
import { AiOutlineCalendar, AiOutlineTeam } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

export default function Filter() {
  const [origin, setOrigin] = useState("Lieux");

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log("🚀 ~ file: Filter.jsx:20 ~ onSubmit ~ data", data);
    const query = { ...data, origin };
    /* It's checking if the form is empty. */
    data.arrival === "" && data.depart === "" && data.location === "" && data.travelers === "" ? router.push({ pathname: "/" }) : router.push({ pathname: "/", query });

    
  };

  return (
    <div className="rounded-xl filter border-[2px] border-white p-8 container mx-auto">
      <ul className="flex items-center font-bold pb-6 border-b-[2px] border-[#fffcf47b] gap-10 text-sm md:gap-24">
        <li
          className={`cursor-pointer ${origin === "Lieux" && "item"}`}
          onClick={() => setOrigin("Lieux")}
        >
          Lieux
        </li>
        <li
          className={`cursor-pointer ${origin === "Activités" && "item"}`}
          onClick={() => setOrigin("Activités")}
        >
          Activités
        </li>
        <li
          className={`cursor-pointer ${origin === "Région" && "item"}`}
          onClick={() => setOrigin("Région")}
        >
          Région
        </li>
      </ul>
      <form>
        <div className="flex flex-col md:flex-row justify-between md:px-10 pt-10 mb-5 gap-y-5 md:items-center">
          <div className="flex">
            <div className="transform text-[#C3C3C3] text-lg pt-2 -scale-x-100">
              <TbLocation />
            </div>
            <div className="pl-2">
              <h6 className="text-base md:text-[22px] font-bold">Location</h6>
              <input
                type="text"
                name={`location`}
                {...register("location")}
                placeholder="Quel bien vous irait ?"
                className="w-full bg-transparent placeholder:text-[#C3C3C3] py-2 text-[#C3C3C3] outline-none placeholder:text-sm placeholder:font-medium"
              />
            </div>
          </div>

          <div className="flex">
            <div className="transform text-[#C3C3C3] text-lg pt-2 -scale-x-100">
              <AiOutlineCalendar />
            </div>
            <div className="pl-2">
              <h6 className="text-base md:text-[22px] font-bold">Arrivée</h6>
              <input
                type="text"
                name={`arrival`}
                {...register("arrival")}
                placeholder="Quand voudriez vous partir ?"
                className="w-full bg-transparent placeholder:text-[#C3C3C3] py-2 text-[#C3C3C3] outline-none placeholder:text-sm placeholder:font-medium"
              />
            </div>
          </div>

          <div className="flex">
            <div className="transform text-[#C3C3C3] text-lg pt-2 -scale-x-100">
              <AiOutlineCalendar />
            </div>
            <div className="pl-2">
              <h6 className="text-base md:text-[22px] font-bold">Départ</h6>
              <input
                type="text"
                name={`depart`}
                {...register("depart")}
                placeholder="Quand voudriez vous partir ?"
                className="w-full bg-transparent placeholder:text-[#C3C3C3] py-2 text-[#C3C3C3] outline-none placeholder:text-sm placeholder:font-medium"
              />
            </div>
          </div>

          <div className="flex">
            <div className="transform text-[#C3C3C3] text-lg pt-2 -scale-x-100">
              <AiOutlineTeam />
            </div>
            <div className="pl-2">
              <h6 className="text-base md:text-[22px] font-bold">Voyageurs</h6>
              <input
                type="text"
                name={`travelers`}
                {...register("travelers")}
                placeholder="Ajoutez un voyageur ?"
                className="w-full bg-transparent placeholder:text-[#C3C3C3] py-2 text-[#C3C3C3] outline-none placeholder:text-sm placeholder:font-medium"
              />
            </div>
          </div>

          {/* search */}
          <div>
            <div
              className="cursor-pointer inline-block border border-black p-2 rounded-full"
              onClick={handleSubmit(onSubmit)}
            >
              <FiSearch />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
