import UserPageContainerAsync from "@/components/users/userPageContainerAsync";
import userApi from "@/services/users/users.service";
import { headers } from "next/headers";

const ProfilePage = async () => {
  const accessToken = (await headers()).get("x-social-access-token") ?? "";

  const me = await userApi.getMeInternal(accessToken);

  return <UserPageContainerAsync username={me.username} />;
};

export default ProfilePage;
