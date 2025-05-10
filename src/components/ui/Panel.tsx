import { ColorTokens, colorUtils } from "@/tokens/colors";

type CyberpunkPanelProps = {
  children: React.ReactNode;
  color?: keyof (typeof ColorTokens)["cyberpunk"];
  clipPath?: string;
};

const CyberpunkPanel = ({
  children,
  color = "cyan",
  clipPath,
}: CyberpunkPanelProps) => {
  const borderColor = `border-${color}-400`;

  const backgroundColor = colorUtils.withOpacity(
    ColorTokens.base.background.secondary,
    0.5,
  );

  return (
    <div
      className={`border-2 ${borderColor} p-6 relative`}
      style={{
        backgroundColor,
        clipPath: clipPath,
      }}
    >
      <div
        className={`absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-${color}-400 opacity-60`}
      ></div>
      <div
        className={`absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-${color}-400 opacity-60`}
      ></div>

      {children}
    </div>
  );
};

export default CyberpunkPanel;
