"use client";
import MessageFeed from "@/components/messages/MessageFeed";
import MessagePostForm from "@/components/messages/MessagePostForm";
import SearchBar from "@/components/search/SearchBar";
import { MessageProvider } from "@/contexts/message.context";
import { MessageType } from "@/types/message.types";
import { PageType } from "@/types/pagination.types";
import { UserType } from "@/types/user.types";
import React from "react";

type IndexPageContainerProps = {
  initialQuery?: string;
  messageResponse: PageType<MessageType>;
  currentUser?: UserType;
};

const IndexPageContainer = ({
  initialQuery,
  messageResponse,
  currentUser,
}: IndexPageContainerProps) => {
  return (
    <MessageProvider initialPage={messageResponse}>
      <SearchBar initialQuery={initialQuery ?? ""} />
      <MessagePostForm currentUser={currentUser} />
      <MessageFeed />
    </MessageProvider>
  );
};

export default IndexPageContainer;
