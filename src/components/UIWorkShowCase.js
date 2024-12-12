"use client";
import React from "react";
import { WobbleCard } from "./aceLib/WobbleCard";
import rps from "../assets/rps.png";
import mainPortfolio from "../assets/main-portfolio.png";
import catchit from "../assets/catchit.png";
import mainPortfolioForSmallScreen from "../assets/main-portfolio-small-screen.png";

export function UIWorkShowCase() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 max-w-7xl mx-auto w-full">
      
      <WobbleCard containerClassName="col-span-1 lg:col-span-2 h-full min-h-[500px] lg:min-h-[300px] group relative hover:shadow-lg hover:shadow-white">
        <img
          src={rps}
          alt="rps"
          className="object-cover rounded-2xl h-full"
        />
        <a
          href="https://battle-of-tatva.netlify.app/"
          target="_blank"
          className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl text-white font-bold text-lg"
        >
          Visit
        </a>
      </WobbleCard>

      
      <WobbleCard containerClassName="col-span-1 min-h-[300px] group relative hover:shadow-lg hover:shadow-white">
        <img
          src={catchit}
          alt="catchit"
          className="object-cover rounded-2xl h-full"
        />
        <a
          href="https://playcatchit.netlify.app/"
          target="_blank"
          className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl text-white font-bold text-lg"
        >
          Visit
        </a>
      </WobbleCard>

      
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px] group relative hover:shadow-lg hover:shadow-white">
        <picture>
          <source
            srcSet={mainPortfolioForSmallScreen}
            media="(max-width: 1024px)"
          />
          <source
            srcSet={mainPortfolio}
            media="(min-width: 1025px)"
          />
          <img
            src={mainPortfolio}
            alt="portfolio"
            className="object-cover rounded-2xl h-full w-full"
          />
        </picture>
        <a
          href="https://heyprabhat.netlify.app/"
          target="_blank"
          className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl text-white font-bold text-lg"
        >
          Visit
        </a>
      </WobbleCard>
    </div>
  );
}
