import React from 'react';
import Hero from '../components/sections/Hero';
import Servicios from '../components/sections/Servicios';
import Portafolio from '../components/sections/Portafolio';
import Contacto from '../components/sections/Contacto';

const Home = () => {
  return (
    <>
      <Hero />
      <Servicios />
      <Portafolio />
      <Contacto />
    </>
  );
};

export default Home;