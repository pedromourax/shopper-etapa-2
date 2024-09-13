import Header from "@/components/header";
import Login from "@/components/login";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-dvh flex flex-col">
      <Header />
      <Login />
    </div>
  );
}
