import React from "react";
import { fadeIn, textVariant } from "../utils/motion";
import styles from "../styles";
import {motion} from "framer-motion"
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { Tilt } from "react-tilt";
import { github } from "../assets";

const ProjectCard = ( {index, name, description, tags, image, source_code_link, live_link}) => {
  return <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
    <Tilt options={{
      max : 45,
      scale : 1,
      speed: 450
    }}
    className={`bg-tertiary p-5 rounded-2xl sm:w-[360px] w-[330px]`}
    >
      <div className="relative w-full h-[200px] cursor-pointer" onClick={() => window.open(live_link, "_blank")}>
        <img src={image} alt={name} 
        className="w-full h-full object-cover rounded-2xl"
        />
        <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
          <div onClick={()=> window.open(source_code_link, "_blank")}
            className="black-gradient  w-10 h-10 rounded-full flex justify-center items-center cursor-grab">
              <img src={github} alt={github} className="w-1/2 h-1/2 object-contain"
              />
          </div>
        </div>
      </div>

      <div className="mt-5 ">
        <h3 className="text-white font-bold text-20px">
          {name}
        </h3>
        <p className="text-[14px] mt-2 text-secondary">
          {description}
        </p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {
          tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))
        }
      </div>

    </Tilt>
  </motion.div>
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p variants={fadeIn("", "", 0.1, 1)}
        className="mt-3 text-secondary text-[17px] leading-[30px]"
        >
          Following projects showcases my skills and experience through real-world
          examples  of my work. Each project is briefly described with links to code repositories and live links.
          It reflects my ability to solve complex problems, work with different technologies and manage products effectively.
        </motion.p>
      </div>

      <div className="mt-20 flex justify-center flex-wrap gap-5 ">
        {
          projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))
        }
      </div>
      
    </>
  );
};

export default SectionWrapper(Works, "work");
