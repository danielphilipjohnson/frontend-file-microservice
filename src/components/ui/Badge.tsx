import { ColorTokens } from "@/tokens/colors";

type CyberpunkBadgeProps = {
  text: string;
  position: "left" | "right";
  color?: keyof (typeof ColorTokens)["cyberpunk"];
};

const CyberpunkBadge = ({
  text,
  position,
  color = "cyan",
}: CyberpunkBadgeProps) => {
  const colorStyles = {
    bg: `bg-${color}-900`,
    border: `border-${color}-400`,
    text: `text-${color}-400`,
  };

  if (position === "left") {
    return (
      <div
        className={`${colorStyles.bg} bg-opacity-30 px-3 py-1 border-l-2 ${colorStyles.border} flex items-center`}
        style={{ clipPath: "polygon(0 0, 100% 0, 95% 100%, 0 100%)" }}
      >
        <div
          className={`w-2 h-2 ${colorStyles.border.replace("border", "bg")} mr-2`}
        ></div>
        <span className={`${colorStyles.text} font-mono text-xs`}>{text}</span>
      </div>
    );
  } else {
    return (
      <div
        className={`${colorStyles.bg} bg-opacity-20 px-3 py-1 border-r-2 ${colorStyles.border} ml-2`}
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 5% 100%)" }}
      >
        <span className={`${colorStyles.text} font-mono text-xs`}>{text}</span>
      </div>
    );
  }
};

export default CyberpunkBadge;
