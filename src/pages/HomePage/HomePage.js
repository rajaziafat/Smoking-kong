import SKCNFT from "components/Modals/SKCNFT/SKCNFT";
import useCountdownTimer from "hooks/useCountdownTimer";
import useMediaQuery from "hooks/useMediaQuery";
import Family from "layouts/Family/Family";
import FAQ from "layouts/FAQ/FAQ";
import Footer from "layouts/Footer/Footer";
import Hero from "layouts/Hero/Hero";
import JoinCommunity from "layouts/JoinCommunity/JoinCommunity";
import LeefIsland from "layouts/LeefIsland/LeefIsland";
import Navbar from "layouts/Navbar/Navbar";
import NFTS from "layouts/NFTS/NFTS";
import OfficialPartners from "layouts/OfficialPartners/OfficialPartners";
import ReserveNFTFor from "layouts/ReserveNFTFor/ReserveNFTFor";
import Roadmap from "layouts/Roadmap/Roadmap";
import React, { useEffect, useRef } from "react";
import styles from "./HomePage.module.css";
import Timer from "./Timer";
import discordHomeBtn from "assets/images/discordHomeBtn.png";
import bg_new from "assets/videos/bg_new_compressed.mp4";

function HomePage() {
  const video = useRef(null);

  useEffect(() => {
    video.current.play();
  }, []);

  return (
    <div className={styles.Home}>
      <SKCNFT />

      <button className={styles.discordHomeBtn}>
        <img src={discordHomeBtn} alt="" />
      </button>

      <div className="mb-150px">
        <div className={`${styles.heroSection}`}>
          <div class={styles.fullscreen_bg}>
            <video
              autoPlay
              loop
              muted
              playsInline
              className={styles.fullscreen_bg__video}
              src={bg_new}
              ref={video}
            />
          </div>

          <Navbar />
          <div className="">
            <Hero />
          </div>
        </div>
        <Timer />
      </div>
      <div className="mb-150px">
        <NFTS />
      </div>
      <div className="mb-150px" id="leaf-island">
        <LeefIsland />
      </div>
      <div className="mb-150px" id="roadmap">
        <Roadmap />
      </div>
      <div className="mb-150px">
        <Family />
      </div>
      <div className="mb-150px" id="partners">
        <OfficialPartners />
      </div>
      <div className="mb-150px">
        <ReserveNFTFor />
      </div>
      <div className="mb-200px">
        <FAQ />
      </div>
      <div className="mb-150px">
        <JoinCommunity />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
