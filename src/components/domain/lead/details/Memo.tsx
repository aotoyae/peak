import dynamic from "next/dynamic";

const Editor = dynamic(() => import("./Editor"), { ssr: false });

const Memo = () => {
  return (
    <form className="flex flex-col items-end gap-4 p-4">
      <Editor />
    </form>
  );
};

export default Memo;
