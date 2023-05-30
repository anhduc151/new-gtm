import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import image1 from "../public/images/home-image1.png";
import image2 from "../public/images/home-image2.png";
import image3 from "../public/images/home-image3.png";
import { useEffect, useState } from "react";

export interface SliderhomeProps {}

export default function Sliderhome(props: SliderhomeProps) {
  const [settings, setSettings] = useState({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 600,
  });

  const handleResponsiveSlidesToShow = (): number => {
    if (window.innerWidth <= 768) {
      return 1;
    }
    return 3;
  };

  useEffect(() => {
    const updateSettings = () => {
      const newSettings = {
        ...settings,
        slidesToShow: handleResponsiveSlidesToShow(),
      };
      setSettings(newSettings);
    };

    updateSettings();
    window.addEventListener("resize", updateSettings);
    return () => {
      window.removeEventListener("resize", updateSettings);
    };
  }, [settings]);
  return (
    <div>
      <Slider {...settings}>
        <div
          className="slider_left aos-init aos-animate"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="slider-images aos-init aos-animate">
            <Image
              src={image1}
              alt=""
              className="slider-image aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="100"
            ></Image>
          </div>
          <h2 className="slider_about">About us</h2>
          <p className="slider_p">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Repellendus cumque sunt temporibus.
          </p>
          <h3 className="slider_learnmore">learn more</h3>
        </div>

        <div
          className="slider_left aos-init aos-animate"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="slider-images aos-init aos-animate">
            <Image
              src={image2}
              alt=""
              className="slider-image aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="100"
            ></Image>
          </div>
          <h2 className="slider_about">About us</h2>
          <p className="slider_p">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Repellendus cumque sunt temporibus.
          </p>
          <h3 className="slider_learnmore">learn more</h3>
        </div>

        <div
          className="slider_left aos-init aos-animate"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="slider-images aos-init aos-animate">
            <Image
              src={image3}
              alt=""
              className="slider-image aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="100"
            ></Image>
          </div>
          <h2 className="slider_about">About us</h2>
          <p className="slider_p">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Repellendus cumque sunt temporibus.
          </p>
          <h3 className="slider_learnmore">learn more</h3>
        </div>

        <div
          className="slider_left aos-init aos-animate"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="slider-images aos-init aos-animate">
            <Image
              src={image1}
              alt=""
              className="slider-image aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="100"
            ></Image>
          </div>
          <h2 className="slider_about">About us</h2>
          <p className="slider_p">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Repellendus cumque sunt temporibus.
          </p>
          <h3 className="slider_learnmore">learn more</h3>
        </div>

        <div
          className="slider_left aos-init aos-animate"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="slider-images aos-init aos-animate">
            <Image
              src={image2}
              alt=""
              className="slider-image aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="100"
            ></Image>
          </div>
          <h2 className="slider_about">About us</h2>
          <p className="slider_p">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Repellendus cumque sunt temporibus.
          </p>
          <h3 className="slider_learnmore">learn more</h3>
        </div>

        <div
          className="slider_left aos-init aos-animate"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="slider-images aos-init aos-animate">
            <Image
              src={image3}
              alt=""
              className="slider-image aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="100"
            ></Image>
          </div>
          <h2 className="slider_about">About us</h2>
          <p className="slider_p">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Repellendus cumque sunt temporibus.
          </p>
          <h3 className="slider_learnmore">learn more</h3>
        </div>

        <div
          className="slider_left aos-init aos-animate"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="slider-images aos-init aos-animate">
            <Image
              src={image1}
              alt=""
              className="slider-image aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="100"
            ></Image>
          </div>
          <h2 className="slider_about">About us</h2>
          <p className="slider_p">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Repellendus cumque sunt temporibus.
          </p>
          <h3 className="slider_learnmore">learn more</h3>
        </div>

        <div
          className="slider_left aos-init aos-animate"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="slider-images aos-init aos-animate">
            <Image
              src={image2}
              alt=""
              className="slider-image aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="100"
            ></Image>
          </div>
          <h2 className="slider_about">About us</h2>
          <p className="slider_p">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Repellendus cumque sunt temporibus.
          </p>
          <h3 className="slider_learnmore">learn more</h3>
        </div>

        <div
          className="slider_left aos-init aos-animate"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="slider-images aos-init aos-animate">
            <Image
              src={image3}
              alt=""
              className="slider-image aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="100"
            ></Image>
          </div>
          <h2 className="slider_about">About us</h2>
          <p className="slider_p">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Repellendus cumque sunt temporibus.
          </p>
          <h3 className="slider_learnmore">learn more</h3>
        </div>
      </Slider>
    </div>
  );
}
