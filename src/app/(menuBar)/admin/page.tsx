const page = () => {
  return (
    <main className="w-full bg-zinc-900 p-4">
      <h1 className="border-b-2 border-solid border-zinc-600 text-2xl font-black text-zinc-200">
        ADMIN
      </h1>
      <div className="flex w-full flex-col items-center justify-center gap-8">
        <section className="w-full border-b border-solid border-zinc-600 p-8">
          <h2 className="pb-4 font-bold">세르파 회원 추가</h2>
          <form className="flex flex-col gap-6">
            <div className="grid grid-cols-4 gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="block w-64 text-left">
                  name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-64 rounded-lg bg-zinc-600 p-2"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="block w-64 text-left">
                  email
                </label>
                <input
                  type="text"
                  id="email"
                  className="w-64 rounded-lg bg-zinc-600 p-2"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="password" className="block w-64 text-left">
                  password
                </label>
                <input
                  type="text"
                  id="password"
                  className="w-64 rounded-lg bg-zinc-600 p-2"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="block w-64 text-left">
                  phone
                </label>
                <input
                  type="text"
                  id="phone"
                  className="w-64 rounded-lg bg-zinc-600 p-2"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="role" className="block w-64 text-left">
                  role
                </label>
                <input
                  type="text"
                  id="role"
                  className="w-64 rounded-lg bg-zinc-600 p-2"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="title" className="block w-64 text-left">
                  title
                </label>
                <input
                  type="text"
                  id="title"
                  className="w-64 rounded-lg bg-zinc-600 p-2"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="specialization"
                  className="block w-64 text-left"
                >
                  specialization
                </label>
                <input
                  type="text"
                  id="specialization"
                  className="w-64 rounded-lg bg-zinc-600 p-2"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="assigned_leads"
                  className="block w-64 text-left"
                >
                  assigned_leads
                </label>
                <input
                  type="text"
                  id="assigned_leads"
                  className="w-64 rounded-lg bg-zinc-600 p-2"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full self-end rounded-lg bg-zinc-700 p-4"
            >
              추가하기
            </button>
          </form>
        </section>
      </div>
    </main>
  );
};

export default page;
