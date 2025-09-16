import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { Suspense } from 'react';
import FloatingGeometry from './FloatingGeometry';

interface Scene3DProps {
  className?: string;
  interactive?: boolean;
}

const Scene3D = ({ className = "", interactive = false }: Scene3DProps) => {
  return (
    <div className={`${className}`}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          
          <FloatingGeometry position={[-2, 0, 0]} geometry="sphere" speed={0.8} />
          <FloatingGeometry position={[2, 1, -1]} geometry="torus" speed={1.2} />
          <FloatingGeometry position={[0, -1, 1]} geometry="box" speed={0.6} />
          
          {interactive && (
            <OrbitControls 
              enableZoom={false} 
              enablePan={false}
              autoRotate
              autoRotateSpeed={0.5}
            />
          )}
          
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene3D;