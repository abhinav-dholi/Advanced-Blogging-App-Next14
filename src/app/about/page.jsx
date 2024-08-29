import Image from "next/image";
import React from "react";
import styles from "./about.module.css";

export const metadata = {
  title: 'About Page',
  description: 'About Description',
}
const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subTitle}>About Agency</h2>
        <h1 className={styles.title}>
          We create digital ideas that are bigger, bolder, braver and better.
        </h1>
        <p className={styles.desc}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint facilis
          sequi enim ex placeat? Id odit ut reprehenderit, provident molestias
          sapiente maxime dolore eaque. Magnam cumque asperiores optio
          repudiandae voluptatem.
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/about.png" alt="About Image" fill  className={styles.img}/>
      </div>
    </div>
  );
};

export default AboutPage;
