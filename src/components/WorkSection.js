import React from 'react';
import './WorkSection.css';
import { UIWorkShowCase } from './UIWorkShowCase';
import { BackendShowCase } from './BackendShowCase';

const WorkSection = () => (
    <section className="work-section bg-black">
        <h2>My Work</h2>
        <p className='mb-2'>Check out some of my UI work below:</p>
        <UIWorkShowCase/>
        <div className='mt-36 flex justify-evenly'>
        <BackendShowCase header={"Sonar Mapping"} body={"I worked on to create sonar Mapping for 200+ backend repos"}/>
         <BackendShowCase header={"Job Queue Mapping"} body={"Created Jobs and Queue Mapping for backend APIs"}/>
         <BackendShowCase header={"UI Static Mapping"} body={"Developed logic to create static mapping for UI repos using Abstract Syntax Tree and create a master mapping using static mapping"}/>
         <BackendShowCase header={"Backend Servers"} body={"Developed a springboot server for the react frontend. Applied SSO, jwt login as well."}/>
        </div>
    </section>
);

export default WorkSection;
