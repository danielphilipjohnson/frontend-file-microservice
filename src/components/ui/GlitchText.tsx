export const GlitchText = ({
  children,
  glitchIntensity = "low",
}: {
  children: React.ReactNode;
  glitchIntensity?: "low" | "medium" | "high";
}) => {
  const getGlitchClass = () => {
    switch (glitchIntensity) {
      case "high":
        return "animate-glitch-high";
      case "medium":
        return "animate-glitch-medium";
      default:
        return "animate-glitch-low";
    }
  };

  return <span className={`inline-block ${getGlitchClass()}`}>{children}</span>;
};
