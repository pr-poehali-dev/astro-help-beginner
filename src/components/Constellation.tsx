import { useState } from 'react';
import { Badge } from '@/components/ui/badge';

interface Star {
  x: number;
  y: number;
  brightness: number;
}

interface ConstellationLine {
  from: number;
  to: number;
}

interface ConstellationProps {
  name: string;
  latin: string;
  stars: Star[];
  lines: ConstellationLine[];
  x: number;
  y: number;
  hemisphere: string;
  delay: number;
}

const Constellation = ({ name, latin, stars, lines, x, y, hemisphere, delay }: ConstellationProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const baseSize = 80;

  return (
    <div
      className="absolute group"
      style={{
        left: `${x}%`,
        top: `${y}px`,
        transform: 'translate(-50%, -50%)',
        width: `${baseSize}px`,
        height: `${baseSize}px`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <svg
        width={baseSize}
        height={baseSize}
        className="relative z-10 cursor-pointer"
        style={{ overflow: 'visible' }}
      >
        {lines.map((line, idx) => {
          const star1 = stars[line.from];
          const star2 = stars[line.to];
          if (!star1 || !star2) return null;
          
          return (
            <line
              key={idx}
              x1={star1.x * baseSize}
              y1={star1.y * baseSize}
              x2={star2.x * baseSize}
              y2={star2.y * baseSize}
              stroke="hsl(var(--primary))"
              strokeWidth={isHovered ? "1.5" : "0.8"}
              strokeOpacity={isHovered ? "0.7" : "0.3"}
              className="transition-all duration-300"
              style={{
                filter: isHovered ? 'drop-shadow(0 0 3px hsl(var(--primary)))' : 'none'
              }}
            />
          );
        })}

        {stars.map((star, idx) => {
          const size = 1.5 + star.brightness * 1.5;
          return (
            <circle
              key={idx}
              cx={star.x * baseSize}
              cy={star.y * baseSize}
              r={isHovered ? size * 1.3 : size}
              fill="white"
              className="animate-twinkle transition-all duration-300"
              style={{
                animationDelay: `${delay + idx * 0.1}s`,
                filter: isHovered 
                  ? `drop-shadow(0 0 ${3 + star.brightness * 2}px white)` 
                  : `drop-shadow(0 0 ${1 + star.brightness}px white)`
              }}
            />
          );
        })}
      </svg>

      <div 
        className="absolute -top-20 left-1/2 -translate-x-1/2 bg-card/95 border border-border/50 px-3 py-2 rounded-lg transition-opacity whitespace-nowrap backdrop-blur z-20 shadow-xl pointer-events-none"
        style={{ opacity: isHovered ? 1 : 0 }}
      >
        <p className="text-sm font-bold">{name}</p>
        <p className="text-xs text-muted-foreground italic">{latin}</p>
        <div className="flex gap-2 mt-1">
          <Badge variant="outline" className="text-xs">
            {stars.length} ⭐
          </Badge>
          <Badge variant="outline" className="text-xs">
            {hemisphere}
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default Constellation;
