// "use client";
// import { Button } from "@/components/ui/button";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Calendar as CalendarIcon } from "lucide-react";
// import { format } from "date-fns";
// import { cn } from "@/lib/utils";
// import { Calendar } from "@/components/ui/calendar";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";
// import { useState } from "react";
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
// import { useToast } from "@/hooks/use-toast";
// import { ToastAction } from "@/components/ui/toast";

// const FazerMedicao = () => {
//   const [date, setDate] = useState<Date>();
//   const [image, setImage] = useState("");
//   const [measureType, setMeasureType] = useState("WATER");
//   const { toast } = useToast();

//   const handleConfirm = () => {
//     console.log("testeeee");
//     toast({
//       title: "teste",
//       description: "testeasdas",
//       action: <ToastAction altText="Goto schedule to undo">Undo</ToastAction>,
//     });
//   };

//   return (
//     <Dialog>
//       <DialogTrigger asChild>
//         <Button
//           variant="ghost"
//           className="bg-white border-2 hover:bg-transparent hover:text-white text-black w-full"
//         >
//           Fazer medição
//         </Button>
//       </DialogTrigger>
//       <DialogContent className="sm:max-w-[425px] max-md:w-80 bg-black">
//         <DialogHeader className="flex flex-col justify-center items-start">
//           <DialogTitle>Fazer medição</DialogTitle>
//           <DialogDescription>
//             Adicione uma nova medição de consumo
//           </DialogDescription>
//         </DialogHeader>
//         <div className="grid gap-4 py-4">
//           <div className="flex flex-col items-center gap-4">
//             <Popover>
//               <PopoverTrigger asChild>
//                 <Button
//                   variant={"outline"}
//                   className={cn(
//                     "w-[280px] justify-start text-left font-normal",
//                     !date && "text-muted-foreground"
//                   )}
//                 >
//                   <CalendarIcon className="mr-2 h-4 w-4" />
//                   {date ? format(date, "PPP") : <span>Escolha a data</span>}
//                 </Button>
//               </PopoverTrigger>
//               <PopoverContent className="w-auto p-0">
//                 <Calendar
//                   mode="single"
//                   selected={date}
//                   onSelect={setDate}
//                   initialFocus
//                 />
//               </PopoverContent>
//             </Popover>
//             <Input
//               onChange={(e) => setImage(e.target.value)}
//               id="Valor"
//               placeholder="Image/base64"
//               // defaultValue={"confirmedValue"}
//               className="col-span-3 w-[280px]"
//             />
//             <div className="flex flex-col gap-3 items-start h-fit w-[280px]">
//               <div>Tipo de medida:</div>
//               <RadioGroup onChange={(value) => setMeasureType()}>
//                 <div className="flex items-center space-x-2">
//                   <RadioGroupItem
//                     className="border-2 border-white text-white"
//                     value="WATER"
//                     id="r1"
//                   />
//                   <Label htmlFor="r1">Water</Label>
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <RadioGroupItem
//                     className="border-2 border-white text-white"
//                     value="GAS"
//                     id="r2"
//                   />
//                   <Label htmlFor="r2">Gas</Label>
//                 </div>
//               </RadioGroup>
//             </div>
//           </div>
//         </div>
//         <DialogFooter>
//           <Button onClick={handleConfirm} variant={"outline"} type="submit">
//             Confirmar
//           </Button>
//         </DialogFooter>
//       </DialogContent>
//     </Dialog>
//   );
// };

// export default FazerMedicao;
