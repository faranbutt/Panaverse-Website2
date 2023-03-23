"use client";
import { motion } from "framer-motion";
import styles from "../styles";
import { fadeIn, slideIn, staggerContainer, textVariant } from "../utils/motion";
import Image from "next/image";
import Link from "next/link";
import { TypingText } from "@/components";

export default function About() {
  return (
    <section className={`${styles.paddings} realtive z-10`}>
      <div className="gradient-02 z-0" />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
      >
        <TypingText title="| About Panaverse" textStyles="text-center" />
        <motion.p variants={fadeIn('up','tween',0.2,1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
        >
          The Future of the Web is <span className="text-white font-extrabold">Web 3.0,</span> <span className="text-white font-extrabold">Metaverse</span>, 
          and <span className="text-white font-extrabold"> Edge Computing</span>. Panaverse DAO is a movement to spread these technolgies globally. It is community of Web 3 and Metaverse developers, designers, trainers, startup founders and service providers.
        </motion.p>
        <motion.img variants={fadeIn('up','tween',0.3,1)} 
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
        />      
      </motion.div>
    </section>
  );
}
