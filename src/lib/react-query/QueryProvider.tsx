"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useState } from "react";

export function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        // How long the data is considered fresh
        staleTime: 5000,
        // How long inactive data remains in cache
        gcTime: 1000 * 60 * 5, // 5 minutes
        // Retry failed requests
        retry: 2,
        refetchOnWindowFocus: false,
      },
    },
  });
}

export default function QueryProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [queryClient] = useState(() => makeQueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
