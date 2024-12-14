import React from "react";
import { Meteors } from "../components/aceLib/MeteorEffect";

export function BackendShowCase({header,body}) {
  return (
    (<div className="mb-10">
      <div className=" w-full relative lg:max-w-xs">
        <div
          className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div
          className="min-h-60 relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col lg:justify-end justify-center items-start">

          <h1 className="font-bold text-xl text-white mb-4 relative z-50">
           {header}
          </h1>

          <p className="font-normal text-base text-slate-300 mb-4 relative z-50">
            {body}
          </p>

          <Meteors number={0} />
        </div>
      </div>
    </div>)
  );
}
