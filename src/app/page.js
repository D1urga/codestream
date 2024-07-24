import Image from "next/image";
import styles from "./page.module.css";
import { Arsenal } from "next/font/google";
import {
  FaBriefcase,
  FaBriefcaseMedical,
  FaPen,
  FaShareAlt,
  FaTree,
} from "react-icons/fa";
const inter = Arsenal({ subsets: ["latin"], weight: "400" });

export default function Home() {
  const txt1 = ` Welcome to CodeStream, your ultimate destination for mastering the art
          of coding. Whether you're a seasoned developer or just starting your
          journey, we offer a wealth of resources to enhance your skills and
          inspire your creativity.`;
  return (
    <main className={styles.main}>
      <div className={styles.div1}>
        <h2
          className={styles.intro1}
          style={{ fontFamily: inter.style.fontFamily }}
        >
          Empowering Coders & Developers
        </h2>
        <h3 className={styles.intro2}>{txt1}</h3>
        <button className={styles.btn}>Explore Now</button>
      </div>
      <div className={styles.div2}>
        <div className={styles.outer_div}>
          <img src="/img1.jpg" className={styles.img}></img>
          <div className={styles.title}>
            <FaShareAlt className={styles.icons} />
            <p className={styles.p1}>Data Structures & Algorithms</p>
          </div>
          <div className={styles.track}></div>
          <p className={styles.p2}>You are 0% there</p>
          <p className={styles.p3}>
            Learn and Practice problems on data structures and algorithms like
            Linked Lists, Stacks, Queues,
          </p>
        </div>
        <div className={styles.outer_div}>
          <div className={styles.title}>
            <FaPen className={styles.icons} />
            <p className={styles.p1}>Skill Tests</p>
          </div>

          <p className={styles.p3} style={{ marginTop: "10px" }}>
            Test your programming skills. Get instant results and course
            suggestions
          </p>
        </div>
      </div>
    </main>
  );
}
