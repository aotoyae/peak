import Link from "next/link";

const Header = () => {
  return (
    <header className="flex h-[10vh] items-center justify-between bg-black px-4 text-white">
      <Link href="/">
        <h1 className="text-2xl font-bold">peak</h1>
      </Link>
      <Link href="/login">로그인</Link>
    </header>
  );
};

export default Header;
