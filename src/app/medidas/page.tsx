"use client";
import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CirclePlus, FileChartColumn, Hourglass } from "lucide-react";
import { useRouter } from "next/navigation";
import FazerMedicao from "./fazerMedicao-dialog";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { useToast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";

export default function Medidas() {
  const router = useRouter();
  const toastMessage = Cookies.get("toastMessage");
  const toastStatus = Cookies.get("toastStatus");
  const { toast } = useToast();

  useEffect(() => {
    if (toastMessage) {
      if (toastStatus == "success") {
        toast({
          title: "✅ Sucesso",
          description: toastMessage,
        });
        Cookies.remove("toastMessage");
        Cookies.remove("toastStatus");
      } else if (toastStatus == "error") {
        toast({
          title: "❌ Erro",
          description: toastMessage,
        });
        Cookies.remove("toastMessage");
        Cookies.remove("toastStatus");
      }
    }
  }, []);

  const verMedidas = () => {
    router.push("/medidas/minhas-medidas");
  };

  const verRelatorio = () => {
    router.push("/medidas/relatorio");
  };

  return (
    <div className="h-dvh">
      <Header />
      <Toaster />
      <div className="flex items-center justify-center gap-4 mt-12 px-36 w-full h-fit max-md:px-6 max-md:flex-col max-md:pb-12">
        <Card className="w-fit text-white bg-black max-md:w-full">
          <CardHeader>
            <CardTitle>Medidas</CardTitle>
            <CardDescription>Veja todas as suas medidas.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center">
              <Hourglass size={256} color="#fff" />
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button
              onClick={verMedidas}
              variant={"ghost"}
              className="bg-white border-2 hover:bg-transparent hover:text-white text-black w-full"
            >
              Ver medidas
            </Button>
          </CardFooter>
        </Card>

        <Card className="w-fit text-white bg-black max-md:w-full">
          <CardHeader>
            <CardTitle>Fazer medição</CardTitle>
            <CardDescription>Adicione uma nova medição.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center">
              <CirclePlus size={256} color="#fff" />
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <FazerMedicao />
          </CardFooter>
        </Card>

        <Card className="w-fit text-white bg-black max-md:w-full">
          <CardHeader>
            <CardTitle>Relatório</CardTitle>
            <CardDescription>
              Veja um relatório de suas medidas.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center">
              <FileChartColumn size={256} color="#fff" />
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button
              onClick={verRelatorio}
              variant={"ghost"}
              className="bg-white border-2 hover:bg-transparent hover:text-white text-black w-full"
            >
              Ver relatório
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
