"use client";
import Header from "@/components/header";
import ConfirmValue from "./confirm-dialog";
import { useEffect, useState } from "react";
import { getMedidas } from "./getMedidas";
import { ChevronLeftIcon, LinkIcon, Trash2Icon } from "lucide-react";
import Link from "next/link";
import { ColorRing } from "react-loader-spinner";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

interface Medida {
  measure_uuid: string;
  measure_datetime: string;
  measure_type: string;
  measure_value: string;
  has_confirmed: boolean;
  image_url: string;
}

export default function MinhasMedidas() {
  const [medidas, setMedidas] = useState<any>();
  const [error, setError] = useState(false);
  const [filtro, setFiltro] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getMedidas().then((data) => {
      setMedidas(data);
    });
    if (!medidas?.measures) setIsLoading(false);
  }, []);

  const formatarData = (dataString: string) => {
    const data = new Date(dataString);

    const dia = String(data.getDate()).padStart(2, "0");
    const mes = String(data.getMonth() + 1).padStart(2, "0");
    const ano = data.getFullYear();

    return `${dia}/${mes}/${ano}`;
  };

  return (
    <div className="min-h-dvh">
      <Header />
      <div className="container px-36 py-10 max-md:px-6">
        <Link
          href="/medidas"
          className="flex gap-1 items-center text-neutral-600 py-0.5 w-fit pl-0.5 pr-1 rounded-md"
        >
          <ChevronLeftIcon size={16} /> Medidas
        </Link>
        <h2 className="text-2xl font-bold mt-4 mb-8">Histórico de Consumo</h2>
        <div className="py-1">Filtro:</div>
        <div className="flex mb-6 gap-5">
          <RadioGroup onValueChange={(e) => setFiltro(e)}>
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
          <button
            className="text-neutral-300 flex gap-1 items-center px-1.5 rounded-md hover:bg-neutral-900"
            type="button"
            onClick={(e) => setFiltro("")}
          >
            <Trash2Icon size={20} />
            Limpar filtro
          </button>
        </div>
        {medidas?.measures ? (
          <div
            className={`relative border-l-4 border-gray-300 max-md:w-80 ${
              medidas?.measures ? "" : "border-none"
            }`}
          >
            <div
              style={{ backgroundColor: "#0a0a0a" }}
              className="h-1.5 w-3 absolute z-10 -left-1"
            ></div>
            {medidas?.measures &&
              medidas?.measures.map((medida: Medida, index: any) =>
                filtro == "" ? (
                  <div key={index} className="mb-10 w-fit ml-6 max-md:mb-32">
                    <div className="absolute p-2 bg-black text-wrap text-white font-bold rounded-lg mt-1.5 -left-20 border-2 border-gray-500 max-md:-left-1.5">
                      {formatarData(medida?.measure_datetime)}
                    </div>
                    <div className="p-4 bg-black border-2 border-gray-500 rounded-lg shadow-md max-md:translate-y-14">
                      <h3 className="flex items-center justify-between gap-3 text-lg font-semibold">
                        <div>
                          Consumo: <br />
                          {medida?.measure_value}
                        </div>
                        <div className="text-sm flex justify-end p-1 w-full rounded-md">
                          {medida?.has_confirmed ? (
                            <div className="text-nowrap p-1.5 rounded-md bg-green-800">
                              CONFIRMADO
                            </div>
                          ) : (
                            <div className="text-nowrap max-md:text-wrap text-center p-1.5 rounded-md bg-slate-700">
                              NÃO CONFIRMADO
                            </div>
                          )}
                        </div>
                      </h3>
                      <p className="text-sm text-gray-500 mb-3">
                        {medida?.measure_type}
                      </p>
                      <img
                        className="rounded-md w-72"
                        src={`data:image;base64,${medida?.image_url}`}
                      />
                      {!medida.has_confirmed && (
                        <ConfirmValue
                          confirmedValue={medida.measure_value}
                          measure_uuid={medida.measure_uuid}
                          dataMedicao={formatarData(medida.measure_datetime)}
                        />
                      )}
                    </div>
                  </div>
                ) : (
                  medida.measure_type == filtro && (
                    <div key={index} className="mb-10 w-fit ml-6 max-md:mb-32">
                      <div className="absolute p-2 bg-black text-wrap text-white font-bold rounded-lg mt-1.5 -left-20 border-2 border-gray-500 max-md:-left-1.5">
                        {formatarData(medida?.measure_datetime)}
                      </div>
                      <div className="p-4 bg-black border-2 border-gray-500 rounded-lg shadow-md max-md:translate-y-14">
                        <h3 className="flex items-center justify-between gap-3 text-lg font-semibold">
                          <div>
                            Consumo: <br />
                            {medida?.measure_value}
                          </div>
                          <div className="text-sm flex justify-end p-1 w-full rounded-md">
                            {medida?.has_confirmed ? (
                              <div className="text-nowrap p-1.5 rounded-md bg-green-800">
                                CONFIRMADO
                              </div>
                            ) : (
                              <div className="text-nowrap max-md:text-wrap text-center p-1.5 rounded-md bg-slate-700">
                                NÃO CONFIRMADO
                              </div>
                            )}
                          </div>
                        </h3>
                        <p className="text-sm text-gray-500 mb-3">
                          {medida?.measure_type}
                        </p>
                        <img
                          className="rounded-md w-72"
                          src={`data:image;base64,${medida?.image_url}`}
                        />
                        {!medida.has_confirmed && (
                          <ConfirmValue
                            confirmedValue={medida.measure_value}
                            measure_uuid={medida.measure_uuid}
                            dataMedicao={formatarData(medida.measure_datetime)}
                          />
                        )}
                      </div>
                    </div>
                  )
                )
              )}
          </div>
        ) : (
          <div className="flex gap-2 items-center text-xl max-md:flex-col">
            Nenhuma medida encontrada
            <ColorRing
              visible={true}
              height="80"
              width="80"
              ariaLabel="color-ring-loading"
              wrapperStyle={{}}
              wrapperClass="color-ring-wrapper"
              colors={["#fff", "#fff", "#fff", "#fff", "#fff"]}
            />
          </div>
        )}
      </div>
    </div>
  );
}
