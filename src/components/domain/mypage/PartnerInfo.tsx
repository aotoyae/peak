const PartnerInfo = () => {
  return (
    <section className="w-full border-b border-solid border-zinc-600 p-8">
      <h2 className="pb-4 font-bold">파트너 기본 정보</h2>
      <ul className="grid h-10 grid-cols-4 border border-solid border-zinc-500">
        <li className="flex items-center justify-center border-r border-solid border-zinc-500 bg-zinc-800">
          회사명
        </li>
        <li className="flex items-center justify-center">선한인공지능연구소</li>
        <li className="flex items-center justify-center border-x border-solid border-zinc-500 bg-zinc-800">
          대표
        </li>
        <li className="flex items-center justify-center">홍길동</li>
      </ul>
    </section>
  );
};

export default PartnerInfo;
