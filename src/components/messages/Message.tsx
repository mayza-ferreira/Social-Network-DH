"use client";
import { MessageType } from "@/types/message.types";
import UserCard, { UserCardLayout } from "../users/UserCard";
import RepliesCounter from "../counters/RepliesCounter";
import { useRouter } from "next/navigation";

type MessageProps = {
  message: MessageType;
};
const Message = ({ message }: MessageProps) => {
  const router = useRouter();
  return (
    <UserCard user={message.user} layout={UserCardLayout.HORIZONTAL}>
      <div className="flex flex-col">
        <p> {message.message}</p>
      </div>
      <div className="flex justify-end">
        <RepliesCounter
          count={message.repliesCount}
          onClick={() => router.push(`/messages/${message.id}`)}
        />
      </div>
    </UserCard>
  );
};

export default Message;
