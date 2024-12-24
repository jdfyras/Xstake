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

const LandingPage = () => {
  return (
    <Layout>
      <FixedImage
        Image={myImage2}
        // top={'20%'}
        // left={'80%'}
        // transform={'rotate(0.1turn)'}
        width={'100%'}
        zIndex={-1}
      />
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
      <CardComponent />
      {/* <HowItWorks /> */}
    </Layout>
  );
};

export default LandingPage;
