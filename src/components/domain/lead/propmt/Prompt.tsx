"use client";

import { useState } from "react";
import ModalOpenBtn from "@/components/common/ModalOpenBtn";
import SourceUploadModal from "./SourceUploadModal";

const Prompt = () => {
  const [madalOpen, setMadalOpen] = useState(false);
  const [sourceData, setSourceData] = useState<File | null>(null);

  return (
    <>
      {sourceData ? (
        <main className="flex h-[75vh] w-full text-neutral-100">
          <section className="w-1/4 bg-neutral-700 p-4">
            <h4>출처</h4>
          </section>
          <section className="w-3/4 bg-neutral-900 p-4">
            <h4>노트 추가</h4>
          </section>
        </main>
      ) : (
        <main className="flex flex-col items-end justify-start gap-4 p-4">
          <ModalOpenBtn
            onClick={() => setMadalOpen(true)}
            width="w-32"
            padding="py-2"
            color=""
            text="소스 추가"
          />
          <section className="flex h-32 w-1/5 flex-col items-center justify-between self-start rounded border border-solid border-neutral-300 bg-white p-4 drop-shadow">
            <h4 className="text-xl font-bold">인공지능 아바타 판매</h4>
            <p className="self-end">2024-00-00</p>
          </section>
          {madalOpen && (
            <SourceUploadModal
              setMadalOpen={setMadalOpen}
              setSourceData={setSourceData}
            />
          )}
        </main>
      )}
    </>
  );
};

export default Prompt;
