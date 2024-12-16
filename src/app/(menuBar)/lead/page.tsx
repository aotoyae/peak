import Details from "@/components/domain/lead/details/Details";
import FollowUp from "@/components/domain/lead/follow-up/FollowUp";
import Prompt from "@/components/domain/lead/propmt/Prompt";
import Summary from "@/components/domain/lead/summary/Summary";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const page = () => {
  return (
    <main className="w-full bg-white">
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
      <Tabs defaultValue="prompt" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          {/* 리드 아이템 목록 */}
          <TabsTrigger value="prompt">프롬프트</TabsTrigger>
          {/* 회사 소개서에 따른 AI/HI 분석 */}
          <TabsTrigger value="summary">전</TabsTrigger>
          {/* 자세한 거래 정보 및 메모 */}
          <TabsTrigger value="details">중</TabsTrigger>
          {/* 거래 성사 정보 및 리마인드 */}
          <TabsTrigger value="follow-up">후</TabsTrigger>
        </TabsList>
        <TabsContent value="prompt">
          <Prompt />
        </TabsContent>
        <TabsContent value="summary">
          <Summary />
        </TabsContent>
        <TabsContent value="details">
          <Details />
        </TabsContent>
        <TabsContent value="follow-up">
          <FollowUp />
        </TabsContent>
      </Tabs>
    </main>
  );
};

export default page;
