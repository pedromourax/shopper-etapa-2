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
import { Calendar as CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useEffect, useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { ColorRing } from "react-loader-spinner";
import { handleUpload } from "./handleUpload";

const FazerMedicao = () => {
  const [date, setDate] = useState<Date>();
  const [image, setImage] = useState("");
  const [measureType, setMeasureType] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const customer_code = Cookies.get("customer_code");

  useEffect(() => {
    router.refresh();
  }, []);

  const handleUploadButton = async () => {
    try {
      setIsLoading(true);

      if (image == "" || !date || measureType == "") {
        Cookies.set("toastStatus", "error");
        return Cookies.set("toastMessage", "Preencha os campos corretamente");
      }
      const response = await handleUpload(date, measureType, image);
      if (!response.ok) {
        if (response.error_code == "INVALID_DATA") {
          Cookies.set("toastStatus", "error");
          return Cookies.set(
            "toastMessage",
            "Os dados fornecidos no corpo da requisição são inválidos"
          );
        }
        if (response.error_code == "DOUBLE_REPORT") {
          Cookies.set("toastStatus", "error");
          return Cookies.set(
            "toastMessage",
            "Já existe uma leitura para este tipo no mês atual"
          );
        }
      }

      Cookies.set("toastStatus", "success");
      Cookies.set("toastMessage", "Medição adicionada com sucesso!");

      return router.push("/medidas");
    } catch (error: any) {
      Cookies.set("toastStatus", "error");
      Cookies.set("toastMessage", "Erro interno do servidor");
    } finally {
      setIsOpen(false);
      setIsLoading(false);
      router.push("/medidas");
      window.location.reload();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          className="bg-white border-2 hover:bg-transparent hover:text-white text-black w-full"
        >
          Fazer medição
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] max-md:w-80 bg-black">
        <DialogHeader className="flex flex-col justify-center items-start">
          <DialogTitle>Fazer medição</DialogTitle>
          <DialogDescription>
            Adicione uma nova medição de consumo
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex flex-col items-center gap-4">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-[280px] justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Escolha a data</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
            <Input
              onChange={(e) => setImage(e.target.value)}
              id="Valor"
              placeholder="Image/base64"
              className="col-span-3 w-[280px]"
            />
            <div className="flex flex-col gap-3 items-start h-fit w-[280px]">
              <div>Tipo de medida:</div>
              <RadioGroup onValueChange={(e) => setMeasureType(e)}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    className="border-2 border-white text-white"
                    value="WATER"
                    id="r1"
                  />
                  <Label htmlFor="r1">Water</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    className="border-2 border-white text-white"
                    value="GAS"
                    id="r2"
                  />
                  <Label htmlFor="r2">Gas</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button
            onClick={handleUploadButton}
            className="w-24"
            variant={"outline"}
            type="submit"
          >
            {!isLoading && "Confirmar"}
            {isLoading && (
              <div>
                <ColorRing
                  visible={true}
                  height="24"
                  width="24"
                  ariaLabel="color-ring-loading"
                  wrapperStyle={{}}
                  wrapperClass="color-ring-wrapper"
                  colors={["#000", "#000", "#000", "#000", "#000"]}
                />
              </div>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default FazerMedicao;
