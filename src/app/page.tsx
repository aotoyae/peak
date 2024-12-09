import Header from "@/components/Header";
import Menu from "@/components/Menu";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="flex">
        <Menu />
        <section className="w-full bg-white p-4">
          <h1 className="border-b-2 border-solid border-black text-2xl font-black">
            HOME
          </h1>
          <Link href="/lead">
            <button className="mt-4 rounded border border-solid bg-neutral-300 p-3">
              리드 아이템 페이지로
            </button>
          </Link>
        </section>
      </main>
    </div>
  );
}
