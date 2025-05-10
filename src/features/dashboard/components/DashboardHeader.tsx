import { GlitchText } from "@/components/ui/GlitchText";
import { Server, RefreshCw } from "lucide-react";

interface DashboardHeaderProps {
  lastUpdated: Date | null;
  health: {
    status: string;
    timestamp: number;
  };
  onRefresh: () => void;
}

export default function DashboardHeader({
  lastUpdated,
  health,
  onRefresh,
}: DashboardHeaderProps) {
  return (
    <header className="mb-10">
      <div className="flex flex-wrap items-center mb-4">
        {/* System Monitor Badge */}
        <div
          className="bg-cyan-900 bg-opacity-30 px-3 py-1 border-l-2 border-cyan-400 flex items-center"
          style={{ clipPath: "polygon(0 0, 100% 0, 95% 100%, 0 100%)" }}
        >
          <div className="w-2 h-2 bg-cyan-400 mr-2"></div>
          <span className="text-cyan-400 font-mono text-xs">
            SYSTEM.MONITOR
          </span>
        </div>

        {/* Version Badge */}
        <div
          className="bg-cyan-900 bg-opacity-20 px-3 py-1 border-r-2 border-cyan-400 ml-2"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 5% 100%)" }}
        >
          <span className="text-cyan-400 font-mono text-xs">v2.4.7</span>
        </div>

        {/* Refresh Button */}
        <div className="ml-auto flex items-center">
          <button
            onClick={onRefresh}
            className="flex items-center text-cyan-400 bg-gray-800 px-3 py-1 border border-cyan-900 hover:bg-cyan-900 hover:bg-opacity-20 transition-colors"
            style={{
              clipPath:
                "polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)",
            }}
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            <span>REFRESH</span>
          </button>
        </div>
      </div>

      {/* Main Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-cyan-400 uppercase tracking-wider flex items-center">
        <Server className="mr-3 h-8 w-8" />
        <GlitchText>System Dashboard</GlitchText>
      </h1>

      {/* Status Information */}
      <div className="flex items-center mt-2 text-sm">
        <p className="text-gray-400">
          <span className="text-cyan-400">Last updated:</span>{" "}
          {lastUpdated ? lastUpdated.toLocaleTimeString() : "Never"}
        </p>
        <div className="ml-4 flex items-center">
          <div
            className={`w-2 h-2 rounded-full mr-1 ${health.status === "healthy" ? "bg-green-400 animate-pulse" : "bg-red-500"}`}
          ></div>
          <span
            className={
              health.status === "healthy" ? "text-green-400" : "text-red-500"
            }
          >
            STATUS: {health.status?.toUpperCase() || "UNKNOWN"}
          </span>
        </div>
      </div>
    </header>
  );
}
