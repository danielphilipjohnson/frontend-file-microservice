"use client";
import DashboardHeader from "@/features/dashboard/components/DashboardHeader";
import ErrorPanel from "@/features/dashboard/components/ErrorPanel";
import LoadingIndicator from "@/features/dashboard/components/LoadingIndicator";
import MetricsCard from "@/features/dashboard/components/MetricsCard";
import SystemPanels from "@/features/dashboard/components/SystemPanels";
import { useDashboardData } from "@/features/dashboard/hooks/useDashboardData";
import { BackgroundGrid } from "@/components/ui/BackgroundGrid";
import Monitor from "@/features/services/components/Monitor";
export default function CyberpunkDashboard() {
  const { metrics, health, isLoading, error, refetch } = useDashboardData();

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 font-mono p-6 relative overflow-hidden">
      <BackgroundGrid />

      <div className="max-w-7xl mx-auto relative z-10">
        <DashboardHeader
          lastUpdated={new Date()}
          health={health}
          onRefresh={refetch}
        />

        {error && <ErrorPanel error={error.message} />}

        {isLoading ? (
          <LoadingIndicator />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <MetricsCard type="uptime" data={metrics} />
            <MetricsCard type="cpu" data={metrics} />
            <MetricsCard type="memory" data={metrics} />
            <MetricsCard type="requests" data={metrics} />
          </div>
        )}

        <SystemPanels metrics={metrics} health={health} loading={isLoading} />

        <Monitor />
      </div>
    </div>
  );
}
