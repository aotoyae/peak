import TabHeader from "../TabHeader";
import HIAnalysis from "./HIAnalysis";

const Summary = () => {
  return (
    <main className="grid grid-cols-2">
      <TabHeader firstTitle="AI 분석" secondTitle="HI 분석" />
      <section className="flex flex-col items-end justify-between gap-4 border-r border-solid border-zinc-600 p-4">
        <button className="bg-pointColor1 rounded-full px-10 py-3 text-white">
          AI 분석 시작
        </button>
        <p className="h-full w-full rounded-2xl border border-solid border-zinc-600 bg-zinc-800 p-4"></p>
        <button className="rounded bg-zinc-700 px-10 py-2">저장하기</button>
      </section>
      <HIAnalysis />
    </main>
  );
};

export default Summary;
