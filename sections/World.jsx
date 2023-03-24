"use client";
import { motion } from "framer-motion";
import styles from "@/styles";
import { staggerContainer, fadeIn } from "@/utils/motion";
import { TitleText, TypingText } from "@/components";
import Image from "next/image";

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: "false", amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title={"| Location"} textStyles={"text-center"} />
      <TitleText
        title={<>Track our Location around the World</>}
        textStyles={"text-center"}
      />
      <motion.div variants={fadeIn('up','tween',0.3,1)} className="relative mt-[68px] flex w-full h-[550px]">
        <img src="/map.png" alt="map" className="w-full h-full object-cover"/>
        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full ">
          <img src="/panaverse.png" alt="location" className="w-full h-full" />
        </div>
        <div className="absolute top-10 left-40 w-[70px] h-[70px] p-[6px] rounded-full ">
          <img src="/panaverse.png" alt="location" className="w-full h-full" />
        </div>
        <div className="absolute top-40 right-[450px] w-[70px] h-[70px] p-[6px] rounded-full ">
          <img src="/panaverse.png" alt="location" className="w-full h-full" />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
