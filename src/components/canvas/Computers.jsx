/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader'

const Computers = () => {
  const computer = useGLTF('./desktop_pc/scene.gltf')

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <primitive object={computer.scene} />
    </mesh>
  )
}

const ComputersCanvas = () => {
  return (
    <Canvas>
      
    </Canvas>
  )
}

export default Computers;