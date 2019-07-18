import React from 'react';

import googleHome from '../../Assets/Google-Home.png';
import googleNest from '../../Assets/Nest-hub.png';
const Section_1 = () => (
  <section className="section-discover-container">
    <div className="background-circle">
      <div className="circle circle-red"></div>
      <div className="circle circle-blue"></div>
      <div className="circle circle-green"></div>
      <div className="circle circle-black"></div>
      <div className="circle circle-yellow"></div>
    </div>
    <div className="container">
      <div className="row middle-md around-md">
        <div className="col-md-5">
          <h2 className="section-discover-title">Adoptez <span className="red">Toky</span>,</h2>
          <h2 className="section-discover-title">L’information à portée de voix</h2>
          <p>Vivez une nouvelle expérience pour les Jeux Olympiques 2020 via l’assistant vocal Toky</p>
          <div className="col-md-12 flex">
            <p className="section-discover-button">Télécharger l’app</p>
            <p className="section-discover-button">Contactez-nous</p>
          </div>
        </div>
        <div className="col-md-5 section-discover-relative">
          <div className="image-container">
            <img height="100%" width="100%" src={googleNest} />
          </div>
          <img className="section-discover-img" src={googleHome} />
        </div>
      </div>
    </div>
  </section>
)

export default Section_1;
