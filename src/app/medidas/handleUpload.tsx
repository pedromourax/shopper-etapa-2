"use server";
import { cookies } from "next/headers";

export const handleUpload = async (
  measure_datetime: Date,
  measure_type: string,
  image: any
) => {
  const customerCode = await cookies().get("customer_code");
  const customer_code = customerCode?.value || "";
  const response: any = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/upload`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        customer_code,
        measure_datetime,
        measure_type,
        image,
      }),
    }
  );
  return await response.json();
};
