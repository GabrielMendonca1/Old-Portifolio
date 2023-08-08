'use client';

import { motion } from 'framer-motion';

import { socials } from '../constants';

import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>

<div className="absolute right-0 pt-100px flex-col space-y-8 p-4 hidden sm:flex z-20">
      {socials.map((social) => (
        <a href={social.link} target="_blank" rel="noopener noreferrer" key={social.name}>
          <img src={social.url} alt={social.name} className="w-[24px] h-[24px] cursor-pointer" />
        </a>
      ))}
    </div>

    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="flex justify-center items-center flex-col relative z-10">
        <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
          Gabriel 
        </motion.h1>
        <motion.div
          variants={textVariant(1.2)}
          className="flex flex-row justify-center items-center"
        >
          <h1 className={styles.heroHeading}>Men</h1>
          <div className={styles.heroDText} />
          <h1 className={styles.heroHeading}>onça</h1>
        </motion.div>

        
      </div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        
        className="relative w-full md:-mt-[20px] -mt-[12px]"
      >
        <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]" />

        <img
          src="/cover.png"
          alt="hero_cover"
          className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative"
        />

    
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;