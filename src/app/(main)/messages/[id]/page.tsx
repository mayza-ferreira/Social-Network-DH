import messageApi from "@/services/messages/messagess.service";
import MessagePageConatiner from "./page.container";
import { headers } from "next/headers";
import userApi from "@/services/users/users.service";
const MessagePage = async ({ params }: { params: { id: string } }) => {

const accessToken = (await headers()).get("x-social-access-token") ?? null;

const currentUser = accessToken
  ? await userApi.getMeInternal(accessToken)
  : undefined;

  const repliesPagePromise = messageApi.getMessagesReplies(params.id, 0, 10);
  const messagePromise = messageApi.getMessage(params.id);

  const [repliesPage, message] = await Promise.all([
    repliesPagePromise,
    messagePromise,
  ]);


  return (
    <main className="flex flex-col bg-gray-100 p-8">
      <MessagePageConatiner
        message={message}
        repliesPage={repliesPage}
        parentId={params.id}
        currentUser={currentUser}
      />
    </main>
  );
};

export default MessagePage;
