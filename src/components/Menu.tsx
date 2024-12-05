import Link from 'next/link';

const Menu = () => {
  return (
    <nav className="bg-gray-400 p-5 pt-6">
      <ul className="flex flex-col gap-4 font-black items-center">
        <Link href="/">
          <li>HOME</li>
        </Link>
        <Link href="/mypage">
          <li>MYPAGE</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Menu;
