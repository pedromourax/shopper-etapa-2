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

export default function Medidas() {
  return (
    <div className="h-dvh">
      <Header />
      <div className="flex items-center justify-center gap-4 mt-12 px-36 w-full h-fit">
        <Card className="w-fit text-white bg-black">
          <CardHeader>
            <CardTitle>Medidas</CardTitle>
            <CardDescription>Veja todas as suas medidas.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col space-y-1.5">
              <Hourglass size={256} color="#fff" />
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button
              variant={"ghost"}
              className="bg-white border-2 hover:bg-transparent hover:text-white text-black w-full"
            >
              Ver medidas
            </Button>
          </CardFooter>
        </Card>

        <Card className="w-fit text-white bg-black">
          <CardHeader>
            <CardTitle>Fazer medição</CardTitle>
            <CardDescription>Adicione uma nova medição.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col space-y-1.5">
              <CirclePlus size={256} color="#fff" />
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button
              variant={"ghost"}
              className="bg-white border-2 hover:bg-transparent hover:text-white text-black w-full"
            >
              Fazer medição
            </Button>
          </CardFooter>
        </Card>

        <Card className="w-fit text-white bg-black">
          <CardHeader>
            <CardTitle>Relatório</CardTitle>
            <CardDescription>
              Veja um relatório de suas medidas.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col space-y-1.5">
              <FileChartColumn size={256} color="#fff" />
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button
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
