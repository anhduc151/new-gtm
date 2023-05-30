import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Sliderabout from "@/components/Sliderabout";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import aboutus from "../../public/images/aboutus.png";

export interface AboutUsProps {}

export default function AboutUs(props: AboutUsProps) {
  return (
    <div>
      <Head>
        <title>Gametamin</title>
        <link rel="" href="/images/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <div className="about_pages">
          <div className="about_heasding">
            <div className="about_heasding_img">
              <Image src={aboutus} alt="" className="about_heasding_images" />
            </div>
            <p className="about_heasing_p">
              Our mission is to bring the best value to users of all ages with
              different styles, at any time, and anywhere. Convenience,
              flexibility, and fun are what we aim for.
            </p>
            <p className="about_heasing_p">
              Our aim is to become a globally integrated enterprise with
              sustainable development in the gaming industry. In the next 5
              years, the main goal is to reach the top 30 largest mobile gaming
              companies in the world.
            </p>
          </div>

          <div className="about_header">
            <div
              className="about_head aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h2 className="about_h2">About Us</h2>
            </div>

            <div className="about_righter1 aos-init" data-aos="fade-left">
              <Sliderabout />
            </div>
          </div>

          <div className="about_banding">
            <div className="about_banding_box aos-init aos-animate" data-aos="zoom-in">
              <div className="about_banding_h2">
                <h2 className="about_banding-contact">Contact</h2>
              </div>

              <div className="about_box_child">
                <div className="box_child1">
                  <div className="box_name">
                    <h4 className="box_child1_name">Instagram</h4>
                  </div>
                  <div className="about_icons">
                    <i className="bx bxl-instagram-alt"></i>
                  </div>
                </div>

                <div className="box_child1">
                  <div className="box_name">
                    <h4 className="box_child1_name">Twitter</h4>
                  </div>
                  <div className="about_icons">
                    <i className="bx bxl-twitter"></i>
                  </div>
                </div>

                <div className="box_child1">
                  <div className="box_name">
                    <h4 className="box_child1_name">facebook</h4>
                  </div>
                  <div className="about_icons">
                    <i className="bx bxl-facebook"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}
