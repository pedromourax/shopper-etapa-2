"use client";
// components/LineChart.tsx
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useEffect, useState } from "react";
import { getMedidas } from "../minhas-medidas/getMedidas";
import Header from "@/components/header";
import { ColorRing } from "react-loader-spinner";
import Link from "next/link";
import { ChevronLeftIcon } from "lucide-react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface Medida {
  measure_uuid: string;
  measure_datetime: string;
  measure_type: string;
  measure_value: string;
  has_confirmed: boolean;
  image_url: string;
}

interface Medidas {
  customer_code: string;
  measures: Medida[];
}

export default function LineChart() {
  const [chartData, setChartData] = useState<any>(null);

  const formatarData = (dataString: string) => {
    const data = new Date(dataString);

    const dia = String(data.getDate()).padStart(2, "0");
    const mes = String(data.getMonth() + 1).padStart(2, "0");
    const ano = data.getFullYear();

    return `${dia}/${mes}/${ano}`;
  };

  useEffect(() => {
    // Função para buscar os dados da API
    const fetchData = async () => {
      // Suponha que esta é a URL da API que retorna os dados com a interface Medidas
      const data: Medidas = await getMedidas();
      //   const data: Medidas = await response.json();

      // Extrair labels (datas) e valores das medidas
      let labels: any = [];
      let values: any = [];
      if (data.measures) {
        labels = data?.measures.map((medida) =>
          formatarData(medida.measure_datetime)
        );
        values = data?.measures.map((medida) =>
          parseFloat(medida.measure_value)
        );
      }

      // Configurar os dados do gráfico
      setChartData({
        labels: labels,
        datasets: [
          {
            label: "Valores das Medidas",
            data: values,
            borderColor: "rgba(75, 192, 192, 1)",
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderWidth: 2,
            fill: true,
          },
        ],
      });
    };

    fetchData();
  }, []);

  // Configurações do gráfico (opcional)
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Gráfico de Valores das Medidas",
      },
    },
  };

  return (
    <div className="h-dvh">
      <Header />
      <div className="px-36 max-md:px-6">
        <Link
          href="/medidas"
          className="flex  gap-1 items-center text-neutral-600 py-0.5 w-fit pl-0.5 pr-1 rounded-md"
        >
          <ChevronLeftIcon size={16} /> Medidas
        </Link>
      </div>
      <div className="w-full max-h-[400px] mt-12 flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mt-4 mb-8">Relatório de Consumo</h2>

        {chartData ? (
          <Line data={chartData} options={options} />
        ) : (
          //   <p>Carregando dados do gráfico...</p>
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="color-ring-loading"
            wrapperStyle={{}}
            wrapperClass="color-ring-wrapper"
            colors={["#fff", "#fff", "#fff", "#fff", "#fff"]}
          />
        )}
      </div>
    </div>
  );
}
