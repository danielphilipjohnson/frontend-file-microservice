import { NextResponse } from "next/server";

const RUST_API_URL = process.env.RUST_API_URL;

export async function GET() {
  try {
    const res = await fetch(`${RUST_API_URL}/health`);
    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch (error) {
    return NextResponse.json(
      {
        status: "unhealthy",
        message: "Health check failed",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}
