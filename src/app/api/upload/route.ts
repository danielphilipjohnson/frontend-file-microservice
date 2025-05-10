import { NextRequest, NextResponse } from "next/server";

const RUST_API_URL = process.env.RUST_API_URL ?? "http://localhost:3001";

export async function POST(req: NextRequest) {
  try {
    const body = await req.formData();
    const form = new FormData();
    const file = body.get("upfile");

    if (!file || !(file instanceof File)) {
      return NextResponse.json(
        { message: "No file uploaded" },
        { status: 400 },
      );
    }

    form.append("upfile", file);

    const rustResponse = await fetch(`${RUST_API_URL}/upload`, {
      method: "POST",
      body: form,
    });

    const result = await rustResponse.json();

    return NextResponse.json(result, { status: rustResponse.status });
  } catch (error) {
    console.error("Proxy upload error:", error);
    return NextResponse.json(
      {
        message: "Proxy upload failed",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}
