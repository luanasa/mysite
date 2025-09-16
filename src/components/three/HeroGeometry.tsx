import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

const HeroGeometry = () => {
  const meshRef = useRef<Mesh>(null);
  const torusRef = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.3;
      meshRef.current.rotation.y += delta * 0.5;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.3;
    }
    if (torusRef.current) {
      torusRef.current.rotation.x += delta * 0.2;
      torusRef.current.rotation.z += delta * 0.4;
      torusRef.current.position.x = Math.cos(state.clock.elapsedTime * 0.5) * 0.5;
    }
  });

  return (
    <group>
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial 
          color="#ff6b6b" 
          wireframe 
          transparent
          opacity={0.8}
        />
      </mesh>
      <mesh ref={torusRef} position={[2, -1, 0]}>
        <torusGeometry args={[0.7, 0.2, 16, 32]} />
        <meshStandardMaterial 
          color="#4ecdc4" 
          transparent
          opacity={0.6}
        />
      </mesh>
    </group>
  );
};

export default HeroGeometry;