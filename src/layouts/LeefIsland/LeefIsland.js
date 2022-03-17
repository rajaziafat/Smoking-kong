import Button from "components/Button/Button";
import React, { useEffect, useRef } from "react";
import styles from "./LeefIsland.module.css";
import leef_island from "assets/images/leef_island.png";
import dollar_circle from "assets/images/dollar-circle.png";
import islandCardImg1 from "assets/images/islandCardImg1.png";
import islandCardImg2 from "assets/images/islandCardImg2.png";
import islandCardImg3 from "assets/images/islandCardImg3.png";
import islandCardImg4 from "assets/images/islandCardImg4.png";
import LeafButton from "components/LeafButton/LeafButton";
import useMediaQuery from "hooks/useMediaQuery";
import Tilt from "react-parallax-tilt";
import { Fade } from "react-awesome-reveal";
import getItOnGoogle from "assets/images/getItOnGoogle.png";
import downloadOnAppStore from "assets/images/downloadOnAppStore.png";
import blue_earth from "assets/videos/blue_earth_compressed.mp4";
import maprenderseq from "assets/videos/maprenderseq.mp4";

const IslandCard = ({ img, title, imgStyles }) => {
  const isBellow1000px = useMediaQuery("(max-width : 1000px)");

  return (
    <Tilt
      glareEnable={true}
      glareMaxOpacity={0.3}
      glareColor="lightblue"
      glarePosition="all"
      style={{ borderRadius: "inherit" }}
      className={styles.islandCardWrapper}
    >
      <div className={styles.islandCard}>
        <img src={img} className="mb-40px" style={imgStyles} alt="" />
        <p
          className={`${
            isBellow1000px ? "fs-20px" : "fs-24px"
          }  white text-center weight-9 uppercase lh-1_4`}
        >
          {title}
        </p>
      </div>
    </Tilt>
  );
};

function LeefIsland() {
  const isBellow1000px = useMediaQuery("(max-width : 1000px)");
  const videoRef = useRef(null);

  useEffect(() => {
    videoRef.current.play();
  }, []);

  return (
    <div className="container-wrapper-2">
      <div className={`${isBellow1000px ? "mb-25px" : "mb-50px"}`}>
        <Fade direction="down" cascade triggerOnce fraction={0} duration={500}>
          <h1
            className={`text-center pink weight-9 mb-10px uppercase ${
              isBellow1000px ? "fs-40px" : "fs-76px"
            }`}
          >
            LEEF ISLAND
          </h1>
          <h3
            className={` ${
              isBellow1000px ? "fs-24px mb-25px" : "fs-40px mb-40px"
            } white weight-7 text-center `}
          >
            GameS- ShopS - Events{" "}
          </h3>
          <div className="mb-25px">
            <p
              className={`white  ${
                isBellow1000px ? "fs-16px" : "fs-24px"
              } weight-4 lh-1_4 text-center margin-center`}
              style={{ maxWidth: "700px" }}
            >
              <span className="opacity-0_6">
                Enjoy a unique experience in the{" "}
              </span>
              <span className="opacity-1 weight-7">LEEF ISLAND</span>{" "}
              <span className="opacity-0_6">
                where all SKC Members will own an Island to grow LeefCoins and
                receive exclusives brand accesories.
              </span>
            </p>
          </div>

          <p className="text-center fs-24px white weight-5 mb-15px">
            Soon available on IOS and Android{" "}
          </p>
          <div className={styles.downloadButtons}>
            <a href="/" target="_blank" className="pointer">
              <img src={getItOnGoogle} alt="" />
            </a>
            <a href="/" target="_blank" className="pointer">
              <img src={downloadOnAppStore} alt="" />
            </a>
          </div>
        </Fade>
      </div>

      {/* <div className="mb-50px">
            <div className="w-fit-content margin-center ">
              <Button title="RESERVE YOUR SPOT" />
            </div>
          </div> */}

      <div className="relative mb-60px">
        {/* <img src={leef_island} className={styles.leef_island} alt="" /> */}
        <div class={styles.leef_island}>
          <video
            autoPlay
            loop
            muted
            playsInline
            className={styles.leef_island_video}
            src={maprenderseq}
            ref={videoRef}
          />
        </div>
        {isBellow1000px ? (
          ""
        ) : (
          <div className={styles.btn}>
            <LeafButton
              icon={dollar_circle}
              title="USE LEEFCOIN"
              fontSize="fs-20px"
            />
          </div>
        )}
      </div>

      <div className={`${styles.cards} mb-150px`}>
        <div class={styles.fullscreen_bg}>
          <video
            autoPlay
            loop
            muted
            playsInline
            className={styles.fullscreen_bg__video}
            src={blue_earth}
            ref={videoRef}
          />
        </div>

        <IslandCard
          title="OWN AN ISLAND & BUILD YOUR HOUSE"
          img={islandCardImg1}
          imgStyles={{ maxWidth: "257px" }}
        />
        <IslandCard
          title="Earn $LEEF coin everyday thanks to your farming Land"
          img={islandCardImg2}
        />
        <IslandCard
          title="Use $LEEF in our Shops and get delivered home !"
          img={islandCardImg3}
        />
        <IslandCard
          title="Performaing live in the LEEF Island"
          img={islandCardImg4}
        />
      </div>

      <div className={styles.stats}>
        <Fade cascade triggerOnce>
          <div>
            <h2 className="sky-blue mb-10px fs-48px weight-7 text-center">
              10M+
            </h2>
            <p className="white fs-24px text-center weight-4">Guest</p>
          </div>
          <div>
            <h2 className="sky-blue mb-10px fs-48px weight-7 text-center">
              8000
            </h2>
            <p className="white fs-24px text-center weight-4">Farmers Kongs</p>
          </div>
          <div>
            <h2 className="sky-blue mb-10px fs-48px weight-7 text-center">
              420
            </h2>
            <p className="white fs-24px text-center weight-4">Partner Kongs</p>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default LeefIsland;
