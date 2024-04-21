import Image from "next/image";
import Woman from '../public/woman.jpg'
import HomePage from "./HomePage";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center py-[5%] px-[10%]">
      <HomePage />
    </main>
  );
}
