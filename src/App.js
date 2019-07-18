import React, { Component, Fragment } from 'react';
import Header from './Component/Header';
import Section_1 from './Component/Section-1';
import Section_2 from './Component/Section-2';
import Newsletter from './Component/Newsletter';
import Partners from './Component/Partners';
import Footer from './Component/Footer';
import Testimonials from './Component/Testimonials';
import './App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <main className="main">
          <Section_1 />
          <Section_2 />
          {/* <section className="product-functions-section">
            <div className="container">
              <h2>.Fontionnalités du produits</h2>
              <div className="row between-md">
                <div className="col-md-5">
                </div>
                <div className="col-md-6">
                  <div className="image-container">IMG de la tablette</div>
                </div>
              </div>
            </div>
          </section>
          <Partners /> */}
          <Testimonials />
          <Newsletter />
          <Footer />
        </main>
      </Fragment>
    );
  }
}

export default App;
