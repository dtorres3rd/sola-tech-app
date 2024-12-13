import React from 'react';

import iphone from '../../assets/iphone-14-pro.webp';
import mac from '../../assets/mac-system-cut.jfif';
import HeroSection from './HeroSection';

const HomePage = () => {
  return (
    <div>
      <HeroSection
        title='Buy Iphone 14 Pro'
        subtitle='Experience the power of Iphone Pro camera.'
        link='/'
        image={iphone}
      />
      <HeroSection
        title='Into the Mac Ecosystem'
        subtitle='Imac mini'
        link='/'
        image={mac}
      />
    </div>
  );
};

export default HomePage;
