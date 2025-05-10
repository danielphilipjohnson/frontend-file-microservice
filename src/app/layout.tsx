import type { Metadata } from "next";
import "./globals.css";
import QueryProvider from "@/lib/react-query/QueryProvider";
import CyberpunkLayout from "@/components/layout/layout";

export const metadata: Metadata = {
  title: "Cyberpunk Dashboard",
  description: "System monitoring and metrics dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <QueryProvider>
          <CyberpunkLayout>{children}</CyberpunkLayout>
        </QueryProvider>
      </body>
    </html>
  );
}
