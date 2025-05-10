import {
  useDashboardMetrics,
  useDashboardHealth,
} from "@/features/dashboard/queries/dashboardQueries";

export const useDashboardData = () => {
  const metricsQuery = useDashboardMetrics();
  const healthQuery = useDashboardHealth();

  return {
    // Provide default metrics if no data
    metrics: metricsQuery.data ?? {
      uptime_seconds: 0,
      memory_usage_mb: 0,
      cpu_usage_percent: 0,
      total_requests: 0,
      requests_per_minute: 0,
    },

    // Provide default health if no data
    health: healthQuery.data ?? {
      status: "unknown",
      timestamp: 0,
    },

    // Combine loading states
    isLoading: metricsQuery.isLoading || healthQuery.isLoading,

    // Combine error states
    error: metricsQuery.error || healthQuery.error,

    // Refetch method for both queries
    refetch: () => {
      metricsQuery.refetch();
      healthQuery.refetch();
    },

    // Additional query metadata
    queries: {
      metrics: metricsQuery,
      health: healthQuery,
    },
  };
};

export const useDashboardOperations = () => {
  const { refetch } = useDashboardData();

  const handleManualRefresh = () => {
    refetch();
    // ! add some logging?
  };

  return {
    refresh: handleManualRefresh,
  };
};
