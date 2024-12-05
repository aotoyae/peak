import Link from 'next/link';

const page = () => {
  return (
    <main className="grid grid-cols-2 h-screen">
      <section className="bg-black text-white flex flex-col justify-between p-6">
        <Link href="/">
          <h1 className="font-bold text-4xl">peak</h1>
        </Link>
        <div className="flex flex-col gap-3">
          <p>"이곳에서 세상의 의미 있는 세일즈가 이루어지길."</p>
          <p>Meet for Deal</p>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center">
        <form className="flex flex-col items-center justify-center gap-4">
          <h2 className="font-black text-2xl pb-8">PEAK</h2>
          <label className="block w-64 text-left">Email</label>
          <input
            type="text"
            placeholder="Enter your email..."
            className="border border-solid border-gray-300 rounded p-2 w-64"
          />
          <label className="block w-64 text-left">Password</label>
          <input
            type="password"
            placeholder="Enter your password..."
            className="border border-solid border-gray-300 rounded p-2 w-64"
          />
          <button className="bg-gray-400 text-white p-2 rounded w-64">
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
