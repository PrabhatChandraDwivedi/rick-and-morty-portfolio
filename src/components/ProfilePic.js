import React from "react";
import { CardBody, CardContainer, CardItem } from "./aceLib/CardEffect";
import RickImage from '../assets/morty.png';

export function ProfilePic() {
  return (
    <CardContainer className="inter-var">
      <CardBody
        className="bg-black relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-white dark:border-black/[0.2] border-white/[0.3] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-white dark:text-neutral-600">
          Hi! There
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-300 text-sm max-w-sm mt-2 dark:text-neutral-500">
          Let's have a coffee
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src={RickImage}
            height="1000"
            width="1000"
            className="h-96 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="profilepic"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-8">
          {/* External link for "Let's Connect" */}
          <a
            href="https://in.linkedin.com/in/prabhat-chandra-dwivedi"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl text-xs font-normal text-white">
            Let's Connect →
          </a>
          <a
            href="mailto:mr.prabhatdwivedi@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl text-xs font-bold text-black dark:text-white bg-white dark:bg-black border border-black dark:border-white">
            Drop me a mail
          </a>
        </div>
      </CardBody>
    </CardContainer>
  );
}
