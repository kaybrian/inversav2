import React from "react";

import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="about-area-1 space bg-theme shape-mockup-wrap">
      <div
        className="about-img-1-1 shape-mockup img-custom-anim-left wow animated "
        style={{
          top: "-100px",
          left: "0px",
          bottom: "140px",
          visibility: "visible",
        }}
        data-left="0"
        data-top="-100px"
        data-bottom="140px"
        data-wow-duration="1.5s"
        data-wow-delay="0.1s"
      >
        <Image
          width={838}
          height={730}
          src="/assets/img/normal/eco.jpg"
          alt="img"
        />
      </div>
      <div className="container">
        <div className="row align-items-center justify-content-end">
          <div className="col-lg-6">
            <div className="overflow-hidden">
              <div className="about-content-wrap ">
                <div className="title-area mb-0">
                  <h2 className="sec-title">
                    Beyond Code. We Build Ecosystems.
                  </h2>
                  <p className="sec-text mt-35">
                    At Inversa, we don’t just build apps; we solve systemic friction. As the parent company behind a growing suite of fintech and social-impact softwares, we bridge the gap between complex infrastructure and human-centric design.
                  </p>
                  <p className="sec-text mt-30">
                   From cross-border liquidity to community-led financing, our mission is to create the tools that enable billions to send, spend, save, and grow.
                  </p>
                  <div className="btn-wrap mt-50">
                    <Link scroll={false} href="#" className="link-btn">
                      <span className="link-effect">
                        <span className="effect-1">ABOUT US</span>
                        <span className="effect-1">ABOUT US</span>
                      </span>
                      <Image
                        width={13}
                        height={13}
                        src="/assets/img/icon/arrow-left-top.svg"
                        alt="icon"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
