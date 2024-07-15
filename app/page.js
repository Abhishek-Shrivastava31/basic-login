import Left from "@/components/Left";
import Right from "@/components/Right";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#181818] text-white overflow-hidden max-md:overflow-auto flex">
      <Left />
      <Right />
    </main>
  );
}
