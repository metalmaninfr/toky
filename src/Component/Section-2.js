import React, { Component } from 'react';

import first from '../../Assets/Franceinfo.svg.png';
import seconde from '../../Assets/pexels-photo-1430118.jpeg';
import third from '../../Assets/pexels-photo-1162964.jpeg';

class Section_2 extends Component {
  state = {
    first: true,
    seconde: false,
    third: false,
  }

  handleActive = (active) => {
    const { first, seconde, third } = this.state
    if (first || seconde || third) {
      this.setState({ first: false, seconde: false, third: false });
    }
    this.setState({ [active]: true });
  }

  render() {
    return (
      <section className="container section_2">
        <div className="row between-md middle-md">
          <div className="col-md-6">
            <div className="image-container">
              {this.state.first && (<img height="auto" width="100%" src={first} />)}
              {this.state.seconde && (<img height="100%" width="100%" src={seconde} />)}
              {this.state.third && (<img height="100%" width="100%" src={third} />)}
            </div>
          </div>
          <div className="col-md-5">
          <h2><span className="red">Toky</span> c’est </h2>
          <ul style={{ listStyle: 'none' }}>
            <li className={`section-2-links ${this.state.first ? 'section-2-links-active' : ''}`} onClick={(active) => this.handleActive('first')}>De l’information en temps réel</li>
            {this.state.first && (<li>Toutes les infos livrées minute par minute par la rédaction de Franceinfo.</li>)}
            <li className={`section-2-links ${this.state.seconde ? 'section-2-links-active' : ''}`} onClick={(active) => this.handleActive('seconde')}>Un échange intuitif et interactif</li>
            {this.state.seconde && (<li>Parlez naturellement avec Toky</li>)}
            <li className={`section-2-links ${this.state.third ? 'section-2-links-active' : ''}`} onClick={(active) => this.handleActive('third')}>Nouvelle façon de communiquer</li>
            {this.state.third && (<li>Ne cherchez pas à apprendre les commandes, c'est Toki qui viens à vous</li>)}
          </ul>
          </div>
        </div>
      </section>
    )
  }
}

export default Section_2;
