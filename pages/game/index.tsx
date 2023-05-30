import Navbar from "@/components/Navbar";
import Head from "next/head";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import game1 from "../../public/images/game1.png";
import game2 from "../../public/images/game2.png";
import game3 from "../../public/images/game3.png";
import game4 from "../../public/images/game4.png";
import game5 from "../../public/images/game5.png";
import Footer from "@/components/Footer";
import Link from "next/link";
import gamehader from "../../public/images/game-background.png";

export interface GameProps {}

export default function Game(props: GameProps) {
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    setShowHeader(true);
  }, []);
  return (
    <div>
      <Head>
        <title>Gametamin</title>
        <link rel="" href="/images/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <div className={`game_header ${showHeader ? "show" : ""}`}>
          <Image src={gamehader} alt="" className="game_header_imgs" />
        </div>

        <div className="game_content1">
          <div className="top1">
            <div className="game1 aos-init aos-animate" data-aos="fade-left">
              <h2 className="game_h2">traffic jam car puzzle </h2>
              <p className="game_p">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <button className="game_button">
                <Link href="/trafficnew">View more</Link>
              </button>
            </div>

            <div className="game2">
              <Image
                src={game1}
                alt=""
                className="game2_images aos-init aos-animate"
                data-aos="zoom-in-down"
              />
            </div>
          </div>

          <div className="top1">
            <div className="game2">
              <Image
                src={game2}
                alt=""
                className="game2_images aos-init aos-animate"
                data-aos="zoom-in-down"
              />
            </div>

            <div className="game1 aos-init aos-animate" data-aos="fade-right">
              <h2 className="game_h2">trafficjam car puzzle match 3</h2>
              <p className="game_p">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <button className="game_button">
                <Link href="/trafficbasic">View more</Link>
              </button>
            </div>
          </div>

          <div className="top1">
            <div className="game1 aos-init aos-animate" data-aos="fade-left">
              <h2 className="game_h2">Parking Jam </h2>
              <p className="game_p">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <button className="game_button">
                <Link href="/trafficbasic">View more</Link>
              </button>
            </div>

            <div className="game2">
              <Image src={game3} alt="" className="game2_images aos-init aos-animate"  data-aos="zoom-in-down"/>
            </div>
          </div>

          <div className="top1">
            <div className="game2">
              <Image src={game4} alt="" className="game2_images aos-init aos-animate" data-aos="zoom-in-down"/>
            </div>

            <div className="game1 aos-init aos-animate" data-aos="fade-right">
              <h2 className="game_h2">solitaỉre</h2>
              <p className="game_p">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <button className="game_button">
                <Link href="/solitaire">View more</Link>
              </button>
            </div>
          </div>

          <div className="top1">
            <div className="game1 aos-init aos-animate" data-aos="fade-left">
              <h2 className="game_h2">animal farm jam </h2>
              <p className="game_p">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <button className="game_button">
                <Link href="/animalfarmjam">View more</Link>
              </button>
            </div>

            <div className="game2">
              <Image src={game5} alt="" className="game2_images aos-init aos-animate"  data-aos="zoom-in-down"/>
            </div>
          </div>
        </div>

        <Footer />
      </main>
    </div>
  );
}
