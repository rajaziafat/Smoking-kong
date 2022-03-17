import Accordion from "components/Accordion/Accordion";
import { Fade } from "react-awesome-reveal";
import styles from "./FAQ.module.css";

function FAQ() {
  return (
    <div className="container-wrapper">
      {/* <Fade triggerOnce fraction={0.5} cascade> */}
      <h1 className="text-center white weight-9 fs-48px mb-40px">FAQ</h1>
      <div className={styles.accordions}>
        {/* <Fade
            triggerOnce
            fraction={0.5}
            duration={500}
            cascade
            direction="down"
          > */}
        <Accordion
          question="What is the Smoking Kong Club?"
          answer="Smoking Kong Club is an exclusive club that grants you VIP access to more than 1000 coffee shops worldwide. Get exclusive promotions, sales, and discounts on a regular basis as well as invitations to premium events."
        />
        <Accordion
          question="What is the LEEF ISLAND metaverse? "
          answer="Smoking Kong Club is an exclusive club that grants you VIP access to more than 1000 coffee shops worldwide. Get exclusive promotions, sales, and discounts on a regular basis as well as invitations to premium events."
        />
        <Accordion
          question="How many Smoking Kong NFTs will be available? "
          answer="Smoking Kong Club is an exclusive club that grants you VIP access to more than 1000 coffee shops worldwide. Get exclusive promotions, sales, and discounts on a regular basis as well as invitations to premium events."
        />
        <Accordion
          question="What will be the mint price? "
          answer="Smoking Kong Club is an exclusive club that grants you VIP access to more than 1000 coffee shops worldwide. Get exclusive promotions, sales, and discounts on a regular basis as well as invitations to premium events."
        />
        <Accordion
          question="How can I get GreenList?"
          answer="Smoking Kong Club is an exclusive club that grants you VIP access to more than 1000 coffee shops worldwide. Get exclusive promotions, sales, and discounts on a regular basis as well as invitations to premium events."
        />
        <Accordion
          question="How can I use my NFT? "
          answer="Smoking Kong Club is an exclusive club that grants you VIP access to more than 1000 coffee shops worldwide. Get exclusive promotions, sales, and discounts on a regular basis as well as invitations to premium events."
        />
        <Accordion
          question="What is $Leef Coin?"
          answer="Smoking Kong Club is an exclusive club that grants you VIP access to more than 1000 coffee shops worldwide. Get exclusive promotions, sales, and discounts on a regular basis as well as invitations to premium events."
        />
        {/* </Fade> */}
      </div>
      {/* </Fade> */}
    </div>
  );
}

export default FAQ;
