import styles from "./styles.module.scss";
import Arrow from "../../../assets/img/ArrowRight.svg";
export const Tab = () => {
  return (
    <div className={styles.tabs}>
      <div>
        <img src={Arrow} alt="" />
      </div>
      <span className={styles.active}>title</span>
      <span>title</span>
      <span>title</span>
      <span>title</span>
      <span>title</span>
      <span>title</span>
      <span>title</span>
      <span>title</span>
      <span>title</span>
      <span>title</span>
      <span>title</span>
      <span>title</span>
    </div>
  );
};
