const ModalContents = () => {
  return (
    <>
      <h2 className="h-14 w-14 rounded-full bg-neutral-600 p-3.5 text-2xl font-black leading-6 text-neutral-400">
        ⇪
      </h2>
      <h3 className="text-xl font-bold text-neutral-300">소스 업로드</h3>
      <p className="leading-loose text-neutral-500">
        업로드할 파일을 선택하거나 드래그 앤 드롭하세요.
        <br />
        지원되는 파일 형식: PDF
      </p>
    </>
  );
};

export default ModalContents;
