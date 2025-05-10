import { ColorTokens } from "@/tokens/colors";

type StatusColorKey = keyof (typeof ColorTokens)["status"];
type CyberpunkColorKey = keyof (typeof ColorTokens)["cyberpunk"];

type StatusIndicatorProps = {
  status: string;
  color?: StatusColorKey | CyberpunkColorKey;
};

const StatusIndicator = ({ status, color = "info" }: StatusIndicatorProps) => {
  const getColorClasses = (colorKey: StatusColorKey | CyberpunkColorKey) => {
    if (Object.keys(ColorTokens.status).includes(colorKey)) {
      return `bg-${colorKey}-400 text-${colorKey}-400`;
    }
    if (Object.keys(ColorTokens.cyberpunk).includes(colorKey)) {
      return `bg-${colorKey}-400 text-${colorKey}-400`;
    }

    return "bg-cyan-400 text-cyan-400";
  };

  const colorStyle = getColorClasses(color);
  const [bgColor, textColor] = colorStyle.split(" ");

  return (
    <div className="flex items-center">
      <span
        className={`w-2 h-2 ${bgColor} rounded-full animate-pulse mr-1`}
        aria-hidden="true"
      ></span>
      <span className={textColor}>{status}</span>
    </div>
  );
};

export default StatusIndicator;
