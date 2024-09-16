"use server";
import Cookies from "js-cookie";
import { cookies } from "next/headers";

export const getMedidas = async () => {
  const customerCode = cookies().get("customer_code");
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/${customerCode?.value}/list2`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return await response.json();
};
