import React from 'react';
import styled from 'styled-components';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import { easeCubicInOut } from 'd3-ease';
import Lanterne from '../components/images/Lanterne.js'

const SectionWipes2Styled = styled.div`
  overflow: hidden;
  #pinContainer {
    height: 100vh;
    width: 100vw;
    overflow: hidden;
  }
  #pinContainer .panel {
    height: 100vh;
    width: 100vw;
    position: absolute;
    text-align: center;
  }
  #pinContainer .panel.demipanel {
    height: 100vh;
    width: 50vw;
    position: absolute;
    text-align: center;
  }
  #pinContainer .panel.demipanel.left {
    left: 0
  }
  #pinContainer .panel.demipanel.right {
    right: 0
  }
  .panel span {
    position: relative;
    display: block;
    top: 50%;
    font-size: 80px;
  }
  
  .panel.blue {
    background-color: #3883d8;
  }
  
  .panel.turqoise {
    background-color: #38ced7;
  }
  
  .panel.green {
    background-color: #22d659;
  }
  
  .panel.bordeaux {
    background-color: #953543;
  }
  .panel.aliceblue {
    background-color: aliceblue;
  }
`;

const SectionWipes2 = () => (
  <SectionWipes2Styled>
    <Controller>
      <Scene
        triggerHook="0"
        duration="100%"
        pin
      >
        <Timeline
          wrapper={<div id="pinContainer" />}
        >
          <section className="panel blue"><Lanterne /></section>
          <Tween
            staggerTo={0.1}
            duration={1}
            ease="Back.easeInOut"
            from={{ x: '-100%' }}
            to={{ x: '0%' }}
          >
            <section className="panel turqoise"><span>Panel turquoise</span></section>
          </Tween>
         
          <Tween
            duration={2}
            stagger={0.5}
            ease="Back.easeInOut"
            from={{ x: '-100%' }}
            to={{ x: '0%' }}
          >
            <section className="panel demipanel left green"><span>Panel test</span></section>

          </Tween>
          <Tween
            duration={2}
            stagger={0.5}
            ease="Back.easeInOut"
            from={{ x: '100%' }}
            to={{ x: '0%' }}
          >
            <section className="panel demipanel right blue"><span>Panel test 2</span></section>

          </Tween>
        </Timeline>
      </Scene>
    </Controller>
  </SectionWipes2Styled>
);

export default SectionWipes2;