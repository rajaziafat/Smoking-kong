import React from "react";
import styles from "./Family.module.css";
import familyimg1 from "assets/images/familyimg1.png";
import familyimg2 from "assets/images/familyimg2.png";
import familyimg3 from "assets/images/familyimg3.png";
import FamilyCard from "components/Cards/FamilyCard/FamilyCard";
import useMediaQuery from "hooks/useMediaQuery";
import { Fade } from "react-awesome-reveal";

function Family() {
  const isBellow1000px = useMediaQuery("(max-width : 1000px)");

  return (
    <div className="container-wrapper">
      {/* <Fade cascade triggerOnce> */}
      <div className="mb-50px">
        <div className={styles.titles}>
          <h1
            className={`text-center white weight-9 ${
              isBellow1000px ? "fs-24px" : "fs-48px"
            }  mb-10px`}
          >
            OUR FAMILY
          </h1>
          <p
            className={`${
              isBellow1000px ? "fs-14px opacity-0_7" : "fs-16px"
            } weight-4 white text-center font-open-sans lh-1_7`}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Comm ac
            morbi purus quis elit in vulputate.
          </p>
        </div>
      </div>

      <div className={styles.cards}>
        <Fade cascade triggerOnce direction="up">
          <FamilyCard img={familyimg1} title="Nerd 168" subtitle="Technology" />
          <FamilyCard
            img={familyimg2}
            title="Cactus jack"
            subtitle="Branding"
          />
          <FamilyCard
            img={familyimg3}
            title="Frenchy Gentiks"
            subtitle="Weed"
          />
        </Fade>
      </div>
      {/* </Fade> */}
    </div>
  );
}

export default Family;
