import React from 'react';

import Layout from '../components/Layout';
import Scroll from '../components/Scroll';

import config from '../../config';
import Footer from '../components/Footer';
import SocialLinks from '../components/SocialLinks';
import Subscribe from '../components/Subscribe';
import Header from '../components/Header';

/* import ipad from '../assets/images/ipad.png'; */
import demoImage1 from '../assets/images/demo-image-01.png';
import demoImage2 from '../assets/images/demo-image-02.png';


const IndexPage = () => (
  <Layout>
    <Header />
    <header className="masthead">
      <div className="container d-flex h-100 align-items-center">
        <div className="mx-auto text-center">
          <h1 className="mx-auto my-0 text-uppercase">{config.heading}</h1>
          <h2 className="text-white-50 mx-auto mt-2 mb-5">
            {config.subHeading}
          </h2>
          <Scroll type="id" element="about">
            <a href="#about" className="btn btn-primary">
              About
            </a>
          </Scroll>
        </div>
      </div>
    </header>

    <section id="about" className="about-section text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h2 className="text-white mb-4">HI</h2>
            <p className="text-white-50">
              I am a Full-Stack JavaScript Developer who loves to code and create cool projects. I am specialized in building full stack applications that use React in frontend and Node.js in the backend.
              <a href="https://github.com/Bharath-M1">
                &nbsp;This is my github repo
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>

    <section id="projects" className="projects-section bg-light">
      <div className="container">
        <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
          <div className="col-lg-6">
            <img className="img-fluid" src={demoImage1} alt="" />
          </div>
          <div className="col-lg-6">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-left">
                  <h4 className="text-white">Myntra Clone</h4>
                  <p className="mb-0 text-white-50">
                    Clone of Myntra E-commerce site. Tech stack - React is used for frontend Express framework for creating backend apis and MongoDB as database.
                  </p>
                  <br />
                  <a href="https://github.com/Bharath-M1/Myntra-Frontend" className="btn btn-primary">Link</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center no-gutters">
          <div className="col-lg-6">
            <img className="img-fluid" src={demoImage2} alt="" />
          </div>
          <div className="col-lg-6 order-lg-first">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-right">
                  <h4 className="text-white">Stick-Together</h4>
                  <p className="mb-0 text-white-50">
                    StickTogether is a clone of what's app used for communication which has developed in Java.
                  </p>
                  <br />
                  <a href="https://github.com/Bharath-M1/Stick-Together" className="btn btn-primary mb-0">Link</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Subscribe />

    <SocialLinks />
    <Footer />
  </Layout>
);

export default IndexPage;
