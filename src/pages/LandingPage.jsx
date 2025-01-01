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
import WhyChooseUs from '../components/WhyChooseUs/index.jsx';
import { Box, Button, Typography, Avatar, CardContent } from '@mui/material';
import AbsoluteShapes from '../components/bg/AbsoluteShapes';
import Ellipse from '../components/bg/Ellipse';
import BlurLayer1 from '../components/bg/BlurLayer1';
import BlurLayer2 from '../components/bg/BlurLayer2';
import StyledRectangle from '../components/bg/StyledRectangle';
import Rectangle11 from '../components/bg/Rectangle11';
import TorusKnot from '../components/bg/TorusKnot';
import Torus from '../components/bg/Torus';
import StakingComponent from '../components/StakingYield/index.jsx';
import ProtocolCard from '../components/IntegratedWithDefi/ProtocolCard.jsx';
import IntegratedWithDefi from '../components/IntegratedWithDefi/index.jsx';
import BitcoinHero from '../components/DeFiYieldSection/SectionContainer.jsx';
import CtaHero from '../components/DeFiYieldSection/CtaHero.jsx';
import Group34Component from '../components/bg/Group34Component.jsx';
import TorusKnotBlack from '../components/bg/TorusKnotBlack.jsx';
import GradientBox from '../components/bg/GradientBox.jsx';
import Pill from '../components/bg/Pill.jsx';
import Vector from '../components/bg/Vector.jsx';
import Vector1 from '../components/bg/Vector1.jsx';
import Icosahedron from '../components/bg/Icosahedron.jsx';

const LandingPage = () => {
  return (
    <Layout>
      <TorusKnot />
      <BlurLayer1 />
      <Ellipse />
      <HeroSection />
      <BlurLayer2 />
      <StyledRectangle />
      <Rectangle11 />
      <CardComponent />
      <Torus />
      {/* <AbsoluteShapes /> */}
      {/* <ProtocolCard /> */}

      <HowItWorks />

      <WhyChooseUs />
      <GradientBox />
      <TorusKnotBlack />
      {/* <BitcoinHero /> */}

      <Pill />
      <StakingComponent />
      <Vector />
      <IntegratedWithDefi />
      <Vector1 />
      <CtaHero />
      <Icosahedron />
      {/* <Group34Component /> */}
    </Layout>
  );
};

export default LandingPage;
