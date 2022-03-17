import Button from "components/Button/Button";
import React from "react";
import styles from "./Footer.module.css";
import discordIcon from "assets/images/social-icons/discord.png";
import openseaIcon from "assets/images/social-icons/opensea.png";
import instagramIcon from "assets/images/social-icons/instagram.png";
import twitterIcon from "assets/images/social-icons/twitter.png";
import logo from "assets/images/logo.png";
import { Link } from "react-router-dom";
import useMediaQuery from "hooks/useMediaQuery";
import { Fade } from "react-awesome-reveal";

function Footer() {
  const isBellow1000px = useMediaQuery("(max-width : 1000px)");
  const isBellow500px = useMediaQuery("(max-width : 500px)");

  return (
    <div className="container-wrapper">
      {/* <Fade cascade delay={300} triggerOnce duration={500}> */}
      <div className={`${styles.footerHead} mb-35px`}>
        <h1
          className={`white  weight-9 uppercase ${
            isBellow1000px ? "text-center fs-30px" : "fs-40px"
          }`}
        >
          SUBSCRIBE AND FOLLOW
        </h1>
        <div className={styles.footerHeadBottom}>
          <form
            onSubmit={(e) => e.preventDefault()}
            className={`${styles.subscribe} mb-30px`}
          >
            <input
              type="email"
              placeholder="Enter your mail"
              className={`${
                isBellow500px ? "fs-14px" : "fs-16px"
              }  white weight-5`}
            />
            <Button
              title="SUBSCRIBE"
              type="submit"
              fontSize={isBellow500px ? "fs-14px" : "16px"}
            />
          </form>
          <div className={`${styles.socialIcons} mb-35px`}>
            <a href="/" target="_blank">
              <img src={twitterIcon} alt="" />
            </a>
            <a href="/" target="_blank">
              <img src={instagramIcon} alt="" />
            </a>
            <a href="/" target="_blank">
              <img src={openseaIcon} alt="" />
            </a>
            <a href="/" target="_blank">
              <img src={discordIcon} alt="" />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <img src={logo} className={styles.logo} alt="" />
        <div className={styles.otherLinks}>
          <Link
            to="/"
            className={`${
              isBellow500px ? "fs-14px" : "fs-16px"
            }  white weight-5 pointer`}
          >
            Privacy Policy
          </Link>
          <Link
            to="/"
            className={`${
              isBellow500px ? "fs-14px" : "fs-16px"
            }  white weight-5 pointer`}
          >
            Terms of Service
          </Link>
        </div>
      </div>
      {/* </Fade> */}
    </div>
  );
}

export default Footer;
