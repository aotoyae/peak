import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Details from "@/components/domain/lead/details/Details";
import FollowUp from "@/components/domain/lead/follow-up/FollowUp";
import LeadHeader from "@/components/domain/lead/LeadHeader";
import Prompt from "@/components/domain/lead/propmt/Prompt";
import Summary from "@/components/domain/lead/summary/Summary";

const page = () => {
  return (
    <main className="w-full bg-zinc-900">
      <LeadHeader />
      <Tabs defaultValue="prompt" className="w-full">
        <TabsList className="grid w-full grid-cols-4 bg-zinc-700 text-zinc-300">
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
