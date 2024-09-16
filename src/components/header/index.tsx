"use client";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { CircleUserRound } from "lucide-react";
import { Button } from "../ui/button";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Header() {
  const [customerCode, setCustomerCode] = useState("");
  const router = useRouter();

  useEffect(() => {
    const cookies = Cookies.get("customer_code");
    if (cookies) setCustomerCode(cookies);
  }, []);

  const handleSair = () => {
    Cookies.remove("customer_code");
  };

  return (
    <div className="w-full flex justify-between items-center py-4 px-36 font-biennale max-md:px-6">
      <Link href={"/"}>
        <img
          className="w-24 object-contain max-md:w-20"
          src="/shopper-logo.webp"
        />
      </Link>
      <NavigationMenu>
        <NavigationMenuList className="gap-6 max-md:gap-2">
          {customerCode ? (
            <div className="flex gap-6 max-md:gap-2 items-center">
              <NavigationMenuItem>
                <NavigationMenuTrigger>Minha Conta</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="p-3 flex flex-col gap-1 w-80 max-md:w-full">
                    <Link
                      href={"/medidas/minhas-medidas"}
                      className="hover:bg-neutral-200 p-2 rounded-sm"
                    >
                      <div className="font-bold">Minhas Medidas</div>
                      <div> Veja todas as suas medidas</div>
                    </Link>
                    <Link
                      href={"/medidas"}
                      className="hover:bg-neutral-200 p-2 rounded-sm"
                    >
                      <div className="font-bold">Fazer medidas</div>
                      <div> Faça uma nova medição </div>
                    </Link>
                    <Link
                      href={"/medidas/relatorio"}
                      className="hover:bg-neutral-200 p-2 rounded-sm"
                    >
                      <div className="font-bold"> Ver relatório </div>
                      <div> Veja um relatório de consumo</div>
                    </Link>
                    <a href="/">
                      <button
                        onClick={handleSair}
                        className="mt-2 w-full p-1 rounded-md bg-red-600 hover:bg-red-800 text-white"
                      >
                        Sair
                      </button>
                    </a>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem className="flex gap-2">
                <CircleUserRound />
                <div className="max-md:hidden">Olá, {customerCode}</div>
              </NavigationMenuItem>
            </div>
          ) : (
            <NavigationMenuItem className="flex gap-2">
              <CircleUserRound />

              <Link
                href={"/login"}
                className="relative font-bold cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-200 before:absolute before:bg-white before:origin-center before:h-[2px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-200 after:absolute after:bg-white after:origin-center after:h-[2px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]"
              >
                Entrar
              </Link>
            </NavigationMenuItem>
          )}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
