import { useContext, Fragment } from "react";
import { Context } from "../../context";
import { ChatInput } from "../ChatInput";
import { ChatList } from "../ChatList";
import { HeaderChatBox } from "../HeaderChatBox";
import styles from "./styles.module.scss";

export const ChatBox = () => {
  const { isSmallChatBox, hide } = useContext(Context);
  return (
    <div className={`${styles.box} ${!isSmallChatBox && styles.large} ${hide && styles.hide}`}>
      <HeaderChatBox />
      {!hide && (
        <Fragment>
          <ChatList />
          <ChatInput />
        </Fragment>
      )}
    </div>
  );
};
