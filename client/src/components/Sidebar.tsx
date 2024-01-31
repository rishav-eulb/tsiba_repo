import { FunctionComponent } from "react";
import styles from "./Sidebar.module.css";

const Sidebar: FunctionComponent = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.brand}>
        <div className={styles.logo}>
          <div className={styles.logomark}>
            <div className={styles.avatarFrame} />
            <div className={styles.iconFromTablerio} />
            <img
              className={styles.unionIcon}
              loading="eager"
              alt=""
              src="/union@2x.png"
            />
          </div>
          <img
            className={styles.newYorkFinestFruits}
            loading="eager"
            alt=""
            src="/frame-3.svg"
          />
          <div className={styles.orangefarm}>OrangeFarm</div>
        </div>
        <div className={styles.collapse}>
          <img
            className={styles.collapseIcon}
            alt=""
            src="/collapse-icon@2x.png"
          />
        </div>
      </div>
      <div className={styles.items}>
        <div className={styles.search}>
          <div className={styles.bar}>
            <img
              className={styles.iconFromTablerio1}
              alt=""
              src="/icon-from-tablerio.svg"
            />
            <input
              className={styles.search1}
              placeholder="Search"
              type="text"
            />
          </div>
        </div>
        <div className={styles.sidebarItem01}>
          <img
            className={styles.iconFromTablerio2}
            alt=""
            src="/icon-from-tablerio-1.svg"
          />
          <div className={styles.sidebarItem}>Dashboard</div>
        </div>
        <div className={styles.sidebarNest}>
          <div className={styles.sidebarItem1}>
            <img
              className={styles.iconFromTablerio3}
              alt=""
              src="/icon-from-tablerio-2.svg"
            />
            <div className={styles.manageUsers}>Customers</div>
            <img
              className={styles.closedIcon}
              loading="eager"
              alt=""
              src="/closed.svg"
            />
          </div>
        </div>
        <div className={styles.sidebarItem02}>
          <img
            className={styles.iconFromTablerio4}
            alt=""
            src="/icon-from-tablerio-3.svg"
          />
          <div className={styles.sidebarItem2}>All reports</div>
        </div>
        <div className={styles.sidebarItem03}>
          <img
            className={styles.iconFromTablerio5}
            alt=""
            src="/icon-from-tablerio-4.svg"
          />
          <div className={styles.sidebarItem3}>Geography</div>
        </div>
        <div className={styles.sidebarItem04}>
          <img
            className={styles.iconFromTablerio6}
            alt=""
            src="/icon-from-tablerio-5.svg"
          />
          <div className={styles.sidebarItem4}>Conversations</div>
        </div>
        <div className={styles.sidebarItem06}>
          <img
            className={styles.iconFromTablerio7}
            alt=""
            src="/icon-from-tablerio-6.svg"
          />
          <div className={styles.sidebarItem5}>Deals</div>
        </div>
        <div className={styles.sidebarItem07}>
          <img
            className={styles.iconFromTablerio8}
            alt=""
            src="/icon-from-tablerio-7.svg"
          />
          <div className={styles.sidebarItem6}>Export</div>
        </div>
      </div>
      <div className={styles.user}>
        <div className={styles.info}>
          <img
            className={styles.avatarIcon}
            loading="eager"
            alt=""
            src="/avatar@2x.png"
          />
          <div className={styles.frameF}>
            <div className={styles.gustavoXavier}>Gustavo Xavier</div>
            <div className={styles.tag}>
              <div className={styles.admin}>Admin</div>
            </div>
          </div>
        </div>
        <div className={styles.yearlyFrameJ}>
          <div className={styles.sidebarItem7}>
            <img
              className={styles.iconFromTablerio9}
              alt=""
              src="/icon-from-tablerio-8.svg"
            />
            <div className={styles.sidebarItem8}>Settings</div>
          </div>
          <div className={styles.sidebarItem9}>
            <img
              className={styles.iconFromTablerio10}
              alt=""
              src="/icon-from-tablerio-9.svg"
            />
            <div className={styles.sidebarItem10}>Log out</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
