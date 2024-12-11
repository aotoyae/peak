"use client";

import Header from "@/components/Header";
import Menu from "@/components/Menu";
import Link from "next/link";
import { useState } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";

type Item = {
  id: string;
  content: string;
  stateId: string;
};

const LEAD_ITEMS: Item[] = [
  { id: "1", content: "First task", stateId: "leadGen" },
  { id: "2", content: "Second task", stateId: "leadGen" },
  { id: "3", content: "Third task", stateId: "leadGen" },
];

const LEAD_STATES = [
  {
    id: "leadGen",
    name: "Lead Gen",
    info: "제안 전",
  },
  { id: "proposal", name: "Proposal", info: "제안 중" },
  { id: "negotiation", name: "Negotiation", info: "협상 중" },
  { id: "closed", name: "Closed", info: "제안 완료" },
  { id: "lost", name: "Lost", info: "제안 취소" },
];

export default function Home() {
  const [leadItems, setItems] = useState(LEAD_ITEMS);

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const reorderedItems = Array.from(leadItems);
    const [removed] = reorderedItems.splice(result.source.index, 1);
    reorderedItems.splice(result.destination.index, 0, removed);

    setItems(reorderedItems);
  };

  return (
    <div>
      <Header />
      <main className="flex">
        <Menu />
        <section className="w-full p-4 bg-white">
          <h1 className="text-2xl font-black border-b-2 border-black border-solid">
            HOME
          </h1>
          <div className="flex justify-between p-4 bg-neutral-100">
            <DragDropContext onDragEnd={onDragEnd}>
              {LEAD_STATES.map((state) => (
                <div
                  key={state.id}
                  className="bg-white border border-solid rounded border-neutral-300"
                >
                  <div className="p-4">
                    <h2 className="text-lg font-bold">{state.name}</h2>
                    <p className="text-sm text-neutral-500">{state.info}</p>
                  </div>
                  <Droppable droppableId={state.id}>
                    {(provided) => (
                      <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        className="border border-red-500 border-solid rounded"
                      >
                        {leadItems
                          .filter((item) => item.stateId === state.id)
                          .map((item, index) => (
                            <Draggable
                              key={item.id}
                              draggableId={item.id}
                              index={index}
                            >
                              {(provided, snapshot) => (
                                <div
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  className={`m-2 rounded border bg-white p-4 ${
                                    snapshot.isDragging
                                      ? "border-blue-500 bg-blue-100"
                                      : ""
                                  }`}
                                >
                                  {item.content}
                                </div>
                              )}
                            </Draggable>
                          ))}
                        {provided.placeholder}
                      </div>
                    )}
                  </Droppable>
                </div>
              ))}
            </DragDropContext>
          </div>
          {/* <Link href="/lead">
            <button className="p-3 mt-4 border border-solid rounded bg-neutral-300">
              리드 아이템 페이지로
            </button>
          </Link> */}
        </section>
      </main>
    </div>
  );
}
