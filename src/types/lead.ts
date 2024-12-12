export type LEAD_ITEM_STATUS =
  | "leadGen"
  | "proposal"
  | "negotiation"
  | "closed"
  | "lost";

export type LEAD_ITEM = {
  id: string;
  status: LEAD_ITEM_STATUS;
  title: string;
};

export type LEAD_ITEMS = {
  [key in LEAD_ITEM_STATUS]: LEAD_ITEM[];
};
