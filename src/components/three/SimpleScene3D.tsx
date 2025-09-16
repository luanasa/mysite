import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

const Scene3D = () => {
  const meshRef = useRef<Mesh>(null);
  const sphere1Ref = useRef<Mesh>(null);
  const sphere2Ref = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.4;
      meshRef.current.rotation.z += delta * 0.2;
      meshRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 2) * 0.1);
    }
    if (sphere1Ref.current) {
      sphere1Ref.current.position.x = Math.cos(state.clock.elapsedTime) * 2;
      sphere1Ref.current.position.y = Math.sin(state.clock.elapsedTime * 1.5) * 0.5;
    }
    if (sphere2Ref.current) {
      sphere2Ref.current.position.x = Math.sin(state.clock.elapsedTime * 0.8) * 1.5;
      sphere2Ref.current.position.z = Math.cos(state.clock.elapsedTime * 0.8) * 1.5;
      sphere2Ref.current.rotation.y += delta * 1.5;
    }
  });

  return (
    <group>
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial 
          color="#4ecdc4" 
          wireframe 
          transparent
          opacity={0.7}
        />
      </mesh>
      <mesh ref={sphere1Ref} position={[2, 0, 0]}>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshStandardMaterial 
          color="#ff6b6b" 
          transparent
          opacity={0.8}
        />
      </mesh>
      <mesh ref={sphere2Ref} position={[-1, 1, 0]}>
        <octahedronGeometry args={[0.4]} />
        <meshStandardMaterial 
          color="#ffd93d" 
          transparent
          opacity={0.6}
        />
      </mesh>
    </group>
  );
};

export default Scene3D;