import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24 bg-black">
      <Button className="bg-zinc-500 text-white  border-x-2 border-red-200 hover:border-y-2 hover:border-x-0 hover:border-red-200 hover:bg-cyan-900">hi jagjeet</Button>
    </div>
  );
}
