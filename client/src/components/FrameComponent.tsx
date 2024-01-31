import { FunctionComponent } from "react";
import styles from "./FrameComponent.module.css";

const FrameComponent: FunctionComponent = () => {
  return (
    <div className={styles.widgetParent}>
      <div className={styles.widget}>
        <div className={styles.frameParent}>
          <div className={styles.chatsParent}>
            <h3 className={styles.chats}>Chats</h3>
            <div className={styles.unreadMessages}>2 unread messages</div>
          </div>
          <div className={styles.customer}>
            <button className={styles.customerAvatar}>
              <img
                className={styles.avatarIcon}
                alt=""
                src="/avatar-2@2x.png"
              />
              <div className={styles.nYunreadMessages} />
            </button>
            <button className={styles.avatarParent}>
              <img
                className={styles.avatarIcon1}
                alt=""
                src="/avatar-7@2x.png"
              />
              <div className={styles.chatsBar} />
            </button>
            <div className={styles.avatarWrapper}>
              <img
                className={styles.avatarIcon2}
                alt=""
                src="/avatar-8@2x.png"
              />
            </div>
            <div className={styles.topStates}>
              <img
                className={styles.avatarIcon3}
                alt=""
                src="/avatar-9@2x.png"
              />
            </div>
          </div>
        </div>
        <div className={styles.frameBarGroupWrapper}>
          <div className={styles.frameBarGroup}>
            <div className={styles.allMessages}>All messages</div>
            <img className={styles.iconFromTablerio} alt="" />
          </div>
        </div>
      </div>
      <div className={styles.widget1}>
        <div className={styles.topStatesWrapper}>
          <h3 className={styles.topStates1}>Top states</h3>
        </div>
        <div className={styles.barParent}>
          <div className={styles.bar}>
            <div className={styles.ny}>NY</div>
            <div className={styles.k}>120k</div>
          </div>
          <div className={styles.bar1}>
            <div className={styles.ma}>MA</div>
            <div className={styles.k1}>80k</div>
          </div>
          <div className={styles.bar2}>
            <div className={styles.nh}>NH</div>
            <div className={styles.k2}>70k</div>
          </div>
          <div className={styles.bar3}>
            <div className={styles.or}>OR</div>
            <div className={styles.k3}>50k</div>
          </div>
        </div>
      </div>
      <div className={styles.widget2}>
        <div className={styles.heading}>
          <h3 className={styles.newDeals}>New deals</h3>
        </div>
        <div className={styles.dealsFrames}>
          <button className={styles.fruitGoMarshalls}>
            <img
              className={styles.iconFromTablerio1}
              alt=""
              src="/icon-from-tablerio-31.svg"
            />
            <div className={styles.fruit2go}>Fruit2Go</div>
          </button>
          <button className={styles.fruitGoMarshalls1}>
            <img
              className={styles.iconFromTablerio2}
              alt=""
              src="/icon-from-tablerio-31.svg"
            />
            <div className={styles.marshallsMkt}>Marshall's MKT</div>
          </button>
          <button className={styles.fruitGoMarshalls2}>
            <img
              className={styles.iconFromTablerio3}
              alt=""
              src="/icon-from-tablerio-31.svg"
            />
            <div className={styles.ccnt}>CCNT</div>
          </button>
          <button className={styles.fruitGoMarshalls3}>
            <img
              className={styles.iconFromTablerio4}
              alt=""
              src="/icon-from-tablerio-31.svg"
            />
            <div className={styles.joanaMiniMarket}>Joana Mini-market</div>
          </button>
          <div className={styles.fruitGoMarshalls4}>
            <img
              className={styles.iconFromTablerio5}
              alt=""
              src="/icon-from-tablerio-31.svg"
            />
            <div className={styles.littleBrazilVegan}>Little Brazil Vegan</div>
          </div>
          <div className={styles.fruitGoMarshalls5}>
            <img
              className={styles.iconFromTablerio6}
              alt=""
              src="/icon-from-tablerio-31.svg"
            />
            <div className={styles.target}>Target</div>
          </div>
          <div className={styles.fruitGoMarshalls6}>
            <img
              className={styles.iconFromTablerio7}
              alt=""
              src="/icon-from-tablerio-31.svg"
            />
            <div className={styles.organicPlace}>Organic Place</div>
          </div>
          <div className={styles.fruitGoMarshalls7}>
            <img
              className={styles.iconFromTablerio8}
              alt=""
              src="/icon-from-tablerio-31.svg"
            />
            <div className={styles.morellos}>Morello's</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
