const Prompt = () => {
  return (
    <main className="flex flex-col items-end justify-start gap-4 p-4">
      <button className="rounded bg-neutral-300 px-10 py-2">소스 추가</button>
      <section className="flex h-32 w-1/5 flex-col items-center justify-between self-start rounded border border-solid border-neutral-300 bg-white p-4 drop-shadow">
        <h4 className="text-xl font-bold">인공지능 아바타 판매</h4>
        <p className="self-end">2024-00-00</p>
      </section>
    </main>
  );
};

export default Prompt;
