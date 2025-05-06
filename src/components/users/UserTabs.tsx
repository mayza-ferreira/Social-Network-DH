"use client";
import { MessageType } from "@/types/message.types";
import { TrendingUserType } from "@/types/user.types";
import { useState } from "react";
import Message from "../messages/Message";
import UserCard, { UserCardLayout } from "./UserCard";

enum TabView {
  MESSAGES,
  REPLIES,
  FOLLOWERS,
  FOLLOWING,
}

type UserTabsProps = {
  messages: MessageType[];
  replies: MessageType[];
  followers: TrendingUserType[];
  following: TrendingUserType[];
};

const UserTabs = ({
  messages,
  replies,
  followers,
  following,
}: UserTabsProps) => {
  const [tab, setTab] = useState<TabView>(TabView.MESSAGES);

  return (
    <>
      <div className="flex justify-evenly mb-4 w-full">
        <div
          className={`cursor-pointer  ${
            tab == TabView.MESSAGES ? "border-b-4 border-pink-400" : ""
          }`}
          onClick={() => {
            setTab(TabView.MESSAGES);
          }}
        >
          Mensajes
        </div>
        <div
          className={`cursor-pointer ${
            tab == TabView.REPLIES ? "border-b-4 border-pink-400" : ""
          }`}
          onClick={() => {
            setTab(TabView.REPLIES);
          }}
        >
          Respuestas
        </div>
        <div
          className={`cursor-pointer ${
            tab == TabView.FOLLOWERS ? "border-b-4 border-pink-400" : ""
          }`}
          onClick={() => {
            setTab(TabView.FOLLOWERS);
          }}
        >
          Seguidores
        </div>
        <div
          className={`cursor-pointer ${
            tab == TabView.FOLLOWING ? "border-b-4 border-pink-400" : ""
          }`}
          onClick={() => {
            setTab(TabView.FOLLOWING);
          }}
        >
          Siguiendo
        </div>
      </div>
      <div className="flex w-full flex-col">
        {tab == TabView.MESSAGES &&
          messages.map((message, index) => (
            <Message message={message} key={`${index}`} />
          ))}
        {tab == TabView.REPLIES &&
          replies.map((message, index) => (
            <Message message={message} key={`${index}`} />
          ))}
        {tab == TabView.FOLLOWERS &&
          followers.map((user, index) => (
            <UserCard
              user={user}
              key={`follower-user-${index}`}
              layout={UserCardLayout.VERTICAL}
            />
          ))}
        {tab == TabView.FOLLOWING &&
          following.map((user, index) => (
            <UserCard
              user={user}
              key={`following-user-${index}`}
              layout={UserCardLayout.VERTICAL}
            />
          ))}
      </div>
    </>
  );
};

export default UserTabs;
