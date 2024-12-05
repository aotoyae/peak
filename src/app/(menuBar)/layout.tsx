import Header from '@/components/Header';
import Menu from '@/components/Menu';

export default function MenuLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main className="flex justify-between">
        <Menu />
        {children}
      </main>
    </>
  );
}
