import React from 'react';
import './WorkSection.css';
import { UIWorkShowCase } from './UIWorkShowCase';
import { BackendShowCase } from './BackendShowCase';

const WorkSection = () => (
    <section className="work-section bg-black">
       <h1 className="font-serif text-5xl mb-10 relative group text-center py-2 hover:cursor-pointer">
  My Work
  <span className="absolute left-1/2 bottom-0 h-1 w-0 bg-purple-500 transition-all duration-500 transform -translate-x-1/2 group-hover:w-1/2 mt-2"></span>
</h1>
<p className="mb-8 text-center">Check out some of my UI work below:</p>

        <UIWorkShowCase/>
        <p className='mt-20'>Check out some of my Backend work below:</p>
        <div className='mt-36 flex  flex-col lg:flex-row justify-between h-full'>
        <BackendShowCase header={"Sonar Coverage"} body={"Worked on project to generate coverage of each line of commits made in given period of time using sonar cloud for 150+ repos"}/>
         <BackendShowCase header={"Job & Queue Mapping"} body={"Worked on project to create a mapping for the scheduled jobs and the beans it will trigger, also mapped the beans with message queues they are attached to"}/>
         <BackendShowCase header={"UI Static Mapping"} body={"Developed logic to create static mapping for UI repos using Abstract Syntax Tree and create a master mapping using static mapping"}/>
         <BackendShowCase header={"Backend Servers"} body={"Created two SB servers, applied spring security, oauth2.0, handled api level role based authorization. Created 2 python servers using flask, nltk for chatbot"}/>
        </div>
    </section>
);

export default WorkSection;
