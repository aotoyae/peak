"use client";

import { FieldValues, useForm } from "react-hook-form";
import { collection, addDoc } from "firebase/firestore/lite";
import { db } from "@/shared/firebase";
// import firestore from "firebase/compat/firestore";

const AdminPage = () => {
  const usersCollection = collection(db, "users");
  const { register, handleSubmit, formState } = useForm({
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      password: "",
      phone: "",
      title: "",
      specialization: "",
      assigned_leads: "",
    },
  });

  const onSubmit = async (value: FieldValues) => {
    // const now = new Date().toISOString();
    const newUser = {
      ...value,
      role: "sherpa",
      // created_at: now,
      // updated_at: now,
    };
    try {
      const response = await fetch("http://127.0.0.1:8000/users/create-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }

      const data = await response.json();
      console.log("Response:", data);
    } catch (error) {
      console.log("Error:", error);
    }
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
                <label htmlFor="name" className="w-64 text-left">
                  Name
                </label>
                <input
                  {...register("name", {
                    required: {
                      value: true,
                      message: "필수 정보입니다.",
                    },
                    pattern: {
                      value: /^[가-힣a-zA-Z]{2,20}$/, // 2~20자, 한글, 영어만 허용
                      message: "2~20자의 한글이나 영어로 작성해 주세요.",
                    },
                  })}
                  type="text"
                  placeholder="이름"
                  className="w-64 rounded-lg bg-zinc-600 p-2"
                />
                {formState.errors.name && (
                  <span className="text-sm text-red-600">
                    {formState.errors.name.message}
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="w-64 text-left">
                  Email
                </label>
                <input
                  {...register("email", {
                    required: {
                      value: true,
                      message: "필수 정보입니다.",
                    },
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, // 사용자 이름: 대소문자, 숫자, 마침표, _%+- 포함 하나 이상 + 도메인 이름: 대소문자, 숫자, .- 포함 하나 이상 + TLD: 대소문자 2자 이상
                      message: "이메일 형식에 맞춰 작성해 주세요.",
                    },
                  })}
                  type="email"
                  placeholder="이메일"
                  className="w-64 rounded-lg bg-zinc-600 p-2"
                />
                {formState.errors.email && (
                  <span className="text-sm text-red-600">
                    {formState.errors.email.message}
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="password" className="w-64 text-left">
                  Password
                </label>
                <input
                  {...register("password", {
                    required: {
                      value: true,
                      message: "필수 정보입니다.",
                    },
                    pattern: {
                      value:
                        /^(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&_\-])[A-Za-z\d@$!%*?&_\-]{8,16}$/, // 8~16자, 소문자, 숫자, 특수문자 반드시 포함, 대문자는 선택적
                      message:
                        "8~16자의 대/소문자, 숫자, 특수문자로 작성해 주세요.",
                    },
                  })}
                  type="password"
                  placeholder="비밀번호"
                  className="w-64 rounded-lg bg-zinc-600 p-2"
                />

                {formState.errors.password && (
                  <span className="text-sm text-red-600">
                    {formState.errors.password.message}
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="w-64 text-left">
                  Phone Number
                </label>
                <input
                  {...register("phone", {
                    required: {
                      value: true,
                      message: "필수 정보입니다.",
                    },
                    pattern: {
                      value: /^01[016789]\d{7,8}$/,
                      message: "10~11자의 숫자만 작성해 주세요.",
                    },
                  })}
                  type="text"
                  placeholder="연락처"
                  className="w-64 rounded-lg bg-zinc-600 p-2"
                />
                {formState.errors.phone && (
                  <span className="text-sm text-red-600">
                    {formState.errors.phone.message}
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="title" className="w-64 text-left">
                  Title
                </label>
                <input
                  {...register("title", {
                    required: {
                      value: true,
                      message: "필수 정보입니다.",
                    },
                    pattern: {
                      value: /^[가-힣a-zA-Z\s,]{2,}$/,
                      message: "2자 이상의 한글이나 영어로 작성해 주세요.",
                    },
                  })}
                  type="text"
                  placeholder="직책"
                  className="w-64 rounded-lg bg-zinc-600 p-2"
                />

                {formState.errors.title && (
                  <span className="text-sm text-red-600">
                    {formState.errors.title.message}
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="specialization" className="w-64 text-left">
                  Specialization
                </label>
                <input
                  {...register("specialization", {
                    required: {
                      value: true,
                      message: "필수 정보입니다.",
                    },
                    pattern: {
                      value: /^[가-힣a-zA-Z\s,]{2,}$/,
                      message: "2자 이상의 한글이나 영어로 작성해 주세요.",
                    },
                  })}
                  type="text"
                  placeholder="전문 분야"
                  className="w-64 rounded-lg bg-zinc-600 p-2"
                />
                {formState.errors.specialization && (
                  <span className="text-sm text-red-600">
                    {formState.errors.specialization.message}
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="assigned_leads" className="w-64 text-left">
                  Assigned Leads
                </label>
                <input
                  {...register("assigned_leads", {
                    required: {
                      value: true,
                      message: "필수 정보입니다.",
                    },
                    pattern: {
                      value: /^[가-힣a-zA-Z\s,]{2,}$/,
                      message: "2자 이상의 한글이나 영어로 작성해 주세요.",
                    },
                  })}
                  type="text"
                  placeholder="담당 리드"
                  className="w-64 rounded-lg bg-zinc-600 p-2"
                />
                {formState.errors.assigned_leads && (
                  <span className="text-sm text-red-600">
                    {formState.errors.assigned_leads.message}
                  </span>
                )}
              </div>
            </div>
            <button
              disabled={!formState.isValid}
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

export default AdminPage;
