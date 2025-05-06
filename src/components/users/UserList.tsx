import exploreApi from "@/services/explore/explore.service";
import { PageType } from "@/types/pagination.types";
import { TrendingUserType } from "@/types/user.types";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import UserCard, { UserCardLayout } from "./UserCard";

type UserListProps = {
  initialUserPage: PageType<TrendingUserType>;
};

const UserList = ({ initialUserPage }: UserListProps) => {
  const [page, setPage] = useState<PageType<TrendingUserType>>(initialUserPage);
  const [users, setUsers] = useState<TrendingUserType[]>(
    initialUserPage.content
  );

  const fetchData = async () => {
    const pageNumber = page.pagination.page + 1;
    const response = await exploreApi.getFollowRecommendations(pageNumber, 10);
    setPage(response);
    setUsers([...users, ...response.content]);
  };

  const refresh = async () => {
    const response = await exploreApi.getFollowRecommendations(0, 10);
    setPage(response);
    setUsers(response.content);
  };

  return (
    <InfiniteScroll
      dataLength={users.length}
      next={fetchData}
      hasMore={!page.pagination.last}
      loader={<h4>Cargando mas mensajes...</h4>}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>Ups! Has llegado al final!</b>
        </p>
      }
      // below props only if you need pull down functionality
      refreshFunction={refresh}
      pullDownToRefresh={false}
      pullDownToRefreshThreshold={50}
      pullDownToRefreshContent={
        <h3 style={{ textAlign: "center" }}>
          &#8595; Arrastra hacia abajo para refrescar
        </h3>
      }
      releaseToRefreshContent={
        <h3 style={{ textAlign: "center" }}>&#8593; Suelta para refrescar</h3>
      }
    >
      {users.map((user, index) => (
        <UserCard
          key={`explore-user-${index}`}
          user={user}
          layout={UserCardLayout.VERTICAL}
        />
      ))}
    </InfiniteScroll>
  );
};

export default UserList;
