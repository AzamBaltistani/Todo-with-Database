import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex justify-center items-center">
      <Link href={"/sendtodo"} className="bg-blue-500 border p-4">
        Open App
      </Link>
    </main>
  );
}
