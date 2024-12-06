const page = () => {
  return (
    <main className="w-full">
      <section className="flex w-full flex-col items-center justify-center">
        <h2 className="py-4 font-bold">그린몰치과 인공지능 아바타 판매</h2>
        <ul className="grid h-10 w-full grid-cols-8 border-y border-solid border-neutral-400">
          <li className="flex items-center justify-center border-r border-solid border-neutral-400 bg-neutral-200">
            리드구분
          </li>
          <li className="flex items-center justify-center">기업</li>
          <li className="flex items-center justify-center border-x border-solid border-neutral-400 bg-neutral-200">
            리드명
          </li>
          <li className="flex items-center justify-center">LG / 김경헌 팀장</li>
          <li className="flex items-center justify-center border-x border-solid border-neutral-400 bg-neutral-200">
            담당 세르파
          </li>
          <li className="flex items-center justify-center">홍길동</li>
          <li className="flex items-center justify-center border-x border-solid border-neutral-400 bg-neutral-200">
            생성일
          </li>
          <li className="flex items-center justify-center">2024-10-10</li>
        </ul>
      </section>
    </main>
  );
};

export default page;
