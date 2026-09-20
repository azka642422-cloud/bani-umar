import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three';
import { FamilyMember } from '../../types';

interface UniverseCanvasProps {
  members: FamilyMember[];
  isNight?: boolean;
  onSelectMember?: (member: FamilyMember) => void;
}

function MiniHouse({ isNight }: { isNight?: boolean }) {
  const houseRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (houseRef.current) {
      houseRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.15;
      houseRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.1;
    }
  });

  return (
    <group ref={houseRef} position={[0, -0.5, 0]}>
      {/* House Base */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[2, 1.5, 2]} />
        <meshStandardMaterial color={isNight ? "#2c3e50" : "#ffeedb"} roughness={0.3} />
      </mesh>

      {/* Roof */}
      <mesh position={[0, 1.25, 0]} rotation={[0, Math.PI / 4, 0]}>
        <coneGeometry args={[1.6, 1.2, 4]} />
        <meshStandardMaterial color={isNight ? "#e74c3c" : "#ff7a59"} roughness={0.2} />
      </mesh>

      {/* Door */}
      <mesh position={[0, -0.35, 1.01]}>
        <boxGeometry args={[0.5, 0.8, 0.1]} />
        <meshStandardMaterial color="#b5651d" roughness={0.4} />
      </mesh>

      {/* Windows */}
      <mesh position={[-0.5, 0.2, 1.01]}>
        <boxGeometry args={[0.4, 0.4, 0.1]} />
        <meshStandardMaterial
          color={isNight ? "#ffb703" : "#3a86ff"}
          emissive={isNight ? "#ffb703" : "#3a86ff"}
          emissiveIntensity={isNight ? 1 : 0.4}
        />
      </mesh>
      <mesh position={[0.5, 0.2, 1.01]}>
        <boxGeometry args={[0.4, 0.4, 0.1]} />
        <meshStandardMaterial
          color={isNight ? "#ffb703" : "#3a86ff"}
          emissive={isNight ? "#ffb703" : "#3a86ff"}
          emissiveIntensity={isNight ? 1 : 0.4}
        />
      </mesh>

      {/* Chimney */}
      <mesh position={[0.6, 1.5, -0.5]}>
        <boxGeometry args={[0.3, 0.8, 0.3]} />
        <meshStandardMaterial color="#d35400" roughness={0.6} />
      </mesh>
    </group>
  );
}

function OrbitingMembers({ members, onSelectMember }: { members: FamilyMember[]; onSelectMember?: (m: FamilyMember) => void }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.08;
    }
  });

  return (
    <group ref={groupRef}>
      {members.map((member, i) => {
        const angle = (i / members.length) * Math.PI * 2;
        const radius = 3.8 + i * 0.8;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;

        return (
          <group key={member.id} position={[x, Math.sin(i * 2) * 0.5, z]}>
            <Float speed={3} rotationIntensity={0.5} floatIntensity={1}>
              <mesh
                onClick={() => onSelectMember && onSelectMember(member)}
                scale={[0.7, 0.7, 0.7]}
              >
                <sphereGeometry args={[0.6, 32, 32]} />
                <meshStandardMaterial
                  color={member.color}
                  roughness={0.2}
                  metalness={0.3}
                  emissive={member.color}
                  emissiveIntensity={0.3}
                />
              </mesh>
            </Float>
          </group>
        );
      })}
    </group>
  );
}

function FloatingDecorations() {
  const decosRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (decosRef.current) {
      decosRef.current.rotation.y = state.clock.elapsedTime * -0.05;
    }
  });

  return (
    <group ref={decosRef}>
      {Array.from({ length: 18 }).map((_, i) => {
        const theta = (i / 18) * Math.PI * 2;
        const r = 6 + (i % 3) * 1.5;
        const x = Math.cos(theta) * r;
        const z = Math.sin(theta) * r;
        const y = ((i * 3.7) % 6) - 3;
        const colors = ['#ff7a59', '#ffb703', '#3a86ff', '#b5179e', '#4cc9f0'];
        const color = colors[i % colors.length];

        return (
          <Float key={i} speed={4} floatIntensity={2}>
            <mesh position={[x, y, z]} scale={[0.3, 0.3, 0.3]}>
              {i % 2 === 0 ? <dodecahedronGeometry /> : <octahedronGeometry />}
              <meshStandardMaterial color={color} roughness={0.3} emissive={color} emissiveIntensity={0.2} />
            </mesh>
          </Float>
        );
      })}
    </group>
  );
}

export const UniverseCanvas: React.FC<UniverseCanvasProps> = ({ members, isNight, onSelectMember }) => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-auto">
      <Canvas
        camera={{ position: [0, 3, 9], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={isNight ? 0.4 : 1.2} />
        <pointLight position={[10, 10, 10]} intensity={isNight ? 0.8 : 2} color={isNight ? "#3a86ff" : "#ffeedb"} />
        <directionalLight position={[-5, 5, 2]} intensity={isNight ? 0.2 : 1} />

        <MiniHouse isNight={isNight} />
        <OrbitingMembers members={members} onSelectMember={onSelectMember} />
        <FloatingDecorations />

        {isNight && <Stars radius={50} depth={50} count={2000} factor={4} saturation={1} fade speed={1} />}

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2 + 0.1}
          minPolarAngle={Math.PI / 4}
          rotateSpeed={0.4}
        />
      </Canvas>
    </div>
  );
};
