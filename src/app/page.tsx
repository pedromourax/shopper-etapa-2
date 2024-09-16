import Header from "@/components/header";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-dvh flex flex-col">
      <Header />
      <div className="flex flex-col items-center justify-center mt-28 h-fit w-full ">
        <p className="text-6xl max-md:text-3xl font-semibold text-center font-biennale">
          Monitore seu consumo <br /> mensal facilmente
        </p>
        <p className="mt-4 font-biennale text-lg max-md:text-sm max-md text-wrap max-md:px-6 text-center text-neutral-400">
          Acompanhe o seu consumo para identificar padrões e oportunidades de
          <br />
          economia. Basta enviar uma foto do medidor para o nosso sistema.
        </p>
      </div>
      <div className="mt-8 flex gap-5 items-center justify-center w-full h-fit">
        <Link
          href={"/login"}
          className="rounded-full py-3 px-6 border-2 border-white hover:shadow-white transition-all home-page-buttons"
        >
          Login
        </Link>
        <Link
          href={"/medidas"}
          className="rounded-full py-3 px-6 border-2 bg-white text-black home-page-buttons transition-all  font-semibold"
        >
          Comece já
        </Link>
      </div>
      <div className="w-full flex items-center justify-center mt-6">
        <img src="medidor.png" style={{ width: 290 }} className="opacity-60" />
      </div>
    </div>
  );
}
