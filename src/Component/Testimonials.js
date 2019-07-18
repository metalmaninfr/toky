import React from 'react';
import stars from '../../Assets/star.png';
import icon from '../../Assets/icon.png';
import './Testimonials.css';

const Testimonials = () => (
  <section className="container Testimonials-container" >
    <div className="row around-md middle-md Testimonials-subcontainer">
      <div className="col-md-2">
        <p className="red" style={{ fontSize: "24px" }}>Ils en sont satisfaits</p>
        <p style={{ fontSize: "20px" }}>Plus de 40 000 utilisateurs sont ravis d’utiliser notre service</p>
      </div>
      <div className="col-md-2 Testimonials-card">
        <div className="stars">
          <img src={stars} />
        </div>
        <p className="Testimonials-content">Vraiment top pour un usage quotidien. J'ai pu me tenir informer sur les JO... à la voix, ou via l'interface du smart display !</p>
        <div className="Testimonials-name-container">
          <p className="Testimonials-name">Anthony Parker</p>
          <img className="Testimonials-name-img" src={icon} />
        </div>
      </div>

      <div className="col-md-2 Testimonials-card">
        <div className="stars">
          <img src={stars} />
        </div>
        <p className="Testimonials-content">Très utile en tant que "2eme ecran", il complete tres bien ma télé quand je regarde les JO. On peut regarder nos épreuves en direct en le contrôlant avec notre voix.</p>
        <div className="Testimonials-name-container">
          <p className="Testimonials-name">Ron Wilson</p>
          <img className="Testimonials-name-img" src={icon} />
        </div>
      </div>

      <div className="col-md-2 Testimonials-card">
        <div className="stars">
          <img src={stars} />
        </div>
        <p className="Testimonials-content">Je le dis sans aucune hésitation. Toki est parfait ! Simple et performant, il est très éfficace et répond à mes questions sur les Jeux Olympiques très rapidement.</p>
        <div className="Testimonials-name-container">
          <p className="Testimonials-name">Fabien Durant</p>
          <img className="Testimonials-name-img" src={icon} />
        </div>
      </div>

      <div className="col-md-2 Testimonials-card">
        <div className="stars">
          <img src={stars} />
        </div>
        <p className="Testimonials-content">Il entend très bien, fonctionne parfaitement, est super intuitif et ne m'as jamais déçu !</p>
        <div className="Testimonials-name-container">
          <p className="Testimonials-name">Mailys Renaudat</p>
          <img className="Testimonials-name-img" src={icon} />
        </div>
      </div>

    </div>
  </section>
)

export default Testimonials;
