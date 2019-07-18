import React from 'react';

import logo from '../../Assets/Logo.png';

const Header = () => (
  <header className="header">
    <div className="container">
      <div className="row middle-md between-md">
        <div className="col-md-3">
          <img src={logo} />
        </div>
        <div className="col-md-4 header-flex">
          <p>Accueil</p>
          <p>Documentation</p>
          <p>Légal</p>
          <p className="header-newsletter-button">Télécharger l’app</p>
        </div>
      </div>
    </div>
  </header>
)

export default Header;
