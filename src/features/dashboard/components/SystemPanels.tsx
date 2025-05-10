import CyberpunkPanel from "@/components/ui/Panel";
import { Database, Shield, Activity, Zap } from "lucide-react";

interface SystemPanelsProps {
  metrics: {
    uptime_seconds: number;
    memory_usage_mb: number;
    cpu_usage_percent: number;
    total_requests: number;
    requests_per_minute: number;
  };
  health: {
    status: string;
    timestamp: number;
  };
  loading?: boolean;
}

export default function SystemPanels({
  metrics,
  health,
  loading = false,
}: SystemPanelsProps) {
  // Predefined log entries for consistent height and layout
  const defaultLogEntries = [
    {
      timestamp: new Date(),
      message: "System dashboard initialized",
      color: "cyan",
    },
    {
      timestamp: new Date(Date.now() - 5000),
      message: "Connected to metrics endpoint",
      color: "cyan",
    },
    {
      timestamp: new Date(Date.now() - 10000),
      message: "Health check pending",
      color: "cyan",
    },
    {
      timestamp: new Date(Date.now() - 30000),
      message: "Waiting for system data",
      color: "cyan",
    },
    {
      timestamp: new Date(Date.now() - 60000),
      message: "Initializing monitoring systems",
      color: "cyan",
    },
    {
      timestamp: new Date(Date.now() - 120000),
      message: "System startup sequence",
      color: "cyan",
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
      {/* Activity Log Panel */}
      <CyberpunkPanel
        color="cyan"
        clipPath="polygon(15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px)"
      >
        <div className="flex items-center mb-4">
          <Database className="w-5 h-5 text-cyan-400 mr-2" />
          <h2 className="text-lg text-cyan-400 font-bold uppercase">
            System Status
          </h2>
        </div>

        <div className="bg-black bg-opacity-50 p-4 border border-gray-800 font-mono text-sm text-green-400 h-64 overflow-auto">
          <div className="space-y-2">
            {loading ? (
              // Placeholder entries with reduced opacity
              defaultLogEntries.map((entry, index) => (
                <div key={index} className="opacity-30">
                  <span className="text-cyan-400">
                    [{entry.timestamp.toLocaleTimeString()}]
                  </span>{" "}
                  {entry.message}
                </div>
              ))
            ) : (
              <>
                <div>
                  <span className="text-cyan-400">
                    [{new Date().toLocaleTimeString()}]
                  </span>{" "}
                  System dashboard initialized
                </div>
                <div>
                  <span className="text-cyan-400">
                    [{new Date(Date.now() - 5000).toLocaleTimeString()}]
                  </span>{" "}
                  Connected to metrics endpoint
                </div>
                <div>
                  <span className="text-cyan-400">
                    [{new Date(Date.now() - 10000).toLocaleTimeString()}]
                  </span>{" "}
                  Health check - Status: {health.status || "unknown"}
                </div>
                <div>
                  <span className="text-cyan-400">
                    [{new Date(Date.now() - 30000).toLocaleTimeString()}]
                  </span>{" "}
                  Memory allocation stable at {metrics.memory_usage_mb} MB
                </div>
                <div>
                  <span className="text-cyan-400">
                    [{new Date(Date.now() - 60000).toLocaleTimeString()}]
                  </span>{" "}
                  CPU utilization: {Math.round(metrics.cpu_usage_percent)}%
                </div>
                <div>
                  <span className="text-cyan-400">
                    [{new Date(Date.now() - 120000).toLocaleTimeString()}]
                  </span>{" "}
                  Total request count: {metrics.total_requests}
                </div>
              </>
            )}
          </div>
        </div>
      </CyberpunkPanel>

      {/* Security Status Panel */}
      <CyberpunkPanel
        color="pink"
        clipPath="polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 15px 100%, 0 calc(100% - 15px))"
      >
        <div className="flex items-center mb-4">
          <Shield className="w-5 h-5 text-pink-500 mr-2" />
          <h2 className="text-lg text-pink-500 font-bold uppercase">
            Security Overview
          </h2>
        </div>

        <div
          className={`space-y-4 ${loading ? "opacity-30 pointer-events-none" : ""}`}
        >
          <div className="bg-gray-800 bg-opacity-50 p-4 border border-gray-700">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <Zap className="w-4 h-4 text-green-400 mr-2" />
                <span className="text-green-400">Rate Limiter</span>
              </div>
              <span className="text-xs border border-green-400 text-green-400 px-2 py-0.5">
                ACTIVE
              </span>
            </div>
            <p className="text-sm text-gray-400">
              Protection against excessive requests is enabled and functioning
              properly.
            </p>
          </div>

          <div className="bg-gray-800 bg-opacity-50 p-4 border border-gray-700">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <Shield className="w-4 h-4 text-green-400 mr-2" />
                <span className="text-green-400">File Upload Validation</span>
              </div>
              <span className="text-xs border border-green-400 text-green-400 px-2 py-0.5">
                ACTIVE
              </span>
            </div>
            <p className="text-sm text-gray-400">
              Strict content type and size validation for all uploaded files.
            </p>
          </div>

          <div className="bg-gray-800 bg-opacity-50 p-4 border border-gray-700">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <Activity className="w-4 h-4 text-green-400 mr-2" />
                <span className="text-green-400">System Monitoring</span>
              </div>
              <span className="text-xs border border-green-400 text-green-400 px-2 py-0.5">
                ACTIVE
              </span>
            </div>
            <p className="text-sm text-gray-400">
              Continuous monitoring of system health and performance metrics.
            </p>
          </div>

          <div className="mt-4 flex justify-between text-xs">
            <div className="text-gray-500">THREAT LEVEL:</div>
            <div className="text-green-400">LOW</div>
          </div>
        </div>
      </CyberpunkPanel>
    </div>
  );
}
