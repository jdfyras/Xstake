import React from 'react';
import Layout from '../components/Layout';
import StepsDiagram from '../components/StepsDiagram';
import HeroSection from '../components/Hero';
import InteractiveSteps from '../components/InteractiveSteps';
import ToggleSwitch from '../components/ToggleSwitch';
import CardComponent from '../components/CardComponent';
import FixedImage from '../components/FixedImage';
import myImage from '../assets/images/s3-alpha-sig.png';
import myImage2 from '../assets/images/eclipse.png';
import HowItWorks from '../components/HowItWorks';
import { Box, Button, Typography, Avatar, CardContent } from '@mui/material';
import AbsoluteShapes from '../components/bg/AbsoluteShapes';
import Ellipse from '../components/bg/Ellipse';
import BlurLayer1 from '../components/bg/BlurLayer1';
import BlurLayer2 from '../components/bg/BlurLayer2';
import StyledRectangle from '../components/bg/StyledRectangle';
import Rectangle11 from '../components/bg/Rectangle11';
import TorusKnot from '../components/bg/TorusKnot';
import Torus from '../components/bg/Torus';

const LandingPage = () => {
  return (
    <Layout>
      <TorusKnot />

      <BlurLayer1 />
      <Ellipse />
      {/* <FixedImage
        Image={myImage2}
        // top={'20%'}
        // left={'80%'}
        // transform={'rotate(0.1turn)'}
        width={'100%'}
        zIndex={-1}
      /> */}
      {/* <FixedImage
        Image={myImage}
        top={'40%'}
        left={'80%'}
        transform={'rotate(0.1turn)'}
        width={'15%'}
        zIndex={1}
      /> */}
      {/* <StepsDiagram /> */}

      {/* <ToggleSwitch /> */}
      {/* <InteractiveSteps /> */}
      <HeroSection />
      <BlurLayer2 />
      <StyledRectangle />
      <Rectangle11 />
      <CardComponent />
      <Torus />
      {/* <AbsoluteShapes /> */}
      <HowItWorks />
    </Layout>
  );
};

export default LandingPage;
