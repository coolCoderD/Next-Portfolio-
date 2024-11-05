import { useRef, useMemo, useState, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { PerspectiveCamera, useScroll, AdaptiveDpr } from '@react-three/drei';
import * as THREE from 'three';

export function Scene() {
  const particlesRef = useRef<THREE.Points>(null);
  const { mouse, viewport, size } = useThree();
  const scroll = useScroll();
  const [radius, setRadius] = useState(viewport.width / 5); // Responsive radius

  useEffect(() => {
    // Update radius based on viewport width for responsiveness
    const newRadius = viewport.width / 5;
    setRadius(newRadius);
  }, [viewport.width]);

  const particlesCount = 9000;

  // Generate particles in a sphere shape, responsive to radius
  const particlePositions = useMemo(() => {
    const positions = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount; i++) {
      const theta = Math.random() * Math.PI * 2; // Horizontal angle
      const phi = Math.random() * Math.PI; // Vertical angle

      // Convert spherical to Cartesian coordinates
      
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta); // x
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta); // y
      positions[i * 3 + 2] = radius * Math.cos(phi); // z
    }
    return positions;
  }, [radius]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const scrollOffset = scroll.offset;

    // Apply responsive interactivity to particles based on mouse position
    if (particlesRef.current) {
      particlesRef.current.rotation.y = time * 0.05;
      particlesRef.current.position.y = scrollOffset * -10;
      
      // Make particles follow mouse movement subtly
      const mouseX = (mouse.x * viewport.width) / 20;
      const mouseY = (mouse.y * viewport.height) / 20;
      particlesRef.current.position.x += (mouseX - particlesRef.current.position.x) * 0.05;
      particlesRef.current.position.y += (mouseY - particlesRef.current.position.y) * 0.05;
    }
  });

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 5]} />
      
      {/* Particle points */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particlesCount}
            array={particlePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.02 * (viewport.width / 10)} // Scale particle size based on viewport width
          color="#8888ff"
          transparent
          opacity={0.4}
          sizeAttenuation
        />
      </points>

      {/* Dynamic lighting setup */}
      <ambientLight intensity={0.5} />
      <pointLight position={[2, 2, 2]} intensity={1} color="#ff7eb3" />
      <pointLight position={[-2, -2, 2]} intensity={1} color="#4834d4" />
      
      {/* Performance optimization */}
      <AdaptiveDpr pixelated />
    </>
  );
}
