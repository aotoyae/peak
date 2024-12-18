import PEAK_LOGO from "@/assets/peak_logo_wt.png";
import LoginForm from "@/components/domain/login/LoginForm";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <main className="grid h-screen grid-cols-2">
      <section className="flex flex-col justify-between bg-black p-6">
        <Link href="/">
          <Image src={PEAK_LOGO} alt="peak logo" width={100} />
        </Link>
        <div className="flex flex-col gap-3">
          <p>&ldquo;이곳에서 세상의 의미 있는 세일즈가 이루어지길.&rdquo;</p>
          <p>Meet for Deal</p>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center">
        <LoginForm />
        <p className="absolute bottom-6 right-6 text-sm text-zinc-500">
          문의 안내 edu@goodai.kr
        </p>
      </section>
    </main>
  );
};

export default page;
