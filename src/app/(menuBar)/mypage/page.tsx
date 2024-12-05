import Image from "next/image";
import Profile from "../../../assets/profile.png";

const page = () => {
  return (
    <main className="m-4 w-full">
      <h1 className="border-b-2 border-solid border-black text-2xl font-black">
        MY PAGE
      </h1>
      <div className="flex w-full flex-col items-center justify-center gap-8">
        <section className="w-full border-b border-solid border-gray-300 p-8">
          <h2 className="pb-4 font-bold">기본 정보</h2>
          <ul className="grid h-10 grid-cols-4 border border-solid border-gray-400">
            <li className="flex items-center justify-center border-r border-solid border-gray-400 bg-gray-200">
              회사명
            </li>
            <li className="flex items-center justify-center">
              선한인공지능연구소
            </li>
            <li className="flex items-center justify-center border-x border-solid border-gray-400 bg-gray-200">
              대표
            </li>
            <li className="flex items-center justify-center">홍길동</li>
          </ul>
        </section>
        <section className="flex w-full flex-col gap-4 border-b border-solid border-gray-300 px-8 pb-8">
          <h2 className="font-bold">AI 분석을 위한 정보</h2>
          <p>마이페이지에 입력한 정보를 기반으로 잠재 고객을 추천합니다.</p>
          <form className="flex items-center justify-center gap-6 rounded bg-gray-100 py-4">
            <label className="font-black">회사 소개서</label>
            <input
              type="file"
              placeholder="회사소개서를 업로드해 주세요."
              className="rounded border border-solid border-gray-400 p-2"
            />
            <button className="w-32 rounded bg-gray-400 p-3 text-white">
              Upload
            </button>
          </form>
          <h2 className="font-bold">분석</h2>
          <div className="h-64 rounded bg-gray-200"></div>
        </section>
        <section className="w-full px-8">
          <h2 className="pb-4 font-bold">세르파</h2>
          <div className="flex items-center justify-between gap-10">
            <Image src={Profile} alt="프로필 이미지" className="h-24 w-24" />
            <ul className="grid-flow-rows grid w-full grid-cols-4 border border-solid border-gray-400">
              <li className="flex h-10 items-center justify-center border-b border-solid border-gray-400 bg-gray-200">
                이름
              </li>
              <li className="flex items-center justify-center border-x border-b border-solid border-gray-400">
                홍길동
              </li>
              <li className="flex items-center justify-center border-b border-r border-solid border-gray-400 bg-gray-200">
                역할
              </li>
              <li className="flex items-center justify-center border-b border-solid border-gray-400">
                대표
              </li>
              <li className="flex h-10 items-center justify-center border-b border-solid border-gray-400 bg-gray-200">
                휴대폰
              </li>
              <li className="flex items-center justify-center border-x border-b border-solid border-gray-400">
                010-1234-3893
              </li>
              <li className="flex items-center justify-center border-b border-r border-solid border-gray-400 bg-gray-200">
                이메일
              </li>
              <li className="flex items-center justify-center border-b border-solid border-gray-400">
                abc@gmail.com
              </li>
              <li className="flex h-10 items-center justify-center border-b border-solid border-gray-400 bg-gray-200">
                전문 분야
              </li>
              <li className="col-span-3 flex items-center justify-center border-b border-l border-solid border-gray-400">
                금융 산업, 데이터 분석
              </li>
              <li className="flex h-10 items-center justify-center bg-gray-200">
                담당 리드
              </li>
              <li className="col-span-3 flex items-center justify-center border-l border-solid border-gray-400">
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
