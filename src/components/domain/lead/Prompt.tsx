"use client";

import { useState } from "react";

const Prompt = () => {
  const [madalOpen, setMadalOpen] = useState(false);

  return (
    <main className="flex flex-col items-end justify-start gap-4 p-4">
      <button
        onClick={() => setMadalOpen(true)}
        className="rounded bg-neutral-300 px-10 py-2"
      >
        소스 추가
      </button>
      <section className="flex h-32 w-1/5 flex-col items-center justify-between self-start rounded border border-solid border-neutral-300 bg-white p-4 drop-shadow">
        <h4 className="text-xl font-bold">인공지능 아바타 판매</h4>
        <p className="self-end">2024-00-00</p>
      </section>
      {madalOpen && (
        <section className="fixed inset-0 flex items-center justify-center bg-neutral-950 bg-opacity-50">
          <div className="flex w-[50vw] flex-col gap-6 rounded-2xl bg-neutral-800 p-6">
            <div className="flex justify-between">
              <div className="flex flex-col justify-between gap-2">
                <h2 className="text-3xl font-black text-neutral-300">
                  소스 추가
                </h2>
                <p className="text-lg leading-normal text-neutral-400">
                  소스를 추가하면 Peak 가 가장 중요한 정보에 따라 응답을
                  제공합니다.
                  <br />
                  (예: 주요 기술, 마케팅 계획, 연구 노트 등)
                </p>
              </div>
              <button
                onClick={() => {
                  setMadalOpen(false);
                }}
                className="h-14 w-14 rounded-full bg-neutral-500 p-4 text-2xl font-black leading-7 text-neutral-300"
              >
                ✕
              </button>
            </div>
            <div className="rounded-2xl border border-dashed border-neutral-600 bg-neutral-900">
              <input
                type="file"
                id="source"
                onChange={(e) => {
                  e.preventDefault();
                }}
                className="hidden"
              />
              <label
                htmlFor="source"
                className="flex h-full cursor-pointer flex-col items-center justify-center gap-3 py-6"
              >
                <h2 className="h-14 w-14 rounded-full bg-neutral-600 p-3.5 text-2xl font-black leading-6 text-neutral-400">
                  ⇪
                </h2>
                <h3 className="text-xl font-bold text-neutral-300">
                  소스 업로드
                </h3>
                <p className="leading-loose text-neutral-500">
                  업로드할 파일을 선택하거나 드래그 앤 드롭하세요.
                  <br />
                  지원되는 파일 형식: PDF, .txt, Markdown, 오디오(예: mp3)
                </p>
              </label>
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

export default Prompt;
