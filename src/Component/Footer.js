import React from 'react';
import logo from '../../Assets/Logo.png';

const Footer = () => (
  <footer style={{ padding: '56px 0 135px 0', background: '#F2F2F2' }}>
    <div className="container"></div>
    <div className="row around-md">
      <div className="col-md-2">
        <img src={logo} />
      </div>
      <div className="col-md-5">
        <div className="row">
          <div className="col-md-6">
            <p>Lien vers franceTV</p>
            <p>Aide et contact</p>
            <p>Gestion des cookies</p>
          </div>
          <div className="col-md-6">
            <p>CGU - CGV</p>
            <p>Mentions légales</p>
            <p>Politique de confidentialité</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
