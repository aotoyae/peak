import Header from '@/components/Header';
import Menu from '@/components/Menu';

export default function Home() {
  return (
    <div>
      <Header />
      <main className="flex">
        <Menu />
        <section>
          <h1>peak</h1>
        </section>
      </main>
    </div>
  );
}
