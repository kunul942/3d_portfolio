import { BallCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { technologies } from '../constant'

import { motion } from 'framer-motion'
import { styles } from '../styles'
import { textVariant } from '../utils/motion'


const Tech = () => {

    return (
            <div className="mt-[3rem] mb-[3rem] flex flex-wrap justify-center gap-10">
                
                { technologies.map(( technology )=>(
                    <div 
                        key={ technology.name }
                        className="w-28 h-28"
                    >
                        <BallCanvas icon={ technology.icon } />
                    </div>
                ))}            
            </div>
    )
}

export default SectionWrapper( Tech, "")