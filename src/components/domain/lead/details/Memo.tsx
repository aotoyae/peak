const Memo = () => {
  return (
    <form className="flex flex-col items-end justify-between gap-4 p-4">
      <textarea
        className="h-32 w-full rounded border border-solid border-neutral-300 bg-neutral-100 p-2"
        placeholder="메모 작성"
      ></textarea>
      <button className="rounded bg-neutral-300 px-10 py-2">저장하기</button>
    </form>
  );
};

export default Memo;
