import { UserType } from "./user.types";

export type LoginResponseType = {
  accessToken: string;
  user: UserType;
};

export type AuthResponseType = {
  sessionId: string;
  expireAt: number;
  user: UserType;
};

export type RedisResponseType = {
  value: string;
};
