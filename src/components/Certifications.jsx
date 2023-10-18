import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { certifications } from "../constants";

const CertificationCard = ({
  index,
  certification,
  institution,
  year,
  image,
  link,
}) => (
  <motion.div
  variants={fadeIn("", "spring", index * 0.5, 0.75)}
  className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full hover:scale-105 transition-transform cursor-pointer'
>
  <a href={link} target="_blank" rel="noopener noreferrer"> 
    <img
      src={image}
      alt={`certification-${certification}`}
      className='w-full h-[230px] object-cover rounded-2x1'
    />
    <div className='mt-5'>
      <h3 className='text-white font-bold text-[24px]'>{certification}</h3>
      <p className='text-secondary text-[14px]'>{institution}, {year}</p>
    </div>
  </a>
</motion.div>
);

const Certifications = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Certifications</p>
          <h2 className={styles.sectionHeadText}>Achievements</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {certifications.map((certification, index) => (
          <CertificationCard key={`${certification.certification}-${index}`} index={index} {...certification} />

        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Certifications, "");
