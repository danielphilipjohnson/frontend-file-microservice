
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

export const API_ROUTES = {
  DASHBOARD: {
    METRICS: `${API_BASE_URL}/api/metrics`,
    HEALTH: `${API_BASE_URL}/api/health`,
  },
};

export async function handleApiResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    console.log("response", response);
    const errorData = await response.json().catch(() => ({}));

    throw {
      status: response.status,
      message: errorData.message || "An unexpected error occurred",
      details: errorData,
    };
  }

  return response.json();
}
