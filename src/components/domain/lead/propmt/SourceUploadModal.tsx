"use client";

import { useState } from "react";
import ModalHeader from "./ModalHeader";
import ModalContents from "./ModalContents";

const SourceUploadModal = ({
  setMadalOpen,
  setSourceData,
}: {
  setMadalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setSourceData: React.Dispatch<React.SetStateAction<File | null>>;
}) => {
  const [dragActive, setDragActive] = useState(false);

  const handleDragStart = () => setDragActive(true);
  const handleDragEnd = () => setDragActive(false);
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();

    const file = e.dataTransfer.files[0];
    if (file) {
      setDragActive(false);
      setSourceData(file);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setSourceData(file);
  };

  return (
    <section className="fixed inset-0 flex items-center justify-center bg-neutral-950 bg-opacity-50">
      <div className="flex w-[50vw] flex-col gap-6 rounded-2xl bg-neutral-800 p-6">
        <ModalHeader setMadalOpen={setMadalOpen} />
        <div className="">
          <input
            type="file"
            id="source"
            accept=".pdf"
            onChange={handleChange}
            className="hidden"
          />
          <label
            htmlFor="source"
            onDragEnter={handleDragStart}
            onDragLeave={handleDragEnd}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            className={`flex h-full cursor-pointer flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-neutral-600 py-6 ${dragActive ? "bg-neutral-700" : "bg-neutral-900"}`}
          >
            <ModalContents />
          </label>
        </div>
      </div>
    </section>
  );
};

export default SourceUploadModal;
