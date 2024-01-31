import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Customer.module.css";

type CustomerType = {
  avatar?: string;
  chrisFriedkly?: string;
  supermarketVillanova?: string;
  iconFromTablerio?: string;
  iconFromTablerio1?: string;
  iconFromTablerio2?: string;

  /** Style props */
  propMarginTop?: CSSProperties["marginTop"];
  propHeight?: CSSProperties["height"];
};

const Customer: FunctionComponent<CustomerType> = ({
  avatar,
  chrisFriedkly,
  supermarketVillanova,
  iconFromTablerio,
  iconFromTablerio1,
  iconFromTablerio2,
  propMarginTop,
  propHeight,
}) => {
  const customerStyle: CSSProperties = useMemo(() => {
    return {
      marginTop: propMarginTop,
    };
  }, [propMarginTop]);

  const childContainerStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  return (
    <div className={styles.customer} style={customerStyle}>
      <img className={styles.avatarIcon} alt="" src={avatar} />
      <div className={styles.childContainer} style={childContainerStyle}>
        <div className={styles.chrisFriedkly}>{chrisFriedkly}</div>
        <div className={styles.supermarketVillanova}>
          {supermarketVillanova}
        </div>
      </div>
      <div className={styles.iconFromTablerioWrapper}>
        <img
          className={styles.iconFromTablerio}
          alt=""
          src={iconFromTablerio}
        />
      </div>
      <div className={styles.iconFromTablerioContainer}>
        <img
          className={styles.iconFromTablerio1}
          alt=""
          src={iconFromTablerio1}
        />
      </div>
      <div className={styles.iconFromTablerioFrame}>
        <img
          className={styles.iconFromTablerio2}
          alt=""
          src={iconFromTablerio2}
        />
      </div>
    </div>
  );
};

export default Customer;
