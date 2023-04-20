import { motion } from "framer-motion"

import { styles } from '../styles'
import { ComputersCanvas } from './canvas'

const Hero = () =>{
    return(
        // <section className="relative w-full h-screen mx-auto"> 
        <section className="relative w-full mx-auto pb-[10rem]"> 

            {/* generar background */}
            {/* <div className={`${ styles.paddingX } absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}> */}
            <div className={`${ styles.paddingX } flex`}>
                {/* <div className="flex flex-col justify-center items-center m-5"> */}

                    <div className="w-5 h-5 rounded-full bg-[#915eff]"></div> {/*crear circulo*/}
                    <div className="w-1 sm:h-80 h-40 violet-gradient" /> {/*crear linea*/}
                {/* </div> */}

                {/* Introduccion de quien soy */}
                <div>
                    <h1 className={`${ styles.heroHeadText }text-white mt-[10rem]`}>
                        Hi, I'm <span className="text-[#915eff]">Kunu</span>
                    </h1>
                    <p className={`${ styles.heroSubText } mt-2 text-white-100`}>
                        I develop 3D visuals, user <br className="sm:block hidden"/> interfaces and web applications
                        {/* I develop 3D visuals, user <br className="sm:block hidden"/> interfaces and web applications */}
                    </p>
                </div>
            </div>
            {/* <ComputersCanvas /> */}

            {/* computadora 3D */}

            {/* scrolling gif */}
            {/* <div className="absolute bottom-10 w-full flex justify-center items-center">
                <a href="#about">
                    <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">                 
                        <motion.div
                            animate={{
                                y: [0, 24, 0]
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity, 
                                repeatType: 'loop'
                            }}
                            className="w-3 h-3 rounded-full bg-secondary mb-1"
                        />
                    </div>
                </a>

            </div> */}

        </section>
    )
}

export default Hero