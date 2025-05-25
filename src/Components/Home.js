import React, { useState, useEffect } from 'react';
import Gallery from './Gallery'
import Info from './Info'
import Support from './Support'
import Explore from './Explore'
import ExplorePhone from './ExplorePhone';

const Home = () => {
  const [isDestop, setIsDestop] = useState(false);

  useEffect(() => {
   
    const handleResize = () => {
      setIsDestop(window.innerWidth >= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      {isDestop && <DesktopComponent />}
      {!isDestop && <MobileComponent />}
    </div>
  );
};

const DesktopComponent = () => {
  return (
    <>
    <Gallery sli_de={3} />
    <Explore/>
    <Info/>
    <Support/>
    </>
  );
};

const MobileComponent = () => {
  return (
   <>
   <Gallery sli_de={1} />
   <ExplorePhone/>

   
   </>
  );
};

export default Home;
