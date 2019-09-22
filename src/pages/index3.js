import React, {Component} from "react"
import ReactDOM from 'react-dom';
import ReactFullpage from '@fullpage/react-fullpage';
import { Tween, Timeline } from 'react-gsap';
import Lanterne from '../components/images/Lanterne.js'


const Fullpage = () => (
  <ReactFullpage
/*
            <p>Section 1 (welcome to fullpage.js)</p>
            <button onClick={() => fullpageApi.moveSectionDown()}>
              Click me to move down
            </button>
*/

    //fullpage options
    licenseKey = {'6AA6C984-A7A24515-ABE38707-85B93007'}
    scrollingSpeed = {500} /* Options here */

    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section">
            <Lanterne />
          </div>
          <div className="section">
            <section className="panel half-width left">
               lorem ipsum gauche 
            </section>
            <section className="panel half-width right">
               lorem ipsum droite
            </section>
          </div>
          <div className="section">
            <section className="panel half-width left">
               lorem ipsum gauche 
            </section>
            <section className="panel half-width right">
               lorem ipsum droite
            </section>

            <section className="panel half-width left">
               test
            </section>
            <section className="panel half-width right">
               test
            </section>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default Fullpage;