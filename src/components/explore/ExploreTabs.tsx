"use client";
import { TrendingHashtag } from "@/types/hash.types";
import { PageType } from "@/types/pagination.types";
import { TrendingUserType } from "@/types/user.types";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import MessageHashtagList from "../messages/MessageHashtagList";
import UserList from "../users/UserList";

enum TabView {
  HASHTAGS,
  USERS,
}

type ExploreTabsProps = {
  hashtags: PageType<TrendingHashtag>;
  users: PageType<TrendingUserType>;
  initialTab?: string;
};

const ExploreTabs = ({ hashtags, users, initialTab }: ExploreTabsProps) => {
  const searchParams = useSearchParams();

  const [tab, setTab] = useState<TabView>(
    initialTab ? TabView[initialTab as keyof typeof TabView] : TabView.HASHTAGS
  );

  useEffect(() => {
    const type = searchParams.get("type");
    setTab(type ? TabView[type as keyof typeof TabView] : tab);
  }, [searchParams, tab]);

  return (
    <>
      <div className="flex justify-evenly mb-4">
        <Link href="/explore?type=HASHTAGS">
          <div
            className={`cursor-pointer  ${
              tab == TabView.HASHTAGS ? "border-b-4 border-pink-400" : ""
            }`}
          >
            Hashtags
          </div>
        </Link>
        <Link href="/explore?type=USERS">
          <div
            className={`cursor-pointer ${
              tab == TabView.USERS ? "border-b-4 border-pink-400" : ""
            }`}
          >
            Usuarios
          </div>
        </Link>
      </div>
      <div>
        {tab == TabView.HASHTAGS && (
          <MessageHashtagList initialPage={hashtags} />
        )}

        {tab == TabView.USERS && <UserList initialUserPage={users} />}
      </div>
    </>
  );
};

export default ExploreTabs;
