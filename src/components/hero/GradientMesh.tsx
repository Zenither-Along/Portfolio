'use client';

import Fireworks from './Fireworks';

export default function GradientMesh() {
  return (
    <div className="absolute inset-0 overflow-hidden" style={{ zIndex: 0 }}>
      <Fireworks />
    </div>
  );
}

