import {useRef,useEffect} from 'react';

import birdScene from '../assets/3d/birds.glb';
import {useAnimations, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const Birds = () => {
    const {scene,animations} = useGLTF(birdScene);
    const birdRef = useRef();
    const {actions} = useAnimations(animations,birdRef);

    useEffect(() => {
      actions['Scene'].play();
    }, []);

    useFrame(({clock,camera}) => {
      //Update the Y position to simulate bird-like motion using a sine wave
      birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;

      //Check if the bird reached a certain endpoint relative to the camera
      if(birdRef.current.position.x > camera.position.x + 10){
        //Change direction to backward and rotate the bird 180 degrees on the y-axis
        birdRef.current.rotation.y = Math.PI;
      }else if (birdRef.current.position.x < camera.position.x - 10){
        //Change direction to forward and reset the birds rotation
        birdRef.current.rotation.y = 0;
      }

      if(birdRef.current.rotation.y === 0){
        //Move forward
        birdRef.current.position.x += 0.04;
        birdRef.current.position.z -= 0.01;
      }
      else {
        //Move backward
        birdRef.current.position.x -= 0.04;
        birdRef.current.position.z += 0.01;
      }
    });

  return (
    <mesh 
    position={[-10,3,0]} 
    scale={[1,1,1]} 
    rotation={[0,0,0]}
    ref={birdRef}
    >
        <primitive object={scene} />
    </mesh>
  )
}

export default Birds