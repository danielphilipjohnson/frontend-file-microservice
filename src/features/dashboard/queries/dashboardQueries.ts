import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/lib/api/client";
import { API_ROUTES } from "@/lib/api/routes";

export interface Metrics {
  uptime_seconds: number;
  memory_usage_mb: number;
  cpu_usage_percent: number;
  total_requests: number;
  requests_per_minute: number;
}

export interface Health {
  status: string;
  timestamp: number;
}

export const fetchMetrics = () =>
  apiClient.get<Metrics>(API_ROUTES.DASHBOARD.METRICS);

export const fetchHealth = () =>
  apiClient.get<Health>(API_ROUTES.DASHBOARD.HEALTH);

export const useDashboardMetrics = () =>
  useQuery<Metrics>({
    queryKey: ["dashboard", "metrics"],
    queryFn: fetchMetrics,
    // Refetch every 5 seconds
    refetchInterval: 60 * 500,
    // Retry twice on failure
    retry: 0,
  });

export const useDashboardHealth = () =>
  useQuery<Health>({
    queryKey: ["dashboard", "health"],
    queryFn: fetchHealth,
    refetchInterval: 60 * 500,
    retry: 0,
  });
