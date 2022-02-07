import styles from "./styles.module.scss";
import Admin from "../../../assets/img/admin.svg";
import Moderator from "../../../assets/img/moderator.svg";
// import BTC from "../../assets/img/BTC.svg";
import BTC from "../../../assets/img/BTC.svg";
export const Chat = ({ from, isMine = false, createdAt, text }) => {
  let created = new Date(createdAt);
  return (
    <div className={`${styles.item} ${isMine && styles.mine}`}>
      {isMine && (
        <p>
          {created.getHours()}:{created.getMinutes()}
        </p>
      )}
      <div className={styles.chat}>
        {isMine === false && (
          <div>
            <img src={BTC} alt="" />
            <p>{from}</p>
            <img src={Admin} alt="" />
            <p>{Math.floor(Math.random() * 6)}</p>
          </div>
        )}
        <p>{text}</p>
      </div>
      {!isMine && (
        <p>
          {created.getHours()}:{created.getMinutes()}
        </p>
      )}
    </div>
  );
};
