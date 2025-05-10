import { ColorTokens } from "@/tokens/colors";
import { Code, Cpu, Network, Shield } from "lucide-react";

export type CyberpunkColor = keyof (typeof ColorTokens)["cyberpunk"];

export const DataServices: Array<{
  title: string;
  description: string;
  icon: React.ReactNode;
  color: CyberpunkColor;
}> = [
  {
    title: "Secure File Processing",
    description:
      "Advanced encryption and secure handling of all uploaded documents.",
    icon: <Shield className="w-5 h-5" />,
    color: "cyan",
  },
  {
    title: "Format Conversion",
    description:
      "Seamless conversion between various file formats with data integrity.",
    icon: <Code className="w-5 h-5" />,
    color: "pink",
  },
  {
    title: "Neural Analysis",
    description:
      "AI-powered content analysis and data extraction capabilities.",
    icon: <Cpu className="w-5 h-5" />,
    color: "green",
  },
  {
    title: "NetSync Distribution",
    description: "Distribute processed files across secure network channels.",
    icon: <Network className="w-5 h-5" />,
    color: "red",
  },
];
