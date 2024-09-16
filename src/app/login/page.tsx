"use client";
import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CircleUserRound, UserRound } from "lucide-react";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { NextResponse } from "next/server";

export default function Login() {
  const [customerCode, setCustomerCode] = useState("");
  const [error, setError] = useState(false);
  const router = useRouter();

  useEffect(() => {
    router.refresh();
  }, []);

  const handleLogin = () => {
    router.replace("/login");
    if (customerCode == "") return setError(true);
    Cookies.set("customer_code", customerCode);
    router.push("/medidas");
  };

  return (
    <div>
      <Header />
      <div className="mt-12 w-full flex items-center justify-center">
        <div className="">
          <CircleUserRound size={256} />
          <p className="mt-5">Olá usuário, digite o seu código:</p>
          <Input
            onChange={(e) => setCustomerCode(e.target.value)}
            className="mt-2"
            type="text"
            placeholder="Digite o seu código"
          />
          <button
            onClick={handleLogin}
            className="w-full mt-2 rounded-md p-1 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground"
          >
            Entrar
          </button>
          {error && <div>DEU ERROOOOOO</div>}
        </div>
      </div>
    </div>
  );
}
