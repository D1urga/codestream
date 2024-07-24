"use client";
import React, { useState } from "react";
import styles from "./styles/navbar.module.css";
import Link from "next/link";
import { FaBars, FaUser, faUser, FaUserCircle } from "react-icons/fa";

export default function Navbar() {
  const [isopen, setIsOpen] = useState(false);
  return (
    <div className={styles.main_div}>
      <p className={styles.title}>CodeStream</p>
      <ul className={isopen ? styles.list : styles.list1}>
        <li>
          <Link href="/" className={styles.link}>
            Data Structues
          </Link>
        </li>
        <li>
          <Link href="" className={styles.link}>
            Leetcode
          </Link>
        </li>
        <li>
          <Link href="" className={styles.link}>
            Code Snippets
          </Link>
        </li>
        <li>
          <Link href="" className={styles.link}>
            Explore
          </Link>
        </li>
      </ul>
      <FaUser className={styles.profile} />
      <FaBars
        className={styles.menu}
        onClick={() => {
          setIsOpen(!isopen);
        }}
      />
    </div>
  );
}
