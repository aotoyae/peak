"use client";

import { FieldValues, useForm } from "react-hook-form";

const page = () => {
  const { register, handleSubmit, formState } = useForm();

  const onSubmit = (value: FieldValues) => {
    console.log(value);
  };

  return (
    <main className="w-full bg-zinc-900 p-4">
      <h1 className="border-b-2 border-solid border-zinc-600 text-2xl font-black text-zinc-200">
        ADMIN
      </h1>
      <div className="flex w-full flex-col items-center justify-center gap-8">
        <section className="w-full border-b border-solid border-zinc-600 p-8">
          <h2 className="pb-4 font-bold">세르파 회원 추가</h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-6"
          >
            <div className="grid grid-cols-4 gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="block w-64 text-left">
                  name
                </label>
                <input
                  {...register("name", {
                    required: true,
                    pattern: {
                      value: /^$/,
                      message: "invalid name",
                    },
                  })}
                  type="text"
                  placeholder="이름"
                  className="w-64 rounded-lg bg-zinc-600 p-2"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="block w-64 text-left">
                  email
                </label>
                <input
                  {...register("email", {
                    required: true,
                    pattern: {
                      value: /^$/,
                      message: "invalid email address",
                    },
                  })}
                  type="email"
                  placeholder="이메일"
                  className="w-64 rounded-lg bg-zinc-600 p-2"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="password" className="block w-64 text-left">
                  password
                </label>
                <input
                  {...register("password", {
                    required: true,
                    pattern: {
                      value: /^$/,
                      message: "invalid password",
                    },
                  })}
                  type="password"
                  placeholder="비밀번호"
                  className="w-64 rounded-lg bg-zinc-600 p-2"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="block w-64 text-left">
                  phone
                </label>
                <input
                  {...register("phone", {
                    required: true,
                    pattern: {
                      value: /^$/,
                      message: "invalid phone number",
                    },
                  })}
                  type="text"
                  placeholder="연락처"
                  className="w-64 rounded-lg bg-zinc-600 p-2"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="title" className="block w-64 text-left">
                  title
                </label>
                <input
                  {...register("title", {
                    required: true,
                    pattern: {
                      value: /^$/,
                      message: "invalid title",
                    },
                  })}
                  type="text"
                  placeholder="직책"
                  className="w-64 rounded-lg bg-zinc-600 p-2"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="specialization"
                  className="block w-64 text-left"
                >
                  specialization
                </label>
                <input
                  {...register("specialization", {
                    required: true,
                    pattern: {
                      value: /^$/,
                      message: "invalid specialization",
                    },
                  })}
                  type="text"
                  placeholder="전문 분야"
                  className="w-64 rounded-lg bg-zinc-600 p-2"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="assigned_leads"
                  className="block w-64 text-left"
                >
                  assigned_leads
                </label>
                <input
                  {...register("assigned_leads", {
                    required: true,
                    pattern: {
                      value: /^$/,
                      message: "invalid assigned_leads",
                    },
                  })}
                  type="text"
                  placeholder="담당 리드"
                  className="w-64 rounded-lg bg-zinc-600 p-2"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full self-end rounded-lg bg-zinc-700 p-4"
            >
              추가하기
            </button>
          </form>
        </section>
      </div>
    </main>
  );
};

export default page;
