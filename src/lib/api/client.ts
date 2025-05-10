// src/lib/api/client.ts
import { handleApiResponse } from "./routes";

// Interface for API request options
interface ApiRequestOptions extends RequestInit {
  headers?: Record<string, string>;
}


export const apiClient = {
  async get<T>(url: string, options: ApiRequestOptions = {}): Promise<T> {

    const defaultHeaders = {
      "Content-Type": "application/json",
    };

    const response = await fetch(url, {
      method: "GET",
      headers: {
        ...defaultHeaders,
        ...(options.headers || {}),
      },
      ...options,
    });

    return handleApiResponse<T>(response);
  },

  async post<T>(
    url: string,
    body: Record<string, unknown>,
    options: ApiRequestOptions = {},
  ): Promise<T> {

    const defaultHeaders = {
      "Content-Type": "application/json"
    };

    const response = await fetch(url, {
      method: "POST",
      headers: {
        ...defaultHeaders,
        ...(options.headers || {}),
      },
      body: JSON.stringify(body),
      ...options,
    });

    return handleApiResponse<T>(response);
  },

  async put<T>(
    url: string,
    body: Record<string, unknown>,
    options: ApiRequestOptions = {},
  ): Promise<T> {

    const defaultHeaders = {
      "Content-Type": "application/json"
    };

    const response = await fetch(url, {
      method: "PUT",
      headers: {
        ...defaultHeaders,
        ...(options.headers || {}),
      },
      body: JSON.stringify(body),
      ...options,
    });

    return handleApiResponse<T>(response);
  },

  async delete<T>(url: string, options: ApiRequestOptions = {}): Promise<T> {

    const defaultHeaders = {
      "Content-Type": "application/json"
    };

    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        ...defaultHeaders,
        ...(options.headers || {}),
      },
      ...options,
    });

    return handleApiResponse<T>(response);
  },

  async upload<T>(
    url: string,
    file: File,
    options: ApiRequestOptions = {},
  ): Promise<T> {

    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch(url, {
      method: "POST",
      headers: {
        ...(options.headers || {}),
      },
      body: formData,
      ...options,
    });

    return handleApiResponse<T>(response);
  },
};

export const createApiError = (
  error: Error | { message?: string; status?: number; details?: unknown },
) => {
  return {
    message: error.message || "An unexpected error occurred",
    status: "status" in error ? error.status : 500,
    details: "details" in error ? error.details : null,
  };
};
