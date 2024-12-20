import dynamic from "next/dynamic";

const Editor = dynamic(() => import("./Editor"), { ssr: false });

const Memo = () => {
  return (
    <form className="flex flex-col items-end gap-4 p-4">
      <Editor />
      {/* <textarea
        className="w-full h-32 p-4 border border-solid rounded-2xl border-zinc-600 bg-zinc-800"
        placeholder="메모 작성"
      ></textarea> */}
      <button className="rounded bg-zinc-700 px-10 py-2">저장하기</button>
    </form>
  );
};

export default Memo;
