import Image from 'next/image';
import Profile from '../../../assets/profile.png';

const page = () => {
  return (
    <main className="m-4 w-full">
      <h1 className="font-black text-2xl border-solid border-b-2 border-black">
        MY PAGE
      </h1>
      <div className="flex flex-col justify-center items-center gap-8 w-full">
        <section className="border-b border-solid border-gray-300 p-8 w-full">
          <h2 className="font-bold pb-4">기본 정보</h2>
          <ul className="grid grid-cols-4 border border-solid border-gray-400 h-10">
            <li className="bg-gray-200 border-r border-solid border-gray-400 flex justify-center items-center">
              회사명
            </li>
            <li className="flex justify-center items-center">
              선한인공지능연구소
            </li>
            <li className="bg-gray-200 border-x border-solid border-gray-400 flex justify-center items-center">
              대표
            </li>
            <li className="flex justify-center items-center">홍길동</li>
          </ul>
        </section>
        <section className="border-b border-solid border-gray-300 pb-8 px-8 w-full flex flex-col gap-4">
          <h2 className="font-bold">AI 분석을 위한 정보</h2>
          <p>마이페이지에 입력한 정보를 기반으로 잠재 고객을 추천합니다.</p>
          <form className="flex justify-center items-center bg-gray-100 py-4 gap-6 rounded">
            <label className="font-black">회사 소개서</label>
            <input
              type="file"
              placeholder="회사소개서를 업로드해 주세요."
              className="border border-solid border-gray-400 rounded p-2"
            />
            <button className="bg-gray-400 text-white p-3 w-32 rounded">
              Upload
            </button>
          </form>
          <h2 className="font-bold">분석</h2>
          <div className="bg-gray-200 rounded h-64"></div>
        </section>
        <section className="w-full px-8">
          <h2 className="font-bold pb-4">세르파</h2>
          <div className="flex justify-between items-center gap-10">
            <Image src={Profile} alt="프로필 이미지" className="w-24 h-24" />
            <ul className="grid grid-cols-4 grid-flow-rows border border-solid border-gray-400 w-full">
              <li className="border-b border-solid border-gray-400 bg-gray-200 flex justify-center items-center h-10">
                이름
              </li>
              <li className="border-b border-x border-solid border-gray-400 flex justify-center items-center">
                홍길동
              </li>
              <li className="border-b border-r border-solid border-gray-400 bg-gray-200 flex justify-center items-center">
                역할
              </li>
              <li className="border-b border-solid border-gray-400 flex justify-center items-center">
                대표
              </li>
              <li className="border-b border-solid border-gray-400 bg-gray-200 flex justify-center items-center h-10">
                휴대폰
              </li>
              <li className="border-b border-x border-solid border-gray-400 flex justify-center items-center">
                010-1234-3893
              </li>
              <li className="border-b border-r border-solid border-gray-400 bg-gray-200 flex justify-center items-center">
                이메일
              </li>
              <li className="border-b border-solid border-gray-400 flex justify-center items-center">
                abc@gmail.com
              </li>
              <li className="border-b border-solid border-gray-400 bg-gray-200 flex justify-center items-center h-10">
                전문 분야
              </li>
              <li className="col-span-3 border-b border-l border-solid border-gray-400 flex justify-center items-center">
                금융 산업, 데이터 분석
              </li>
              <li className="bg-gray-200 flex justify-center items-center h-10">
                담당 리드
              </li>
              <li className="col-span-3 border-l border-solid border-gray-400 flex justify-center items-center">
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
