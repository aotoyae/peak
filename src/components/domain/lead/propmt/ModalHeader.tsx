const ModalHeader = ({
  setMadalOpen,
}: {
  setMadalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col justify-between gap-2">
        <h2 className="text-3xl font-black text-neutral-300">소스 추가</h2>
        <p className="text-lg leading-normal text-neutral-400">
          소스를 추가하면 Peak 가 가장 중요한 정보에 따라 응답을 제공합니다.
          <br />
          (예: 주요 기술, 마케팅 계획, 연구 노트 등)
        </p>
      </div>
      <button
        onClick={() => {
          setMadalOpen(false);
        }}
        className="h-14 w-14 rounded-full bg-neutral-500 p-4 text-2xl font-black leading-7 text-neutral-300"
      >
        ✕
      </button>
    </div>
  );
};

export default ModalHeader;
