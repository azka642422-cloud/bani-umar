import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three';
import { BranchData } from '../../types';

interface BaniUmarUniverseProps {
  branches: BranchData[];
  onSelectBranch: (branch: BranchData) => void;
  isNight?: boolean;
}

function UmarTrunk({ isNight }: { isNight?: boolean }) {
  const trunkRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (trunkRef.current) {
      trunkRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.05;
    }
  });

  return (
    <group ref={trunkRef} position={[0, -1.5, 0]}>
      {/* Main Trunk */}
      <mesh position={[0, 1, 0]}>
        <cylinderGeometry args={[0.5, 0.7, 2.5, 16]} />
        <meshStandardMaterial color="#8d5b4c" roughness={0.7} />
      </mesh>
      {/* Umar Root / Base Plinth */}
      <mesh position={[0, -0.4, 0]}>
        <cylinderGeometry args={[1.2, 1.4, 0.4, 32]} />
        <meshStandardMaterial color={isNight ? "#1e293b" : "#ffeedb"} roughness={0.3} emissive="#ffb703" emissiveIntensity={0.2} />
      </mesh>
    </group>
  );
}

function SevenBranches({ branches, onSelectBranch }: { branches: BranchData[]; onSelectBranch: (b: BranchData) => void }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.06;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0.5, 0]}>
      {branches.map((branch, i) => {
        const angle = (i / branches.length) * Math.PI * 2;
        const radius = 2.8;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        const y = Math.sin(i * 1.5) * 0.5 + 0.8;

        return (
          <group key={branch.id} position={[x, y, z]}>
            <Float speed={3} rotationIntensity={0.5} floatIntensity={1}>
              <mesh
                onClick={() => onSelectBranch(branch)}
                scale={[0.8, 0.8, 0.8]}
              >
                <sphereGeometry args={[0.65, 32, 32]} />
                <meshStandardMaterial
                  color={branch.color}
                  roughness={0.2}
                  metalness={0.3}
                  emissive={branch.color}
                  emissiveIntensity={0.4}
                />
              </mesh>
            </Float>
          </group>
        );
      })}
    </group>
  );
}

export const BaniUmarUniverse: React.FC<BaniUmarUniverseProps> = ({ branches, onSelectBranch, isNight }) => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-auto">
      <Canvas
        camera={{ position: [0, 2, 8], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={isNight ? 0.3 : 1.1} />
        <pointLight position={[10, 10, 10]} intensity={isNight ? 0.6 : 2} color={isNight ? "#3a86ff" : "#ffeedb"} />
        <directionalLight position={[-5, 5, 2]} intensity={isNight ? 0.2 : 0.9} />

        <UmarTrunk isNight={isNight} />
        <SevenBranches branches={branches} onSelectBranch={onSelectBranch} />

        {isNight && <Stars radius={50} depth={50} count={2500} factor={4} saturation={1} fade speed={1} />}

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2 + 0.05}
          minPolarAngle={Math.PI / 4}
          rotateSpeed={0.4}
        />
      </Canvas>
    </div>
  );
};
