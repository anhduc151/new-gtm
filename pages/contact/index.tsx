import Navbar from "@/components/Navbar";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import licensing from "../../public/images/contactpage1.png";
import contactcar from "../../public/images/contact-car.png";
import Footer from "@/components/Footer";
import { useEffect } from "react";
// import { animateScroll as scroll, Element } from "react-scroll";
import { TweenMax } from "gsap";
import { useRef } from "react";
import cowboys from "../../public/images/contact-caoboi.png";
import address from "../../public/images/contact-address.png";
import youtube1 from "../../public/images/contact-youtube1.png";
import facebook from "../../public/images/contact-facebook1.png";
import gmail from "../../public/images/contact-gmail.png";
import Link from "next/link";

export interface ContactProps {}

export default function Contact(props: ContactProps) {
  const licensingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const element = licensingRef.current;

      if (element) {
        const elementOffsetTop = element.offsetTop;
        const windowWidth = window.innerWidth;

        if (scrollPosition >= elementOffsetTop && windowWidth > 1300) {
          TweenMax.to(".contact_img1", 0.2, { scale: 1.6 });
        } else {
          TweenMax.to(".contact_img1", 0.2, { scale: 1 });
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <Head>
        <title>Gametamin</title>
        <link rel="" href="/images/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <div className="contact-infor-section">
          <div
            className="contact-card aos-init"
            data-aos="fade-left"
            data-aos-duration="500"
            data-aos-delay="200"
          >
            <div className="contact-panel">
              <p className="contact-panel-title">Facebook</p>
              <Link href={"https://www.facebook.com/gametaminsg"}>
                <Image src={facebook} alt=""></Image>
              </Link>
            </div>
          </div>
          <div
            className="contact-card aos-init"
            data-aos="fade-right"
            data-aos-duration="500"
            data-aos-delay="200"
          >
            <div className="contact-panel">
              <p className="contact-panel-title">Youtube</p>
              <Link
                href={
                  "https://www.youtube.com/channel/UCtqfA-BZLIcD2ouxgPlJPdg"
                }
              >
                <Image src={youtube1} alt=""></Image>
              </Link>
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="500"
            className="contact-card aos-init"
            data-aos-delay="200"
          >
            <div className="contact-panel">
              <p className="contact-panel-title">Address</p>
              <Link
                href={
                  "https://www.google.com/maps/place/Peninsula+Plaza+Singapore/@1.2923461,103.8486939,17z/data=!3m2!4b1!5s0x31da18475cfdd08b:0xbd1bedb2d3c0421f!4m5!3m4!1s0x31da19a1350d10f1:0xe471fd72f9ffcba1!8m2!3d1.2923407!4d103.8508826"
                }
              >
                <Image src={address} alt=""></Image>
              </Link>
            </div>
          </div>
          <div
            className="contact-card clickable-area aos-init"
            data-aos="fade-right"
            data-aos-duration="500"
            data-aos-delay="200"
          >
            <div className="contact-panel">
              <p className="contact-panel-title">Email</p>
              <Link href={"https://mail.google.com/mail/u/0/#inbox"}>
                <Image src={gmail} alt=""></Image>
              </Link>
            </div>
          </div>
          <Image className="character" src={cowboys} alt=""></Image>
        </div>

        <div ref={licensingRef} className="contact_licensing">
          <Image src={licensing} alt="" className="contact_img1" />
        </div>

        <div className="contact_form">
          <div
            className="form_contact aos-init aos-animate"
            data-aos="fade-right"
          >
            <div className="form_heading">
              <div className="form_name1">
                <h2
                  className="form_name1_h2 aos-init aos-animate"
                  data-aos="fade-right"
                  data-aos-delay="400"
                >
                  Do you need help with the game?
                </h2>
                <p
                  className="form_name1_p aos-init aos-animate"
                  data-aos="fade-right"
                  data-aos-delay="400"
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>

              <div className="form_image1">
                <Image
                  src={contactcar}
                  alt=""
                  className="contact_car aos-init aos-animate"
                  data-aos="fade-right"
                  data-aos-delay="400"
                />
              </div>
            </div>

            <div
              className="form_button aos-init aos-animate"
              data-aos="fade-right"
              data-aos-delay="400"
            >
              <input type="text" className="form_button_input" />
              <button className="form_button_btn">Send</button>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}
