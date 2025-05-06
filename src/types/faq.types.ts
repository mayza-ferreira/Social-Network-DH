export type FAQPageType = {
  id: number;
  documentId: string;
  tittle: string;
  body: BodyElement[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  slug: string;
};

type BodyElement =
  | {
      type: "paragraph";
      children: TextElement[];
    }
  | {
      type: "list";
      format: "unordered" | "ordered";
      children: ListItem[];
    };

type ListItem = {
  type: "list-item";
  children: TextElement[];
};

type TextElement = {
  type: "text";
  text: string;
  bold?: boolean;
  italic?: boolean;
  strikethrough?: boolean;
  underline?: boolean;
};
