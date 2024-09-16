"use client";
import Cookies from "js-cookie";
import { cookies } from "next/headers";

import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const customerCode = Cookies.get("customer_code");
  const teste = cookies().get("customer_code");
  console.log(teste?.value);
  try {
    if (!teste?.value)
      return NextResponse.redirect(new URL("/login", request.url));
  } catch (error) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: "/medidas/:path*",
};
