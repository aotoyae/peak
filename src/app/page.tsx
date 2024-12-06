import Header from "@/components/Header";
import Menu from "@/components/Menu";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="flex">
        <Menu />
        <section>
          <h1>peak</h1>
          <Link href="/lead">
            <button className="rounded border border-solid bg-gray-300 p-3">
              리드 아이템 페이지로
            </button>
          </Link>
        </section>
      </main>
    </div>
  );
}
