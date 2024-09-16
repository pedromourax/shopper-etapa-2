"use server";
import Cookies from "js-cookie";
import { cookies } from "next/headers";

export const handleConfirm = async (
  confirmed_value: number,
  measure_uuid: string
) => {
  const customerCode = cookies().get("customer_code");
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/confirm`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ confirmed_value, measure_uuid }),
    }
  );
  return await response.json();
};
