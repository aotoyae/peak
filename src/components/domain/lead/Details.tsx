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
      <h3 className="border-y border-r border-solid border-neutral-400 py-4 text-center text-lg font-bold">
        GPCT C&I
      </h3>
      <h3 className="border-y border-solid border-neutral-400 py-4 text-center text-lg font-bold">
        메모
      </h3>
      <form className="flex flex-col gap-4 border-r border-solid border-neutral-400 p-4">
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
                    className="w-11/12 rounded border border-solid border-neutral-300 p-2"
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
                  className="rounded border border-solid border-neutral-300 p-2"
                />
              </div>
            ),
        )}
        <button className="self-end rounded bg-neutral-300 px-10 py-2">
          저장하기
        </button>
      </form>
      <section></section>
    </main>
  );
};

export default Details;
