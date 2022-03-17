import React, { useContext } from "react";
import styles from "./SKCNFT.module.css";

import LeafButton from "components/LeafButton/LeafButton";
import CollectionCard from "components/Cards/CollectionCard/CollectionCard";
import reserveNftImg from "assets/images/reserveNftImg.png";
import dollar_circle from "assets/images/dollar-circle.png";
import islandCardImg1 from "assets/images/islandCardImg1.png";
import useMediaQuery from "hooks/useMediaQuery";
import useCountdownTimer from "hooks/useCountdownTimer";
import ethIcon from "assets/images/ethIcon.png";
import Point from "components/Point/Point";
import metaMask from "assets/images/metaMask.png";
import crossIcon from "assets/images/crossIcon.png";
import AppContext from "context/AppContext";
import OutsideClickDetector from "hooks/OutsideClickDetector";

function SKCNFT() {
  const isBellow1200px = useMediaQuery("(max-width : 1200px)");
  const isBellow1000px = useMediaQuery("(max-width : 1000px)");
  const isBellow500px = useMediaQuery("(max-width : 500px)");
  const { showModal, setShowModal } = useContext(AppContext);

  const { days, hours, minutes, seconds } = useCountdownTimer({
    providedDate: "March 25, 2022 00:00:00",
  });

  const modalRef = OutsideClickDetector(() => {
    setShowModal(false);
  });

  return (
    <div className={`${styles.modalWrapper} ${showModal ? styles.show : ""}`}>
      <div className={styles.Modal} ref={modalRef}>
        <h1
          className={`${isBellow1000px ? "fs-32px" : "fs-48px"}  ${
            isBellow500px ? "text-center" : ""
          } white weight-9 mb-20px`}
        >
          SKC NFT{" "}
        </h1>
        <button
          className={styles.crossIcon}
          onClick={() => setShowModal(false)}
        >
          <img src={crossIcon} alt="" />
        </button>

        <div className={`${styles.section} relative`}>
          <div className={styles.left}>
            <div className={styles.nftImg}>
              <CollectionCard img={reserveNftImg} />
            </div>
            <img
              src={islandCardImg1}
              className={`${styles.islandCardImg1}`}
              alt=""
            />
          </div>

          <div className={styles.right}>
            <div>
              <div className={`${styles.timerCounts} mb-30px`}>
                <p className="fs-14px white weight-6 mb-10px">Sales End</p>
                <div className={styles.timerTime}>
                  <div>
                    <h1
                      className={`${
                        isBellow1000px ? "fs-24px" : "fs-24px"
                      }  white weight-7 mb-5px text-center`}
                    >
                      {days < 10 ? "0" : ""}
                      {days}
                    </h1>
                    <p
                      className={`${
                        isBellow1000px ? "fs-10px" : "fs-12px"
                      } white weight-5 text-center`}
                    >
                      Days
                    </p>
                  </div>
                  <div>
                    <h1
                      className={`${
                        isBellow1000px ? "fs-24px" : "fs-24px"
                      }  white weight-7 mb-5px text-center`}
                    >
                      {hours < 10 ? "0" : ""}
                      {hours}
                    </h1>
                    <p
                      className={`${
                        isBellow1000px ? "fs-10px" : "fs-12px"
                      } white weight-5 text-center`}
                    >
                      Hours
                    </p>
                  </div>
                  <div>
                    <h1
                      className={`${
                        isBellow1000px ? "fs-24px" : "fs-24px"
                      }  white weight-7 mb-5px text-center`}
                    >
                      {minutes < 10 ? "0" : ""}
                      {minutes}
                    </h1>
                    <p
                      className={`${
                        isBellow1000px ? "fs-10px" : "fs-12px"
                      } white weight-5 text-center`}
                    >
                      Minutes
                    </p>
                  </div>
                  <div>
                    <h1
                      className={`${
                        isBellow1000px ? "fs-24px" : "fs-24px"
                      }  white weight-7 mb-5px text-center`}
                    >
                      {seconds < 10 ? "0" : ""}
                      {seconds}
                    </h1>
                    <p
                      className={`${
                        isBellow1000px ? "fs-10px" : "fs-12px"
                      } white weight-5 text-center`}
                    >
                      Seconds
                    </p>
                  </div>
                </div>
              </div>

              <div className={styles.stats}>
                <div className={`${styles.stat} ${styles.price}`}>
                  <p className={`${styles.statTitle} fs-20px white weight-6`}>
                    Price
                  </p>

                  <LeafButton
                    icon={ethIcon}
                    title="0.420 ETH"
                    fontSize={"fs-16px"}
                    style={{ padding: "12px 16px" }}
                    iconStyles={{
                      width: "35px",
                      height: "35px",
                    }}
                  />
                </div>
                <div
                  className={`${styles.stat} ${styles.include}`}
                  style={{ alignItems: "flex-start" }}
                >
                  <p className={`${styles.statTitle} fs-20px white weight-6`}>
                    Include
                  </p>

                  <div className={styles.points}>
                    <Point title="A Unique SMOKING KONG NFT made by @" />
                    <Point title="A private ISLAND NFT in The LEEF®" />
                  </div>
                </div>
              </div>
            </div>

            <button className={`${styles.metaMaskBtn} pointer`}>
              <img src={metaMask} alt="" />
              <span
                className={`${
                  isBellow500px ? "fs-14px" : "fs-16px"
                }  white weight-7`}
              >
                BUY WITH METAMASK
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SKCNFT;
