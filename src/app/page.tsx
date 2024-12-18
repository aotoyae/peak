"use client";

import Header from "@/components/Header";
import Menu from "@/components/Menu";
import { LEAD_ITEM_STATUS, LeadKey, LeadTitle } from "@/types/lead";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";

const LEAD_ITEMS = {
  leadGen: [
    { id: "1", title: "치과", status: "leadGen" },
    { id: "2", title: "정형외과", status: "leadGen" },
    { id: "3", title: "내과", status: "leadGen" },
    { id: "4", title: "한의원", status: "leadGen" },
  ],
  proposal: [{ id: "5", title: "산부인과", status: "proposal" }],
  negotiation: [],
  closed: [],
  lost: [],
};

const COLUMN_TITLES: Record<LeadKey, LeadTitle> = {
  leadGen: {
    name: "Lead Gen",
    info: "제안 전",
  },
  proposal: {
    name: "Proposal",
    info: "제안 중",
  },
  negotiation: {
    name: "Negotiation",
    info: "협상 중",
  },
  closed: {
    name: "Closed",
    info: "계약 완료",
  },
  lost: {
    name: "Lost",
    info: "계약 취소",
  },
};

export default function Home() {
  const [enabled, setEnabled] = useState(false);
  const [leadItems, setLeadItems] = useState(LEAD_ITEMS);

  const onDragEnd = ({ source, destination }: DropResult) => {
    if (!destination) return;

    const scourceKey = source.droppableId as LEAD_ITEM_STATUS;
    const destinationKey = destination.droppableId as LEAD_ITEM_STATUS;

    const _items = JSON.parse(JSON.stringify(leadItems)) as typeof leadItems;
    const [targetItem] = _items[scourceKey].splice(source.index, 1);
    _items[destinationKey].splice(destination.index, 0, targetItem);
    setLeadItems(_items);
  };

  useEffect(() => {
    const animation = requestAnimationFrame(() => setEnabled(true));

    return () => {
      cancelAnimationFrame(animation);
      setEnabled(false);
    };
  }, []);

  if (!enabled) {
    return null;
  }

  return (
    <div>
      <Header />
      <main className="flex bg-zinc-900">
        <Menu />
        <section className="w-full p-4">
          <h1 className="border-b-2 border-solid border-zinc-700 text-2xl font-black">
            HOME
          </h1>
          <div className="flex justify-between gap-4 py-4">
            <DragDropContext onDragEnd={onDragEnd}>
              {Object.keys(leadItems).map((key) => (
                <div key={key} className="w-1/5">
                  <Droppable droppableId={key}>
                    {(provided, snapshot) => (
                      <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        className={`h-full rounded-2xl border border-solid border-zinc-700 bg-zinc-800 p-2 shadow-md ${snapshot.isDraggingOver && "shadow-lg"}`}
                      >
                        <div className="p-4">
                          <h2 className="text-lg font-bold">
                            {COLUMN_TITLES[key as LeadKey].name}
                          </h2>
                          <p className="text-sm text-zinc-400">
                            {COLUMN_TITLES[key as LeadKey].info}
                          </p>
                        </div>
                        {leadItems[key as LEAD_ITEM_STATUS].map(
                          (item, index) => (
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
                                  className={`mx-1 my-4 rounded-2xl bg-zinc-900 p-4 shadow-md ${
                                    snapshot.isDragging && "bg-zinc-300"
                                  }`}
                                >
                                  {item.title}
                                </div>
                              )}
                            </Draggable>
                          ),
                        )}
                        {provided.placeholder}
                      </div>
                    )}
                  </Droppable>
                </div>
              ))}
            </DragDropContext>
          </div>
          <Link href="/lead">
            <button className="rounded-2xl bg-zinc-800 p-4">
              리드 아이템 페이지로
            </button>
          </Link>
        </section>
      </main>
    </div>
  );
}
