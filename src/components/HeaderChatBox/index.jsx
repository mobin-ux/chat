import styles from "./styles.module.scss";
import { Icons } from "./Icons";
import { Tab } from "./HeaderTab";
import { useContext } from "react";
import { Context } from "../../context";

export const HeaderChatBox = () => {
  const { hide } =
  useContext(Context);
  return (
    <div className={`${styles.header} ${hide && styles.hide}`}>
      <Tab />
      <Icons />
    </div>
  );
};
