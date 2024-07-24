import React from "react";
import styles from "./styles/footer.module.css";
import {
  FaFacebook,
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  const txt = `Welcome to CodeStream, your ultimate destination for mastering the art of coding. Whether you're a seasoned developer
   or just starting your journey, we offer a wealth of resources to enhance your skills and inspire your creativity.`;
  return (
    <div className={styles.main_div}>
      <div className={styles.outer_div}>
        <div className={styles.div1}>
          <p className={styles.d1p1}>CodeStream</p>
          <p className={styles.d1p2}>Empowering Coders & Developers</p>
          <p className={styles.pp}>{txt}</p>
        </div>
        <div className={styles.div2}>
          <p className={styles.d2p1}>Leetcode</p>
          <p className={styles.pp}>Basics</p>
          <p className={styles.pp}>Data Structures</p>{" "}
          <p className={styles.pp}>Algorithms</p>{" "}
          <p className={styles.pp}>Tricks</p>{" "}
          <p className={styles.pp}>Optimise</p>
        </div>
        <div className={styles.div3}>
          {" "}
          <p className={styles.d2p1}>Learning</p>
          <p className={styles.pp}>Learn Java</p>
          <p className={styles.pp}>Learn C++</p>
          <p className={styles.pp}>Learn Python</p>
          <p className={styles.pp}>Learn JavaScript</p>
          <p className={styles.pp}>More practice paths</p>
        </div>
        <div className={styles.div4}>
          {" "}
          <p className={styles.d2p1}>Miscellaneous</p>{" "}
          <p className={styles.pp}>Blogs</p>{" "}
          <p className={styles.pp}>CodeStream For Colleges</p>{" "}
          <p className={styles.pp}>Contests</p>{" "}
          <p className={styles.pp}>Contact Us</p>
          <p className={styles.pp}>Privacy Policy</p>
        </div>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.icons}>
        <FaInstagram className={styles.icon} />
        <FaLinkedinIn className={styles.icon} />
        <FaFacebookF className={styles.icon} />{" "}
        <FaTwitter className={styles.icon} />{" "}
        <FaGithub className={styles.icon} />
      </div>
      <div className={styles.intro}>
        <p className={styles.pp1}>Designed and Developed by</p>
        <p className={styles.pp2}>Anoop Kumar Chaudhary</p>
      </div>
    </div>
  );
}
