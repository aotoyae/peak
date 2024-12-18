import Image from "next/image";
import Profile from "@/assets/profile.png";

const SarpaInfo = () => {
  return (
    <section className="w-full px-8">
      <h2 className="pb-4 font-bold">세르파</h2>
      <div className="flex items-center justify-between gap-10">
        <Image src={Profile} alt="프로필 이미지" className="h-24 w-24" />
        <ul className="grid-flow-rows grid w-full grid-cols-4 border border-solid border-zinc-600">
          <li className="flex h-10 items-center justify-center border-b border-solid border-zinc-600 bg-zinc-800">
            이름
          </li>
          <li className="flex items-center justify-center border-x border-b border-solid border-zinc-600">
            홍길동
          </li>
          <li className="flex items-center justify-center border-b border-r border-solid border-zinc-600 bg-zinc-800">
            역할
          </li>
          <li className="flex items-center justify-center border-b border-solid border-zinc-600">
            대표
          </li>
          <li className="flex h-10 items-center justify-center border-b border-solid border-zinc-600 bg-zinc-800">
            휴대폰
          </li>
          <li className="flex items-center justify-center border-x border-b border-solid border-zinc-600">
            010-1234-3893
          </li>
          <li className="flex items-center justify-center border-b border-r border-solid border-zinc-600 bg-zinc-800">
            이메일
          </li>
          <li className="flex items-center justify-center border-b border-solid border-zinc-600">
            abc@gmail.com
          </li>
          <li className="flex h-10 items-center justify-center border-b border-solid border-zinc-600 bg-zinc-800">
            전문 분야
          </li>
          <li className="col-span-3 flex items-center justify-center border-b border-l border-solid border-zinc-600">
            금융 산업, 데이터 분석
          </li>
          <li className="flex h-10 items-center justify-center bg-zinc-800">
            담당 리드
          </li>
          <li className="col-span-3 flex items-center justify-center border-l border-solid border-zinc-600">
            LG AI 챗봇 판매
          </li>
        </ul>
      </div>
    </section>
  );
};

export default SarpaInfo;
