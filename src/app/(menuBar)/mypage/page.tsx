"use client";

import AnalysisForm from "@/components/domain/mypage/AnalysisForm";
import PartnerInfo from "@/components/domain/mypage/PartnerInfo";
import SarpaInfo from "@/components/domain/mypage/SarpaInfo";

const page = () => {
  return (
    <main className="w-full bg-zinc-900 p-4">
      <h1 className="border-b-2 border-solid border-zinc-600 text-2xl font-black">
        MY PAGE
      </h1>
      <div className="flex w-full flex-col items-center justify-center gap-8">
        <PartnerInfo />
        <AnalysisForm />
        <SarpaInfo />
      </div>
    </main>
  );
};

export default page;
