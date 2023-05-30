import Image from "next/image";
import * as React from "react";
import logofooter from "../public/images/logofooter.png";
import facebook from "../public/images/facebook-icon.png";
import messenger from "../public/images/messenger-icons.png";
import zalo from "../public/images/zalo-icons.png";
import telegram from "../public/images/telegram-icons.png";
import youtube from "../public/images/youtube-icons.png";
import Link from "next/link";

export interface FooterProps {}

export default function Footer(props: FooterProps) {
  return (
    <div className="footer">
      <div className="footer_one">
        <div className="footer_one_child">
          <Image src={logofooter} alt="" className="footer_image_logo" />
          <div className="footer_p_pad">
            <p className="footer_p">
              Gametamin is a Singapore based company - a game maker studio
              specializing in designing and producing mobile games.
            </p>
          </div>
        </div>
      </div>

      <div className="footer_two">
        <div className="footer_two_child">
          <h4 className="footer_child_review">Company</h4>
          <p className="footer_child1"><Link href="/contact">Contact</Link></p>
          <p className="footer_child1"><Link href="/terms">Term</Link></p>
          <p className="footer_child1"><Link href="/privacy">Privacy</Link></p>
        </div>
      </div>

      {/* <div className="footer_three">
        <div className="footer_three_child">
          <h4 className="footer_child_review">Thông tin</h4>
          <p className="footer_child1">Kết quả</p>
        </div>
      </div> */}

      <div className="footer_four">
        <h4 className="Footer_contact">Contact: </h4>
        <div className="Footer_four_icons">
          <Image src={facebook} alt="" className="Footer-image-contact" />
          <Image src={messenger} alt="" className="Footer-image-contact" />
          <Image src={youtube} alt="" className="Footer-image-contact" />
          <Image src={telegram} alt="" className="Footer-image-contact" />
          <Image src={zalo} alt="" className="Footer-image-contact" />
        </div>
      </div>
    </div>
  );
}
