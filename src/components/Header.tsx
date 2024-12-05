import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-black text-white flex justify-between p-4 items-center">
      <Link href="/">
        <h1 className="font-bold text-2xl">peak</h1>
      </Link>
      <Link href="/login">로그인</Link>
    </header>
  );
};

export default Header;
