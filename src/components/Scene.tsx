import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, PerspectiveCamera, useScroll } from '@react-three/drei';
import * as THREE from 'three';

export function Scene() {
  const particlesCount = 1900;
  const positions = useMemo(() => {
    const pos = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return pos;
  }, []);

  const particlesRef = useRef<THREE.Points>(null);
  const sphereRef = useRef<THREE.Mesh>(null);
  const scroll = useScroll();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const scrollOffset = scroll.offset;

    if (particlesRef.current) {
      particlesRef.current.rotation.y = time * 0.1;
      particlesRef.current.position.y = scrollOffset * -10;
    }

    if (sphereRef.current) {
      sphereRef.current.position.y = Math.sin(time) * 0.2 + (scrollOffset * -10);
      sphereRef.current.rotation.y = time * 0.5;
    }
  });

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 5]} />
      <Float speed={1.4} rotationIntensity={2} floatIntensity={3} castShadow>
        <mesh ref={sphereRef} position={[0, 0, 0]} castShadow receiveShadow>
          <sphereGeometry args={[1, 64, 64]} />
          <meshPhysicalMaterial
            roughness={0.1}
            metalness={0.8}
            color="#88ccff"
            emissive="#112244"
            emissiveIntensity={0.5}
            transmission={1}
            thickness={0.7}
            clearcoat={1}
            clearcoatRoughness={0}
          />
        </mesh>
      </Float>

      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particlesCount}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
<pointsMaterial
  size={0.03}
  color="#8888ff"
  transparent
  opacity={0.5}
  sizeAttenuation
/>
      </points>
      <ambientLight intensity={0.3} />
<spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={0.8} />

    </>
  );
}