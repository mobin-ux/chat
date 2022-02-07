import { useState } from "react";
import { ChatBox } from "../../components/ChatBox";
import styles from "./styles.module.scss";
import { Context } from "../../context";
function App() {
  const [isSmallChatBox, setIsSmallChatBox] = useState(true);
  const [chat, setChat] = useState([]);
  const [hide, setHide] = useState(false);
  return (
    <Context.Provider
      value={{
        isSmallChatBox,
        setIsSmallChatBox,
        chat,
        setChat,
        setHide,
        hide,
      }}
    >
      <div className={styles.app}>
        <ChatBox />
      </div>
    </Context.Provider>
  );
}

export default App;
