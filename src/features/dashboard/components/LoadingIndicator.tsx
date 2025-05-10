import { RefreshCw } from "lucide-react";

interface LoadingIndicatorProps {
  message?: string;
}

export default function LoadingIndicator({
  message = "Loading system data...",
}: LoadingIndicatorProps) {
  return (
    <div className="flex items-center justify-center py-20">
      <RefreshCw className="w-10 h-10 text-cyan-400 animate-spin" />
      <span className="ml-4 text-xl text-cyan-400">{message}</span>
    </div>
  );
}
