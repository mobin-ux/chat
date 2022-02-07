import { useContext, useState } from "react";
import Emoji from "../../assets/img/emoji.svg";
import Close from "../../assets/img/Close.png";
import styles from "./styles.module.scss";
import Picker from "emoji-picker-react";
import { Context } from "../../context";
import { sendData } from "../ChatList/websocket";

export const ChatInput = () => {
  const [showEmoji, setShowEmoji] = useState(false);
  const [message, setMessage] = useState("");
  const { isSmallChatBox, chat, setChat} = useContext(Context);

  const toggleEmojiPicker = () => {
    setShowEmoji(!showEmoji);
  };
  const onEmojiClick = (event, emojiObject) => {
    setMessage(message + emojiObject.emoji);
  };
  const onChange = (e) => {
    setMessage(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sendData("userName", message);
    setChat([
      ...chat,
      {
        from: "userName",
        createdAt: "2022-02-07T07:58:54.757Z",
        text: message,
        isMine: true,
      },
    ]);
    setMessage("")
  };
  return (
    <form onSubmit={handleSubmit} className={styles.input}>
      <input
        value={message}
        onChange={onChange}
        type="text"
        placeholder="Напишите сообщение..."
      />
      <img src={Emoji} onClick={toggleEmojiPicker} alt="" />
      {showEmoji && (
        <div className={`${styles.emoji} ${!isSmallChatBox && styles.large}`}>
          <img onClick={toggleEmojiPicker} src={Close} alt="" />
          <Picker onEmojiClick={onEmojiClick} />
        </div>
      )}
    </form>
  );
};
