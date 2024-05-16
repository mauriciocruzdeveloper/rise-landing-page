import React from 'react';
import { motion } from 'framer-motion';
import MainButton from '../common/MainButton';
import { ChevronRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative mt-20 lg:mt-1 bg-gradient-to-b from-[#864DC2] to-white flex flex-col justify-center items-center px-8 py-20">
      {/* Fondo decorativo */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-[url('/path-to-particles.png')] bg-cover opacity-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1 }}
        ></motion.div>
      </div>
      
      <div className="z-10 text-center">
        {/* Mensajes iniciales */}
        <motion.p
          className="text-[#cbc8d3] font-semibold text-center my-2 tracking-wider"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          The beginning is come
        </motion.p>
        
        {/* Título principal */}
        <motion.p
          className="text-white text-[35.8px] md:text-[100px] font-bold mt-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7 }}
        >
          <span className="text-[#546EAB]">AR</span>
          <span className="text-[#546EAB]">GEN</span>
          <span className="text-[#4697B4]">IA</span>
        </motion.p>
        
        {/* Botón principal */}
        <motion.div
          className="mt-8 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <MainButton
            text="Get Started"
            classes="h-[56px] w-[163.52px] bg-[#864DC2] text-white"
            rightIconRoute="/images/chevron_right.svg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
