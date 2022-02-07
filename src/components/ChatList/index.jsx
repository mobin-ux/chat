import { Chat } from "./Chat";
import styles from "./styles.module.scss";
import { Context } from "../../context";
import { Fragment, useContext, useEffect, useState, useRef } from "react";
import { socket } from "./websocket";
import axios from "axios";
export const ChatList = () => {
  const { isSmallChatBox, setChat, chat } = useContext(Context);
  const [error, setError] = useState("");
  const [page, setPage] = useState({ take: 10, skip: 0 });
  useEffect(() => {
    axios
      .get(
        "https://test-chat-backend-hwads.ondigitalocean.app/api/messages?skip=0&limit=10"
      )
      .then(({ data }) => setChat(data))
      .catch(() => setError("something went wrong"));
  }, []);
  socket.on(
    "message",
    ({ from, createdAt, text }) => {
      setChat([...chat, { from, createdAt, text }]);
    },
    (error) => alert("something went wrong")
  );
  const next = (e) => {
    if (e !== {}) {
      if (e.target.scrollTop === 0) {
        axios
          .get(
            `https://test-chat-backend-hwads.ondigitalocean.app/api/messages?skip=${
              page.skip + 10
            }&limit=${page.take + 10}`
          )
          .then(({ data }) => setChat(data))
          .catch(() => setError("something went wrong"));
        setPage({
          take: page.take + 10,
          skip: page.take + 10,
        });
      }
    }
  };
  return (
    <div
      className={`${styles.list} ${!isSmallChatBox && styles.large}`}
      onScroll={next}
    >
      {error.length > 0 ? (
        <p>{error}</p>
      ) : chat.length == 0 ? (
        <p>is loading</p>
      ) : (
        <Fragment>
          {chat.map((el, idx) => (
            <Chat key={idx} {...el} />
          ))}
        </Fragment>
      )}
    </div>
  );
};
