
import { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, RoundedBox, Text3D, useTexture, Sphere } from '@react-three/drei';
import * as THREE from 'three';

// Floating mesh with animation
const FloatingMesh = ({ position, rotation, color, speed = 1, scale = 1 }: any) => {
  const mesh = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    mesh.current.position.y += Math.sin(time * speed) * 0.002;
    mesh.current.rotation.x += 0.003 * speed;
    mesh.current.rotation.y += 0.002 * speed;
  });
  
  return (
    <RoundedBox 
      ref={mesh} 
      args={[1, 1, 1]} 
      radius={0.1} 
      smoothness={4} 
      position={position} 
      rotation={rotation}
      scale={scale}
    >
      <meshStandardMaterial 
        color={color} 
        roughness={0.3} 
        metalness={0.8} 
        emissive={color}
        emissiveIntensity={0.5}
      />
    </RoundedBox>
  );
};

// Revised Particle Field for background
const ParticleField = ({ count = 100 }) => {
  // Create a fixed array of particle positions and scales
  const [particles] = useState(() => {
    const particles = [];
    for (let i = 0; i < count; i++) {
      particles.push({
        position: [
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 10 - 5
        ],
        scale: Math.random() * 0.05 + 0.02
      });
    }
    return particles;
  });
  
  return (
    <group>
      {particles.map((particle, i) => (
        <Particle 
          key={i} 
          position={particle.position} 
          scale={particle.scale} 
          index={i} 
        />
      ))}
    </group>
  );
};

// Individual particle component
const Particle = ({ position, scale, index }) => {
  const meshRef = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) {
      // Apply gentle floating motion
      meshRef.current.position.x += Math.sin(time * 0.05 + index) * 0.001;
      meshRef.current.position.y += Math.cos(time * 0.05 + index) * 0.001;
    }
  });
  
  return (
    <mesh 
      ref={meshRef}
      position={position}
      scale={scale}
    >
      <sphereGeometry args={[1, 16, 16]} />
      <meshBasicMaterial color="#9B87F5" transparent opacity={0.8} />
    </mesh>
  );
};

// Glowing text
const GlowingText = () => {
  // Change the ref type from Mesh to Group to match the actual element being used
  const textRef = useRef<THREE.Group>(null!);
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (textRef.current) {
      textRef.current.position.y = Math.sin(time * 0.5) * 0.1;
    }
  });
  
  return (
    <group ref={textRef} position={[0, 0, 0]}>
      <Text3D
        font="/fonts/inter_bold.json"
        size={0.8}
        height={0.1}
        curveSegments={12}
        bevelEnabled
        bevelThickness={0.02}
        bevelSize={0.02}
        bevelSegments={5}
        position={[-3.2, 0, 0]}
      >
        HACK
        <meshStandardMaterial 
          color="#9B87F5" 
          roughness={0.1} 
          metalness={0.8} 
          emissive="#9B87F5"
          emissiveIntensity={0.6}
        />
      </Text3D>
      <Text3D
        font="/fonts/inter_bold.json"
        size={0.8}
        height={0.1}
        curveSegments={12}
        bevelEnabled
        bevelThickness={0.02}
        bevelSize={0.02}
        bevelSegments={5}
        position={[0.1, 0, 0]}
      >
        QUEST
        <meshStandardMaterial 
          color="#D946EF" 
          roughness={0.1} 
          metalness={0.8} 
          emissive="#D946EF"
          emissiveIntensity={0.6}
        />
      </Text3D>
    </group>
  );
};

const Scene = () => {
  const gridRef = useRef<THREE.GridHelper>(null!);
  
  useFrame((state) => {
    if (gridRef.current) {
      gridRef.current.position.z -= 0.01;
      if (gridRef.current.position.z < -5) {
        gridRef.current.position.z = 5;
      }
    }
  });
  
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#9B87F5" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#D946EF" />
      
      {/* Grid helper */}
      <gridHelper 
        ref={gridRef}
        args={[20, 20, '#9B87F5', '#D946EF']} 
        position={[0, -2, 0]} 
        rotation={[Math.PI / 2, 0, 0]} 
      />
      
      {/* The 3D text */}
      <GlowingText />
      
      {/* Floating cybersecurity elements */}
      <FloatingMesh position={[-3.5, 1.5, -1]} rotation={[0.5, 0.5, 0]} color="#0EA5E9" speed={1.3} scale={0.5} />
      <FloatingMesh position={[3.2, 1.2, -2]} rotation={[0.2, 0.3, 0.1]} color="#D946EF" speed={0.8} scale={0.4} />
      <FloatingMesh position={[4, -1.3, -1.5]} rotation={[0.5, 0.5, 0]} color="#9B87F5" speed={1.1} scale={0.6} />
      <FloatingMesh position={[-4, -1.5, -2]} rotation={[0.2, 0.3, 0.1]} color="#10B981" speed={0.9} scale={0.45} />
      
      {/* Particles in the background */}
      <ParticleField count={50} />
      
      {/* Camera controls */}
      <OrbitControls 
        enableZoom={false} 
        enablePan={false} 
        enableRotate={true} 
        autoRotate={true} 
        autoRotateSpeed={0.5} 
        maxPolarAngle={Math.PI / 2} 
        minPolarAngle={Math.PI / 2}
      />
      <PerspectiveCamera makeDefault position={[0, 0, 7]} fov={60} />
    </>
  );
};

// Main component
const Hero3D = () => {
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);
  
  if (!loaded) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="animate-pulse-glow">
          <div className="h-12 w-12 border-4 border-cyber-neonPurple border-t-transparent rounded-full animate-spin"></div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="w-full h-full rounded-lg overflow-hidden">
      <Canvas shadows dpr={[1, 2]} className="bg-cyber-black">
        <Scene />
      </Canvas>
    </div>
  );
};

export default Hero3D;
