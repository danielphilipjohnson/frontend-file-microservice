interface CircularProgressProps {
  value: number;
  size?: number;
  strokeWidth?: number;
  color: string;
}

export const CircularProgress = ({
  value,
  size = 120,
  strokeWidth = 8,
  color,
}: CircularProgressProps) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="transform -rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="transparent"
          stroke="rgba(255, 255, 255, 0.1)"
          strokeWidth={strokeWidth}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="transparent"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-700 ease-out"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span
          className={`text-xl font-bold ${color.includes("pink") ? "text-pink-500" : color.includes("cyan") ? "text-cyan-400" : color.includes("purple") ? "text-purple-500" : "text-green-400"}`}
        >
          {value}%
        </span>
      </div>
    </div>
  );
};
