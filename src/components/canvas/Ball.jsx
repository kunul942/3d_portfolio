// import React, { Suspense } from 'react'
// import { Canvas } from '@react-three/fiber'
// import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei'

// import CanvasLoader from '../Loader'

/* Codigo para hacer bolas dinamicas */

// const Ball = ( props ) => {
//     const [ decal ]  = useTexture([ props.imgUrl ])

//     return (
//         <Float speed={ 1.75 } rotationIntensity={ 1 } floatIntensity={ 2 }>
//             <ambientLight intensity={ 0.25 } />
//             <directionalLight position={[ 0, 0, 0.05 ]} />

//             <mesh castShadow receiveShadow scale={ 2.75 }>
//                 <icosahedronGeometry args={[ 1, 1 ]} />

//                 <meshStandardMaterial 
//                     color="#fff8eb"
//                     polygonOffset
//                     polygonOffsetFactor={-5}  
//                     flatShading               
//                 />

//                 <Decal 
//                     position={[ 0, 0, 1 ]}
//                     rotation={[ 2 * Math.PI, 0, 6.25 ]}
//                     flatShading
//                     map={ decal }
//                 />
//             </mesh>
//         </Float>

//     )

// }



// const BallCanvas = ({ icon, name }) =>{

//     return (
        // <Canvas 
            // frameloop="always" 
        //     frameloop="demand" 
        //     gl = {{ preserveDrawingBuffer: false }}
        //     >

        //     <Suspense fallback={ <CanvasLoader /> }> 
        //         <Ball imgUrl= { icon } />
        //         <OrbitControls enableZoom={ true } />
        //     </Suspense> 

        //     <Preload all />
        // </Canvas>
//     )

// }

import { motion } from 'framer-motion'
import { fadeIn } from '../../utils/motion'
import { Tilt } from 'react-tilt'


const BallCanvas = ({ icon, name }) => {


    return(
        <motion.div variants={ fadeIn("up", "spring") }>
            <Tilt
                options={{max: 70, scale: 1, speed: 500}}
            >
                <div>
                    <img src={ icon } alt={ name } />    
                </div>
            </Tilt>
        </motion.div>
    )


}


export default BallCanvas