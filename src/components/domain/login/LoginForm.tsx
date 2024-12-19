"use client";

import FormBtn from "@/components/common/FormBtn";

const LoginForm = () => {
  const handleLogin = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("login");
  };

  return (
    <form className="flex flex-col items-center justify-center gap-4">
      <h2 className="pb-8 text-2xl font-black">PEAK</h2>
      <label className="block w-64 text-left">Email</label>
      <input
        type="text"
        placeholder="Enter your email..."
        className="w-64 rounded-lg bg-zinc-600 p-2"
      />
      <label className="block w-64 text-left">Password</label>
      <input
        type="password"
        placeholder="Enter your password..."
        className="w-64 rounded-lg bg-zinc-600 p-2"
      />
      <FormBtn
        onClick={handleLogin}
        width="w-64"
        padding="px-2 py-3"
        color="bg-peak-600"
        text="Continue with Email"
      />
    </form>
  );
};

export default LoginForm;
