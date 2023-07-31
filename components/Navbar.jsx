'use client';

// Importa a biblioteca para animações.
import { motion } from 'framer-motion';

// Importa os estilos CSS.
import styles from '../styles';

// Importa as variantes de animação para a barra de navegação.
import { navVariants } from '../utils/motion';

// Define o componente Navbar.
const Navbar = () => (
  // Cria uma barra de navegação animada.
  <motion.nav
    variants={navVariants}
    initial="hidden"
    animate="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    
    <div className="absolute w-[50%] inset-0 gradient-01" />

    
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
      
      <img
        src="/search.svg"
        alt="Search"
        className="w-[24px] h-[24px] object-contain "
      />
      
     
      <h2 className="font-extrabold text-[24px] leading-[30px] text-white">
        GABRIEL R MENDONCA
      </h2>

      
      <img
        src="/menu.svg"
        alt="menu"
        className="w-[24px] h-[24px] object-contain"
      />
    </div>
  </motion.nav>
);

// Exporta o componente Navbar.
export default Navbar;
