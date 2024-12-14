import React from "react";
import { ProfilePic } from "./ProfilePic";
import rickandmorty from "../assets/rick-and-morty.png";

const HeroSection = () => (
  <section className="flex flex-col md:flex-row items-center justify-between p-6 md:p-16">
    <div className="text-center md:text-left flex-1 space-y-4">
      <h2 className="text-2xl md:text-4xl font-bold text-white">
        Creative Web Developer and UI Designer
      </h2>
      <p className="text-xs md:text-xs text-gray-400">
        Look Morty, this guy is doing web design. He is doing web design Morty, can you believe that?
      </p>
      <img
        src={rickandmorty}
        alt="Rick and Morty"
        className="mx-auto md:mx-0 h-24 opacity-80"
      />
      <button
        className="mt-4 px-6 py-2 text-black rounded-lg shadow-lg hover:bg-green-600"
        style={{ backgroundColor: "#00FF00" }}
      >
        See My Work
      </button>
    </div>

    <div className="mt-8 md:mt-16 md:ml-8 flex-1 flex justify-center">
      <ProfilePic />
    </div>
  </section>
);

export default HeroSection;
