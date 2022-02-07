import { createContext } from "react";

export const Context = createContext({
  isSmallChatBox: true,
  setIsSmallChatBox: () => {},
  message: "",
  setMessage: () => {},
  chat: [],
  setChat: () => {},
  hide:false,
  setHide : () => {}
});
