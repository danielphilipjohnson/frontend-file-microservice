import { NextResponse } from "next/server";

const RUST_API_URL = process.env.RUST_API_URL ?? "http://localhost:3001";


export async function GET() {
  try {
    const res = await fetch(`${RUST_API_URL}/metrics`);
    const data = await res.json();
    console.log("data metric", data);
    return NextResponse.json(data, { status: res.status });
  } catch (error) {
    return NextResponse.json(
      {
        message: "Metrics fetch failed",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}
