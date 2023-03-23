'use client';
import { motion } from "framer-motion";
import styles from '../styles';
import {navVariants} from '../utils/motion';
import Image from "next/image";

export default function Navbar(){
  return (
    <motion.nav variants={navVariants} 
    initial={"hidden"} whileInView={'show'} 
    className={`${styles.xPaddings} py-8 relative`}>
      <div className="absolute w-[50%] inset-0 gradient-01" />
      <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
        <Image src={'search.svg'} alt="search" height={24} width={24} className="object-contain" />
        <h2 className="font-extrabold text-[24px] leading-[30px] text-white">PANAVERSE</h2>
        <Image src={'menu.svg'} alt='menu' width={24} height={24} className="object-contain" />
      </div>
    </motion.nav>
  );
}
