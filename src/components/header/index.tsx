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

export default function Header() {
  return (
    <div className="w-full flex justify-between items-center py-2 px-36 font-biennale">
      <img className="w-24 object-contain invert" src="/eagle_logo.png" />
      <NavigationMenu>
        <NavigationMenuList className="gap-6">
          <NavigationMenuItem>
            <NavigationMenuTrigger>Minha Conta</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="p-3 flex flex-col gap-1 w-80">
                <Link
                  href={"/medidas"}
                  className="hover:bg-neutral-200 p-2 rounded-sm"
                >
                  <div className="font-bold">Minhas Medidas</div>
                  <div> Veja todas as suas medidas</div>
                </Link>
                <Link
                  href={"/medidas"}
                  className="hover:bg-neutral-200 p-2 rounded-sm"
                >
                  <div className="font-bold">Minhas Medidas</div>
                  <div> Veja todas as suas medidas</div>
                </Link>
                <Link
                  href={"/medidas"}
                  className="hover:bg-neutral-200 p-2 rounded-sm"
                >
                  <div className="font-bold">Minhas Medidas</div>
                  <div> Veja todas as suas medidas</div>
                </Link>
                <Button className="mt-2 bg-red-600 hover:bg-red-800 text-white">
                  {" "}
                  Sair{" "}
                </Button>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem className="flex gap-2">
            <CircleUserRound /> Olá, CT0012
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
