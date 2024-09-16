"use server";
import Cookies from "js-cookie";
import { cookies } from "next/headers";

export const getMedidas = async () => {
  const customerCode = cookies().get("customer_code");

  const response = await fetch(
    `http://localhost:3000/${customerCode?.value}/list2`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return await response.json();
};
