"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { DialogClose } from "@radix-ui/react-dialog";
import Link from "next/link";
import { FC, useState } from "react";

interface IConfirmValue {
  measure_uuid: string;
  confirmedValue: string;
  dataMedicao: string;
}

const ConfirmValue: FC<IConfirmValue> = ({
  measure_uuid,
  confirmedValue,
  dataMedicao,
}: IConfirmValue) => {
  const [valor, setValor] = useState(confirmedValue);
  const { toast } = useToast();

  const handleConfirm = async () => {
    const confirmed_value = parseInt(valor);
    try {
      console.log("fetching");
      const response = await fetch("http://localhost:3000/confirm", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ confirmed_value, measure_uuid }),
      });
      if (!response.ok) {
        toast({
          title: `Erro`,
          description: `Não foi possível confirmar.`,
        });
      }
    } catch (error) {
      toast({
        title: `Erro`,
        description: `${error}`,
      });
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-72 max-md:w-full mt-2">
          Confirmar valor
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] max-md:w-80 bg-black">
        <DialogHeader className="flex flex-col justify-center items-start">
          <DialogTitle>Confirmar Valor - {dataMedicao}</DialogTitle>
          <DialogDescription>Confirme o valor da sua medição</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Valor
            </Label>
            <Input
              onChange={(e) => setValor(e.target.value)}
              id="Valor"
              defaultValue={confirmedValue}
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <a href={"/medidas/minhas-medidas"}>
            <Button onClick={handleConfirm} variant={"outline"} type="submit">
              Confirmar
            </Button>
          </a>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ConfirmValue;
