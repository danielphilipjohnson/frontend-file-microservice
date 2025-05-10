import { AlertTriangle } from "lucide-react";

interface ErrorPanelProps {
  error: string;
}

export default function ErrorPanel({ error }: ErrorPanelProps) {
  return (
    <div
      className="bg-red-900 bg-opacity-20 border-2 border-red-500 p-4 mb-8 text-red-500 flex items-start"
      style={{
        clipPath:
          "polygon(0 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%)",
      }}
    >
      <AlertTriangle className="w-5 h-5 mr-2 flex-shrink-0" />
      <div>
        <p className="font-bold mb-1">ERROR</p>
        <p>{error}</p>
      </div>
    </div>
  );
}
