import FormBtn from "@/components/common/FormBtn";

const AnalysisForm = () => {
  const handleUpload = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("Upload");
  };

  return (
    <section className="flex w-full flex-col gap-4 border-b border-solid border-neutral-300 px-8 pb-8">
      <h2 className="font-bold">AI 분석을 위한 정보</h2>
      <p>마이페이지에 입력한 정보를 기반으로 잠재 고객을 추천합니다.</p>
      <form className="flex items-center justify-center gap-6 rounded bg-neutral-100 py-4">
        <label className="font-black">회사 소개서</label>
        <input
          type="file"
          placeholder="회사소개서를 업로드해 주세요."
          className="rounded border border-solid border-neutral-400 p-2"
        />
        <FormBtn
          onClick={handleUpload}
          width="w-32"
          padding="p-3"
          color="text-white"
          text="Upload"
        />
      </form>
      <h2 className="font-bold">분석</h2>
      <div className="h-64 rounded bg-neutral-200"></div>
    </section>
  );
};

export default AnalysisForm;
