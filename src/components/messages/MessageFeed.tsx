

import useMessages from "@/contexts/message.context";
import InfiniteScroll from "react-infinite-scroll-component";
import Message from "./Message";

const MessageFeed = () => {
  const { messages, messagePage, fetchNextPage, refresh } = useMessages();



  return (
    <InfiniteScroll
      dataLength={messages.length}
      next={fetchNextPage}
      hasMore={!messagePage.pagination.last}
      loader={<h4>Cargando mas mensajes...</h4>}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>Ups! has llegado al final!</b>
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
      {messages.map((message, index) => (
        <Message message={message} key={`${index}`} />
      ))}
    </InfiniteScroll>
  );
};

export default MessageFeed;
