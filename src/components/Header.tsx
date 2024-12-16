import PEAK_LOGO from "@/assets/peak_logo_wt.png";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex h-[10vh] items-center justify-between bg-black px-4 text-white">
      <Link href="/">
        <Image src={PEAK_LOGO} alt="peak logo" width={100} />
      </Link>
      <Link href="/login">로그인</Link>
    </header>
  );
};

export default Header;
