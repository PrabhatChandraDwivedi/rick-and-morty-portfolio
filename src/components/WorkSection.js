import React from 'react';
import './WorkSection.css';
import { UIWorkShowCase } from './UIWorkShowCase';
import { BackendShowCase } from './BackendShowCase';

const WorkSection = () => (
    <section className="work-section bg-black">
        <h2>My Work</h2>
        <p className='mb-2'>Check out some of my UI work below:</p>
        <UIWorkShowCase/>
        <div className='mt-36 flex  flex-col lg:flex-row justify-between h-full'>
        <BackendShowCase header={"Sonar Coverage"} body={"Worked on project to generate coverage of each line of commits made in given period of time using sonar cloud for 150+ repos"}/>
         <BackendShowCase header={"Job & Queue Mapping"} body={"Worked on project to create a mapping for the scheduled jobs and the beans it will trigger, also mapped the beans with message queues they are attached to"}/>
         <BackendShowCase header={"UI Static Mapping"} body={"Developed logic to create static mapping for UI repos using Abstract Syntax Tree and create a master mapping using static mapping"}/>
         <BackendShowCase header={"Backend Servers"} body={"Created two SB servers, applied spring security, oauth2.0, handled api level role based authorization. Created 2 python servers using flask, nltk for chatbot"}/>
        </div>
    </section>
);

export default WorkSection;
