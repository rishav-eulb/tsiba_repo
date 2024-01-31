import { FunctionComponent } from "react";
import Sidebar from "../components/Sidebar";
import FrameP from "../components/FrameP";
import Customer from "../components/Customer";
import FrameComponent from "../components/FrameComponent";
import styles from "./Dashboard.module.css";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GraphComponent from "./graphComponent";
const Dashboard: FunctionComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch dataset from the backend API
    axios.get('/api/dataset')
      .then(response => setData(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);


  return (
    <div className={styles.dashboard}>
      <Sidebar />
      <main className={styles.novemberFrameN}>
        <section className={styles.topMonthFrameO}>
          <FrameP />
          <div className={styles.topYearFrame}>
            <div className={styles.widget}>
              <div className={styles.unreadMessagesFrame}>
                <div className={styles.heading}>
                  <h3 className={styles.customers}>Customers</h3>
                  <div className={styles.labelText}>
                    <div className={styles.sortByNewestContainer}>
                      <span>{`Sort by `}</span>
                      <span className={styles.newest}>Newest</span>
                    </div>
                    <img
                      className={styles.iconFromTablerio}
                      alt=""
                      src="/icon-from-tablerio-14.svg"
                    />
                  </div>
                </div>
                <div className={styles.container}>
                  <Customer
                    avatar="/avatar-1@2x.png"
                    chrisFriedkly="Chris Friedkly"
                    supermarketVillanova="Supermarket Villanova"
                    iconFromTablerio="pending_33:356"
                    iconFromTablerio1="pending_33:358"
                    iconFromTablerio2="pending_33:360"
                  />
                  <div className={styles.customer}>
                    <div className={styles.childContainer}>
                      <img
                        className={styles.avatarIcon}
                        alt=""
                        src="/avatar-2@2x.png"
                      />
                      <div className={styles.childContainer1}>
                        <div className={styles.maggieJohnson}>
                          Maggie Johnson
                        </div>
                        <div className={styles.oasisOrganicInc}>
                          Oasis Organic Inc.
                        </div>
                      </div>
                    </div>
                    <div className={styles.multiIcon}>
                      <img
                        className={styles.iconFromTablerio1}
                        alt=""
                        src="/icon-from-tablerio-18.svg"
                      />
                      <img
                        className={styles.iconFromTablerio2}
                        alt=""
                        src="/icon-from-tablerio-19.svg"
                      />
                      <input
                        className={styles.iconFromTablerio3}
                        type="checkbox"
                      />
                      <div className={styles.frame} />
                      <img
                        className={styles.iconFromTablerio4}
                        alt=""
                        src="/icon-from-tablerio-21.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.customerParent}>
                    <Customer
                      avatar="/avatar-3@2x.png"
                      chrisFriedkly="Gael Harry"
                      supermarketVillanova="New York Finest Fruits"
                      iconFromTablerio="pending_33:326"
                      iconFromTablerio1="pending_33:328"
                      iconFromTablerio2="pending_33:330"
                      propMarginTop="unset"
                      propHeight="34px"
                    />
                    <Customer
                      avatar="/avatar-4@2x.png"
                      chrisFriedkly="Jenna Sullivan"
                      supermarketVillanova="Walmart"
                      iconFromTablerio="pending_33:292"
                      iconFromTablerio1="pending_33:316"
                      iconFromTablerio2="pending_33:297"
                      propMarginTop="-1px"
                      propHeight="unset"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.allCustomersFrame}>
                <div className={styles.widgetFrame}>
                  <div className={styles.allCustomers}>All customers</div>
                  <img
                    className={styles.iconFromTablerio5}
                    alt=""
                    src="/icon-from-tablerio-28.svg"
                  />
                </div>
              </div>
            </div>
            
            <div className={styles.numbersFrame}>
              <div className={styles.widget1}>
                <div className={styles.heading1}>
                  <h3 className={styles.growth}>Growth</h3>
                  <div className={styles.yearlyParent}>
                    <div className={styles.yearly}>Yearly</div>
                    <img
                      className={styles.iconFromTablerio6}
                      alt=""
                      src="/icon-from-tablerio-14.svg"
                    />
                  </div>
                </div>
                  <GraphComponent />
                                {/* <div className={styles.widgetInner}>
                                  <div className={styles.numbersParent}>
                                    <div className={styles.numbers}>
                                      <div className={styles.kParent}>
                                        <div className={styles.k}>100k</div>
                                        <img
                                          className={styles.frameChild}
                                          alt=""
                                          src="/line-3.svg"
                                        />
                                      </div>
                                      <div className={styles.kGroup}>
                                        <div className={styles.k1}>50k</div>
                                        <img
                                          className={styles.frameItem}
                                          alt=""
                                          src="/line-3-1.svg"
                                        />
                                      </div>
                                      <div className={styles.kContainer}>
                                        <div className={styles.k2}> </div>
                                        <img
                                          className={styles.frameInner}
                                          alt=""
                                          src="/line-3-2.svg"
                                        />
                                      </div>
                                      <div className={styles.frameDiv}>
                                        <div className={styles.k3}>10k</div>
                                        <img
                                          className={styles.lineIcon}
                                          alt=""
                                          src="/line-3-3.svg"
                                        />
                                      </div>
                                      <div className={styles.parent}>
                                        <div className={styles.div}>0</div>
                                        <img
                                          className={styles.frameChild1}
                                          alt=""
                                          src="/line-3-4.svg"
                                        />
                                      </div>
                                    </div>
                                    <div className={styles.years}>
                                      <div className={styles.avatarEllipseFrames}>
                                        <img
                                          className={styles.maskGroupIcon}
                                          loading="eager"
                                          alt=""
                                          src="/mask-group.svg"
                                        />
                                        <div className={styles.chatsBar} />
                                        <div className={styles.chatsBar1} />
                                        <div className={styles.chatsBar2} />
                                        <div className={styles.chatsBar3} />
                                        <div className={styles.chatsBar4} />
                                        <div className={styles.chatsBar5} />
                                        <div className={styles.chatsBar6} />
                                        <div className={styles.chatsBar7} />
                                      </div>
                                      <div className={styles.topStates}>
                                        <div className={styles.customerFrame}>2016</div>
                                        <div className={styles.customerFrame1}>2017</div>
                                        <div className={styles.customerFrame2}>2018</div>
                                        <div className={styles.customerFrame3}>2019</div>
                                        <div className={styles.customerFrame4}>2020</div>
                                        <div className={styles.customerFrame5}>2021</div>
                                        <div className={styles.customerFrame6}>2022</div>
                                        <div className={styles.customerFrame7}>2023</div>
                                      </div>
                                    </div>
                                  </div>
                                </div> */}
              </div>
              <div className={styles.widgetTopMonthFrame}>
                <div className={styles.widget2}>
                  <div className={styles.topMonth}>Top month</div>
                  <div className={styles.newDealsFrame}>
                    <h2 className={styles.november}>November</h2>
                    <div className={styles.div1}>2019</div>
                  </div>
                </div>
                <div className={styles.widget3}>
                  <div className={styles.topYear}>Top year</div>
                  <div className={styles.group}>
                    <div className={styles.div2}>2023</div>
                    <div className={styles.kSoldSo}>96K sold so far</div>
                  </div>
                </div>
                <div className={styles.widget4}>
                  <div className={styles.topBuyer}>Top buyer</div>
                  <div className={styles.avatarParent}>
                    <img
                      className={styles.avatarIcon1}
                      alt=""
                      src="/avatar-5@2x.png"
                    />
                    <div className={styles.maggieJohnsonParent}>
                      <div className={styles.maggieJohnson1}>
                        Maggie Johnson
                      </div>
                      <div className={styles.oasisOrganicInc1}>
                        Oasis Organic Inc.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <FrameComponent />
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
