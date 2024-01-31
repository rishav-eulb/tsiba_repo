import { FunctionComponent } from "react";
import styles from "./FrameP.module.css";

const FrameP: FunctionComponent = () => {
  return (
    <div className={styles.frameP}>
      <div className={styles.widget}>
        <div className={styles.heading}>
          <h3 className={styles.revenues}>Revenues</h3>
        </div>
        <div className={styles.bigNumber}>
          <div className={styles.widgetFrameU}>15%</div>
          <img
            className={styles.iconFromTablerio}
            alt=""
            src="/icon-from-tablerio-10.svg"
          />
        </div>
        <div className={styles.increaseComparedTo}>
          Increase compared to last week
        </div>
        <div className={styles.tablerioIconFrameWrapper}>
          <div className={styles.tablerioIconFrame}>
            <div className={styles.revenuesReport}>Revenues report</div>
            <img
              className={styles.iconFromTablerio1}
              alt=""
              src="/icon-from-tablerio-11.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.widget1}>
        <div className={styles.heading1}>
          <h3 className={styles.lostDeals}>Lost deals</h3>
        </div>
        <div className={styles.bigNumber1}>
          <div className={styles.div}>4%</div>
        </div>
        <div className={styles.youClosed96}>You closed 96 out of 100 deals</div>
        <div className={styles.widgetInner}>
          <div className={styles.allDealsParent}>
            <div className={styles.allDeals}>All deals</div>
            <img
              className={styles.iconFromTablerio2}
              alt=""
              src="/icon-from-tablerio-12.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.widget2}>
        <div className={styles.newYorkFinestFruitsFrame}>
          <h3 className={styles.quarterGoal}>Quarter goal</h3>
          <div className={styles.allCustomersFrame}>
            <img
              className={styles.allCustomersFrameChild}
              alt=""
              src="/ellipse-4.svg"
            />
            <div className={styles.vectorParent}>
              <img
                className={styles.frameChild}
                loading="eager"
                alt=""
                src="/ellipse-3.svg"
              />
              <div className={styles.vectorGroup}>
                <img className={styles.frameItem} alt="" src="/ellipse-5.svg" />
                <div className={styles.ksoldSoFar}>84%</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.maggieJohnsonFrame}>
          <div className={styles.allGoals}>All goals</div>
          <img
            className={styles.iconFromTablerio3}
            alt=""
            src="/icon-from-tablerio-13.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default FrameP;
