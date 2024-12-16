"use client";

import Image from "next/image";
import Profile from "../../../assets/profile.png";
import AnalysisForm from "@/components/domain/mypage/\bAnalysisForm";

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
        <section className="w-full px-8">
          <h2 className="pb-4 font-bold">세르파</h2>
          <div className="flex items-center justify-between gap-10">
            <Image src={Profile} alt="프로필 이미지" className="h-24 w-24" />
            <ul className="grid-flow-rows grid w-full grid-cols-4 border border-solid border-neutral-400">
              <li className="flex h-10 items-center justify-center border-b border-solid border-neutral-400 bg-neutral-200">
                이름
              </li>
              <li className="flex items-center justify-center border-x border-b border-solid border-neutral-400">
                홍길동
              </li>
              <li className="flex items-center justify-center border-b border-r border-solid border-neutral-400 bg-neutral-200">
                역할
              </li>
              <li className="flex items-center justify-center border-b border-solid border-neutral-400">
                대표
              </li>
              <li className="flex h-10 items-center justify-center border-b border-solid border-neutral-400 bg-neutral-200">
                휴대폰
              </li>
              <li className="flex items-center justify-center border-x border-b border-solid border-neutral-400">
                010-1234-3893
              </li>
              <li className="flex items-center justify-center border-b border-r border-solid border-neutral-400 bg-neutral-200">
                이메일
              </li>
              <li className="flex items-center justify-center border-b border-solid border-neutral-400">
                abc@gmail.com
              </li>
              <li className="flex h-10 items-center justify-center border-b border-solid border-neutral-400 bg-neutral-200">
                전문 분야
              </li>
              <li className="col-span-3 flex items-center justify-center border-b border-l border-solid border-neutral-400">
                금융 산업, 데이터 분석
              </li>
              <li className="flex h-10 items-center justify-center bg-neutral-200">
                담당 리드
              </li>
              <li className="col-span-3 flex items-center justify-center border-l border-solid border-neutral-400">
                LG AI 챗봇 판매
              </li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
};

export default page;
