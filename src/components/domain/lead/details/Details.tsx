import TabHeader from "../TabHeader";
import Memo from "./Memo";

const GPCT = [
  { id: "info", label: "Web" },
  { id: "finance", label: "재무" },
  { id: "title", label: "목표 (제품 & 서비스)" },
  { id: "plan", label: "계획" },
  { id: "challenge", label: "도전" },
  { id: "time", label: "시기" },
  { id: "budget", label: "예산" },
  { id: "arbiter", label: "결정권자" },
  { id: "etc", label: "기타" },
];

const Details = () => {
  return (
    <main className="grid grid-cols-2">
      <TabHeader firstTitle="GPCT C&I" secondTitle="메모" />
      <form className="flex flex-col gap-4 border-r border-solid border-zinc-600 p-4">
        <div className="flex flex-col gap-2">
          <p>0. 정보</p>
          {GPCT.map(
            (field, index) =>
              index < 2 && (
                <div key={field.id} className="flex items-center gap-2 pl-4">
                  <label htmlFor={field.id} className="w-1/12">
                    {field.label}
                  </label>
                  <input
                    type="text"
                    name={field.id}
                    id={field.id}
                    className="w-11/12 rounded-lg border border-solid border-zinc-600 bg-zinc-800 p-2"
                  />
                </div>
              ),
          )}
        </div>
        {GPCT.map(
          (field, index) =>
            index > 1 && (
              <div key={field.id} className="flex flex-col gap-2">
                <label htmlFor={field.id}>
                  {index - 1}. {field.label}
                </label>
                <input
                  type="text"
                  name={field.id}
                  id={field.id}
                  className="rounded-lg border border-solid border-zinc-600 bg-zinc-800 p-2"
                />
              </div>
            ),
        )}
        <button className="self-end rounded bg-zinc-700 px-10 py-2">
          저장하기
        </button>
      </form>
      <Memo />
    </main>
  );
};

export default Details;
