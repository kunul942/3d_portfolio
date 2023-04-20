// import { Suspense, useEffect, useState } from 'react'
// import { Canvas } from '@react-three/fiber'
// import { OrbitControls, Preload, useGLTF } from '@react-three/drei'

// import CanvasLoader from '../Loader'

// const Computers = ({ isMobile }) => {


//computadora 3D
//     const computer = useGLTF('./desktop_pc/scene.gltf')


//     return (


//         <mesh>
//             {/* luces para el pc*/ }
//             <hemisphereLight intensity={0.15} groundColor="black" />
//             <pointLight intensity={1} />
//             <spotLight 
//                 position={[-20, 50, 10]} 
//                 angle={0.12}
//                 penumbra={1}
//                 intensity={1}
//                 castShadow
//                 shadow-mapSize={1024}
//             />
 
//             {/* dimensiones y medidas */ }
//             {/* <primitive 
//                 object={ computer.scene } 
//                 scale={ isMobile ? 0.7 : 0.75}
//                 position={ isMobile ? [0, -3, -2.2] : [0, -3.25,-1.5]}
//                 rotation={[-0.01, -0.2, -0.1]}
//             /> */}
//             <primitive 
//                 object={ computer.scene } 
//                 scale={ 0.60 }
//                 position={ [0, -3.25,-1.5]}
//                 rotation={[-0.01, -0.2, -0.1]}
//             />
//         </mesh>
//     )
// }



// const ComputerCanvas = () => {

    //mobile
    // const [isMobile, setIsMobile] = useState( false )
    // useEffect(() => {
        // Add a listener for changes to the screen size
    //     const mediaQuery = window.matchMedia("(max-width: 500px)")
    //     console.log({ mediaQuery: mediaQuery.matches })
        //Set the initial value of the 'isMobile state variable'
    //     setIsMobile( mediaQuery.matches )

        //Define a callback function to handle changes to the media query
    //     const handleMediaQueryChange = ( event ) =>{
    //         setIsMobile( event.matches )
    //     }  

        //Add the callback function as a listener for changes to the media query
    //     mediaQuery.addEventListener("change", handleMediaQueryChange) 

        //Remove the listener when the component is unmounted
    //     return () =>{ 
    //         mediaQuery.removeEventListener("change", handleMediaQueryChange)
    //     }

    // }, [])
    

//     return(
//         <Canvas 
//             frameloop="demand" 
//             shadows 
//             gl = {{ preserveDrawingBuffer: true }}
//             camera= {{ 
//                 fov: 25,  
//                 near: 0.1,
//                 far: 200,
//                 position: [ 20, 3, 5 ], 
//             }}
//         >
//             <Suspense fallback={ <CanvasLoader /> }>
//                 <OrbitControls 
//                     autoRotate
//                     enableZoom={ false } 
//                     maxPolarAngle={Math.PI / 2}
//                     minPolarAngle={Math.PI / 2}
//                 />
//                 {/* <Computers isMobile={ isMobile } /> */}
//                 <Computers />
//             </Suspense>

//             {/* <Preload all /> */}
//         </Canvas>
//     )
// }





// export default ComputerCanvas


import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'

import { OrbitControls, Preload, useGLTF } from '@react-three/drei'

import CanvasLoader from '../Loader'


const Computers = () => {

    const earth = useGLTF('./planet/scene.gltf')
    // const earth = useGLTF('')


    return (
        <primitive 
            object={ earth.scene }
            scale={ 2.5 }
            position={ [0, -3.25,-1.5]}
            rotation={[-0.01, -0.2, -0.1]}
        />
    )
}


const ComputerCanvas = () =>{

    return(

        <Canvas
        frameloop="demand"
            shadows
            gl={{ preserveDrawingBuffer: true }}
            camera={{ 
                fov: 45,
                near: 0.1,
                far: 200,
                position: [-4, 3, 6]
            }}
        >
            <Suspense fallback={ <CanvasLoader /> }>
                <OrbitControls 
                    autoRotate
                    enableZoom={ false }
                    maxPolarAngle={ Math.PI / 2 }
                    minPolarAngle={ Math.PI / 2 }
                />

                <Computers />
            </Suspense>
        </Canvas>
    )
}


export default ComputerCanvas