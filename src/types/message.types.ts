import { UserType } from "./user.types";

export type MessageType = {
  id: string;
  user: UserType;
  message: string;
  repliesCount: number;
};
