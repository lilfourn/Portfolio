import React from 'react';

const PulsingLight = () => {
  return (
    <div className="relative w-2 h-2">
      {/* Container with overflow hidden to keep glow within circle */}
      <div className="w-full h-full rounded-full overflow-hidden">
        {/* Main light dot with glow effects */}
        <div className="w-full h-full rounded-full bg-emerald-400 animate-pulse relative">
          {/* Inner glow layers */}
          <div className="absolute inset-0 rounded-full bg-emerald-400/50 mix-blend-soft-light"></div>
          <div className="absolute inset-0 rounded-full bg-emerald-400/30 animate-ping"></div>
        </div>
      </div>
    </div>
  );
};

export default PulsingLight;