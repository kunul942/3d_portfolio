import { BallCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { technologies } from '../constant'


const Tech = () => {

    return (
        <div className="mt-[10rem] mx-[10rem] mb-[10rem] flex flex-wrap justify-center gap-10">
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