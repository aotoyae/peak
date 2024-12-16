"use client";

import AnalysisForm from "@/components/domain/mypage/AnalysisForm";
import SarpaInfo from "@/components/domain/mypage/SarpaInfo";

const page = () => {
  return (
    <main className="w-full bg-white p-4">
      <h1 className="border-b-2 border-solid border-black text-2xl font-black">
        MY PAGE
      </h1>
      <div className="flex w-full flex-col items-center justify-center gap-8">
        <section className="w-full border-b border-solid border-neutral-300 p-8">
          <h2 className="pb-4 font-bold">기본 정보</h2>
          <ul className="grid h-10 grid-cols-4 border border-solid border-neutral-400">
            <li className="flex items-center justify-center border-r border-solid border-neutral-400 bg-neutral-200">
              회사명
            </li>
            <li className="flex items-center justify-center">
              선한인공지능연구소
            </li>
            <li className="flex items-center justify-center border-x border-solid border-neutral-400 bg-neutral-200">
              대표
            </li>
            <li className="flex items-center justify-center">홍길동</li>
          </ul>
        </section>
        <AnalysisForm />
        <SarpaInfo />
      </div>
    </main>
  );
};

export default page;
