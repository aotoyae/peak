import dynamic from "next/dynamic";

const Editor = dynamic(() => import("./Editor"), { ssr: false });

const HIAnalysis = () => {
  return (
    <form className="flex h-[70vh] flex-col items-end justify-center gap-4 p-4">
      <Editor />
      <button className="mt-12 rounded bg-zinc-700 px-10 py-2">저장하기</button>
    </form>
  );
};

export default HIAnalysis;
