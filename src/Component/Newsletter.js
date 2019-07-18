import React from 'react';

const Newsletter = () => (
  <section className="container newsletter-container">
    <div className="row around-md">
      <div className="col-md-10 newletter-box">
        <div className="newsletter-circle newsletter-circle-red"></div>
        <div className="newsletter-circle newsletter-circle-blue"></div>
        <div className="newsletter-circle newsletter-circle-yellow"></div>
        <div className="row around-md top-md">
          <div className="col-md-4">
            <p className="red" style={{ fontSize: '24px', fontWeight: 'bold', margin: 0 }}>Retrouvez tous les matchs des JO quand vous voulez</p>
          </div>
          <div className="col-md-4" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
            <input className="input" type="text" name="newsletter" placeholder="Adresse email" />
            <br />
            <button className="button" type="button" name="button">Valider</button>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Newsletter;
