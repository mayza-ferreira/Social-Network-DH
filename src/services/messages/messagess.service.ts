import { MessageType } from "@/types/message.types";
import { PageType } from "@/types/pagination.types";
import httpInternalApi from "../common/http.internal.service";
import httpExternalApi from "../common/http.external.service";

class MessageAPI {
  getMessagesFeed = async (
    page: number,
    size: number
  ): Promise<PageType<MessageType>> =>
    httpInternalApi.httpGetPublic(
      `/messages/feed`,
      new URLSearchParams({ page: `${page}`, size: `${size}` })
    );

  getMessage = async (id: string): Promise<MessageType> =>
    httpInternalApi.httpGetPublic(`/messages/${id}`);

  getMessagesReplies = async (
    id: string,
    page: number,
    size: number
  ): Promise<PageType<MessageType>> =>
    httpInternalApi.httpGetPublic(
      `/messages/${id}/replies`,
      new URLSearchParams({ page: `${page}`, size: `${size}` })
    );

  postMessage = async (
    message: string,
    parentId?: string
  ): Promise<MessageType> =>
    httpExternalApi.httpPost(`/proxy/messages`, {
      message: message,
      parentId: parentId ?? null,
    });

  getMessageByHash = async (
    hashtag: string,
    page: number,
    size: number
  ): Promise<PageType<MessageType>> =>
    httpInternalApi.httpGetPublic(
      `/messages/hash/${hashtag}`,
      new URLSearchParams({ page: `${page}`, size: `${size}` })
    );
}

const messageApi = new MessageAPI();
export default messageApi;
