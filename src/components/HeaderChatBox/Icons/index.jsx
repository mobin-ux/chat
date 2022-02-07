import { useContext } from "react";
import styles from "./styles.module.scss";
import ArrowDown from "../../../assets/img/ArrowDown.svg";
import LargeIcon from "../../../assets/img/LargeIcon.svg";
import Negative from "../../../assets/img/NegativeIcon.svg";
import { Context } from "../../../context";
export const Icons = () => {
  const { setIsSmallChatBox, isSmallChatBox, hide, setHide } =
    useContext(Context);
  const toggleSmall = () => {
    setIsSmallChatBox(!isSmallChatBox);
  };
  const toggleChatBox = () => {
    setHide(!hide);
  };
  return (
    <div className={styles.icons}>
      <p>
        RU <img src={ArrowDown} alt="" />
      </p>
      <img src={Negative} onClick={toggleChatBox} alt="" />
      <img src={LargeIcon} alt="" onClick={toggleSmall} />
    </div>
  );
};
