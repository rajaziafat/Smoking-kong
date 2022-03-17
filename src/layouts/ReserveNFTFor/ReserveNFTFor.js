import LeafButton from "components/LeafButton/LeafButton";
import React, { useContext } from "react";
import styles from "./ReserveNFTFor.module.css";
import ethIcon from "assets/images/ethIcon.png";
import calendar from "assets/images/calendar.png";
import Button from "components/Button/Button";
import CollectionCard from "components/Cards/CollectionCard/CollectionCard";
import reserveNftImg from "assets/images/reserveNftImg.png";
import dollar_circle from "assets/images/dollar-circle.png";
import islandCardImg1 from "assets/images/islandCardImg1.png";
import useMediaQuery from "hooks/useMediaQuery";
import Point from "components/Point/Point";
import AppContext from "context/AppContext";
import { Fade } from "react-awesome-reveal";

function ReserveNFTFor() {
  const isBellow1200px = useMediaQuery("(max-width : 1200px)");
  const isBellow500px = useMediaQuery("(max-width : 500px)");
  const { showModal, setShowModal } = useContext(AppContext);

  return (
    <div className="container-wrapper">
      {/* <Fade triggerOnce cascade delay={500} fraction={0.5}> */}
      <div className={styles.section}>
        <div className={styles.left}>
          <div className={styles.leftBtn}>
            <LeafButton
              icon={dollar_circle}
              title={
                <span>
                  FARM <span className="sky-blue">2000 LEEFCOIN</span> PER MONTH
                </span>
              }
              fontSize={isBellow1200px ? "fs-18px" : "fs-20px"}
              style={{
                maxWidth: isBellow1200px ? "330px" : "350px",
                textAlign: "left",
              }}
            />
          </div>
          <div className={styles.nftImg}>
            <CollectionCard img={reserveNftImg} />
          </div>
          <img src={islandCardImg1} className={styles.islandCardImg1} alt="" />
        </div>
        <div className={styles.right}>
          <h1
            className={`${
              isBellow1200px ? "fs-32px" : "fs-48px"
            }  white weight-9 lh-1_2 mb-30px`}
          >
            RESERVE YOUR <span className="pink">SKC NFT</span> FOR
          </h1>

          <div className={`${styles.downDate} mb-35px`}>
            <LeafButton
              icon={ethIcon}
              title="0.420 ETH"
              fontSize={isBellow500px ? "fs-16px" : "fs-20px"}
              style={{ padding: isBellow1200px && "12px 16px" }}
              iconStyles={{
                width: isBellow1200px && "35px",
                height: isBellow1200px && "35px",
              }}
            />

            <div className={styles.sale}>
              <img src={calendar} className={styles.calendar} alt="" />
              <div>
                <p
                  className={`sky-blue weight-9 mb-5px ${
                    isBellow1200px ? "fs-12px" : "fs-16px"
                  }`}
                >
                  END OF SALE
                </p>
                <p
                  className={`${
                    isBellow1200px ? "fs-16px" : "fs-24px"
                  }  white weight-9`}
                >
                  APRIL 14
                </p>
              </div>
            </div>
          </div>

          <p className="fs-20px uppercase white mb-30px weight-7">Include</p>

          <div className={`${styles.points} mb-40px`}>
            <Point title="A Unique SMOKING KONG NFT Made By @" />
            <Point title="A private ISLAND NFT in The LEEF ISLAND ®" />
            <Point title="A Seed NFT That Will Allow You To Farm More Than 2000 $LeefCoin Per Month" />
            <Point title="A Chance To Get a Partner Kong NFT" />
            <Point title="A Chance To Get a Unique SMOKING KONG CLUB set home-delivered worldwide" />
          </div>

          <Button title="PRESALE" onClick={() => setShowModal(!showModal)} />
        </div>
      </div>
      {/* </Fade> */}
    </div>
  );
}

export default ReserveNFTFor;
