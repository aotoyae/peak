const HIAnalysis = () => {
  return (
    <form className="flex h-[580px] flex-col items-end justify-center gap-4 p-4">
      <textarea
        className="h-full w-full rounded border border-solid border-neutral-300 bg-neutral-100 p-2"
        placeholder="메모 작성"
      ></textarea>
      <button className="rounded bg-neutral-300 px-10 py-2">저장하기</button>
    </form>
  );
};

export default HIAnalysis;
