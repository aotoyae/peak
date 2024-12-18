const HIAnalysis = () => {
  return (
    <form className="flex h-[580px] flex-col items-end justify-center gap-4 p-4">
      <textarea
        className="h-full w-full rounded-2xl border border-solid border-zinc-600 bg-zinc-800 p-4"
        placeholder="메모 작성"
      ></textarea>
      <button className="rounded bg-zinc-700 px-10 py-2">저장하기</button>
    </form>
  );
};

export default HIAnalysis;
