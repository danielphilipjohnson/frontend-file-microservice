import { CircularProgress } from "@/components/ui/CircularProgress";
import { Clock, Cpu, HardDrive, Activity } from "lucide-react";

interface MetricsCardProps {
  type: "uptime" | "cpu" | "memory" | "requests";
  data: {
    uptime_seconds?: number;
    cpu_usage_percent?: number;
    memory_usage_mb?: number;
    total_memory_usage?: number;
    used_memory_usage?: number;
    total_requests?: number;
    requests_per_minute?: number;
  };
}

export default function MetricsCard({ type, data }: MetricsCardProps) {
  // Utility function to format uptime
  const formatUptime = (seconds: number) => {
    const days = Math.floor(seconds / 86400);
    const hours = Math.floor((seconds % 86400) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    return `${days}d ${hours}h ${minutes}m ${remainingSeconds}s`;
  };

  // Render different card types
  const renderCard = () => {
    switch (type) {
      case "uptime":
        return (
          <div
            className="border-2 border-cyan-400 bg-gray-900 bg-opacity-50 relative"
            style={{
              clipPath:
                "polygon(0 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%)",
            }}
          >
            <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-cyan-400 opacity-60"></div>
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-cyan-400 opacity-60"></div>

            <div className="p-6">
              <div className="flex items-center mb-4">
                <Clock className="w-5 h-5 text-cyan-400 mr-2" />
                <h2 className="text-lg text-cyan-400 font-bold uppercase">
                  Uptime
                </h2>
              </div>

              <div className="text-3xl font-bold text-white mb-2">
                {formatUptime(data.uptime_seconds || 0)}
              </div>

              <div className="text-xs text-gray-400">
                System running since:{" "}
                {new Date(
                  Date.now() - (data.uptime_seconds || 0) * 1000,
                ).toLocaleString()}
              </div>
            </div>
          </div>
        );

      case "cpu":
        return (
          <div
            className="border-2 border-pink-500 bg-gray-900 bg-opacity-50 relative"
            style={{
              clipPath: "polygon(15px 0, 100% 0, 100% 100%, 0 100%, 0 15px)",
            }}
          >
            <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-pink-500 opacity-60"></div>
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-pink-500 opacity-60"></div>

            <div className="p-6">
              <div className="flex items-center mb-4">
                <Cpu className="w-5 h-5 text-pink-500 mr-2" />
                <h2 className="text-lg text-pink-500 font-bold uppercase">
                  CPU Usage
                </h2>
              </div>

              <div className="flex items-center justify-center">
                <CircularProgress
                  value={Math.round(data.cpu_usage_percent || 0)}
                  color={
                    (data.cpu_usage_percent || 0) > 75
                      ? "#ef4444"
                      : (data.cpu_usage_percent || 0) > 50
                        ? "#f59e0b"
                        : "#ec4899"
                  }
                />
              </div>

              <div className="text-xs text-gray-400 text-center mt-2">
                {(data.cpu_usage_percent || 0) > 90 ? (
                  <span className="text-red-500">CRITICAL LOAD</span>
                ) : (data.cpu_usage_percent || 0) > 70 ? (
                  <span className="text-yellow-500">HIGH LOAD</span>
                ) : (
                  <span className="text-green-400">NORMAL OPERATION</span>
                )}
              </div>
            </div>
          </div>
        );

      case "memory":
        // Calculate memory percentage
        const memoryPercentage = data.total_memory_usage && data.used_memory_usage
          ? Math.round((data.used_memory_usage / data.total_memory_usage) * 100)
          : 0;

        return (
          <div
            className="border-2 border-purple-500 bg-gray-900 bg-opacity-50 relative"
            style={{
              clipPath:
                "polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 0 100%)",
            }}
          >
            <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-purple-500 opacity-60"></div>
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-purple-500 opacity-60"></div>

            <div className="p-6">
              <div className="flex items-center mb-4">
                <HardDrive className="w-5 h-5 text-purple-500 mr-2" />
                <h2 className="text-lg text-purple-500 font-bold uppercase">
                  Memory
                </h2>
              </div>

              <div className="flex items-center justify-center">
                <CircularProgress value={memoryPercentage} color="#a855f7" />
              </div>

              <div className="text-center mt-2">
                <div className="text-gray-300">
                  {data.used_memory_usage} MB used
                </div>
                <div className="text-xs text-gray-500">
                  of {data.total_memory_usage} MB allocated
                </div>
              </div>
            </div>
          </div>
        );

      case "requests":
        return (
          <div
            className="border-2 border-green-400 bg-gray-900 bg-opacity-50 relative"
            style={{
              clipPath:
                "polygon(0 0, 100% 0, 100% 100%, 15px 100%, 0 calc(100% - 15px))",
            }}
          >
            <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-green-400 opacity-60"></div>
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-green-400 opacity-60"></div>

            <div className="p-6">
              <div className="flex items-center mb-4">
                <Activity className="w-5 h-5 text-green-400 mr-2" />
                <h2 className="text-lg text-green-400 font-bold uppercase">
                  Requests
                </h2>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="text-sm text-gray-400 mb-1">
                    Total Requests
                  </div>
                  <div className="text-2xl font-bold text-white">
                    {(data.total_requests || 0).toLocaleString()}
                  </div>
                </div>

                <div>
                  <div className="text-sm text-gray-400 mb-1">
                    Requests Per Minute
                  </div>
                  <div className="text-2xl font-bold text-white">
                    {(data.requests_per_minute || 0).toFixed(2)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return renderCard();
}
