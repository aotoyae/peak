import Link from "next/link";

const page = () => {
  return (
    <main className="grid h-screen grid-cols-2">
      <section className="flex flex-col justify-between bg-black p-6 text-white">
        <Link href="/">
          <h1 className="text-4xl font-bold">peak</h1>
        </Link>
        <div className="flex flex-col gap-3">
          <p>"이곳에서 세상의 의미 있는 세일즈가 이루어지길."</p>
          <p>Meet for Deal</p>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center">
        <form className="flex flex-col items-center justify-center gap-4">
          <h2 className="pb-8 text-2xl font-black">PEAK</h2>
          <label className="block w-64 text-left">Email</label>
          <input
            type="text"
            placeholder="Enter your email..."
            className="w-64 rounded border border-solid border-gray-300 p-2"
          />
          <label className="block w-64 text-left">Password</label>
          <input
            type="password"
            placeholder="Enter your password..."
            className="w-64 rounded border border-solid border-gray-300 p-2"
          />
          <button className="w-64 rounded bg-gray-400 p-2 text-white">
            Continue with Email
          </button>
        </form>
        <p className="absolute bottom-6 right-6 text-sm text-gray-400">
          문의 안내 edu@goodai.kr
        </p>
      </section>
    </main>
  );
};

export default page;
