import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constant'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'



//mostrar las tecnologias en carta
const ServiceCard = ({ index, title, icon }) =>{
    return (
        <Tilt className="xs:w-[250px] w-full">
            <motion.div 
                variants={fadeIn("right", "spring", 0.5 * index, 0.75 )}
                className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
            >
                <div
                    options={{
                        max: 45,
                        scale: 1,
                        speed: 450
                    }}
                    className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
                >
                    <img src={ icon } alt={ title } 
                        className="w-16 h-16 object-contain"
                    />
                    <h3 className="text-white text-[20px] font-bold text-center">{ title }</h3>
                </div>
            </motion.div>
        </Tilt>
    )
}


const About = () => {
    return (
        <>
            <motion.div variants={ textVariant() }>
                <p className={ styles.sectionSubText }>
                    Introduction
                </p>

                <h2 className={ styles.sectionHeadText }>
                    Overview.
                </h2>
            </motion.div>   

            {/* pequeña introducción  */}
            <motion.p 
                variants={ fadeIn("", "", 0.1, 1) }
                className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
            >
                Passionate Full Stack Developer with expertise in JavaScript, TypeScript, React.js, Node.js, and Next.js. I thrive on solving complex technical challenges and building successful projects. My journey into full-stack development was driven by a love for innovation and a desire to make a meaningful impact in the tech world. I believe in the power of clean code, continuous learning, and collaborative problem-solving. When I'm not coding, you'll find me exploring the outdoors and indulging in my love for teaching and learning languages.
            </motion.p>

            {/* tecnologias */}
            <div className="mt-20 flex flex-wrap gap-10">
                { services.map(( service, index )=>(
                    < ServiceCard 
                        {...service }
                        key={ service.title }
                        index={ index }
                    />
                ))}
            </div>

        </> 
    )
}

export default SectionWrapper(About, "about")