

import { styles } from '../styles'

const Hero = () =>{
    return(
        // <section className="relative w-full h-screen mx-auto"> 
        <section className="relative w-full mx-auto pb-[15rem]"> 

            {/* generar background */}
            <div className={`${ styles.paddingX } inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
                <div className="w-5 h-5 rounded-full bg-[#915eff]"></div> {/*crear circulo*/}
                
                <div className="w-1 sm:h-80 h-40 violet-gradient" /> {/*crear linea*/}
                {/* Introduccion de quien soy */}
                <div>
                    <h1 className={`${ styles.heroHeadText }text-white mt-[10rem]`}>
                        Hi, I'm <span className="text-[#915eff]">Kunu</span>
                    </h1>
                    <p className={`${ styles.heroSubText } mt-2 text-white-100`}>
                        I Develop Full Stack Web Applications <br className="sm:block hidden"/> 
                    </p>
                </div>
            </div>

        </section>
    )
}

export default Hero