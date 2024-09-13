export default function Header() {
  return (
    <div className="w-full flex justify-around items-center h-32 bg-gray-800">
      <img className="w-44 object-contain" src="shopper-logo.webp" />

      {/* <div className="text-2xl font-bold cursor-pointer hover:scale-105 transition-all">
        ENTRAR
      </div> */}

      <div className="text-2xl font-bold">
        Olá, <span className="italic text-gray-400">CT0012</span>
      </div>
    </div>
  );
}
