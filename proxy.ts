import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(req: NextRequest) {
  return new NextResponse(
    "<h1 style='font-family:sans-serif;text-align:center;margin-top:20%'>Site temporarily paused</h1>",
    { headers: { "content-type": "text/html" } }
  );
}
