import TabHeader from "../TabHeader";

const Summary = () => {
  return (
    <main className="grid grid-cols-2">
      <TabHeader firstTitle="AI 분석" secondTitle="HI 분석" />
      <section className="flex flex-col items-end justify-between gap-4 border-r border-solid border-neutral-400 p-4">
        <button className="rounded-full bg-neutral-500 px-10 py-3 text-white">
          AI 분석 시작
        </button>
        <p className="h-full w-full rounded border border-solid border-neutral-300 bg-neutral-100 p-2"></p>
        <button className="rounded bg-neutral-300 px-10 py-2">저장하기</button>
      </section>
      <form className="flex h-[580px] flex-col items-end justify-center gap-4 p-4">
        <textarea
          className="h-full w-full rounded border border-solid border-neutral-300 bg-neutral-100 p-2"
          placeholder="메모 작성"
        ></textarea>
        <button className="rounded bg-neutral-300 px-10 py-2">저장하기</button>
      </form>
    </main>
  );
};

export default Summary;
