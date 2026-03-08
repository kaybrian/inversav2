"use client";
import Image from "next/image";
import MobileMenuSocials from "./MobileMenuSocials";
import Link from "next/link";
import addGsap from "@/utils/addGsap";
import { useEffect } from "react";

export default function SideMenu({ isOpen, setIsOpen }) {
  useEffect(() => {
    addGsap();
  }, []);

  return (
    <div className={`sidemenu-wrapper  ${isOpen ? "show" : ""}`}>
      <div className="sidemenu-content">
        <button
          className="closeButton sideMenuCls"
          onClick={() => setIsOpen(false)}
        >
          <Image
            width={24}
            height={24}
            src="/assets/img/icon/close.svg"
            alt="icon"
          />
        </button>
        <div className="widget footer-widget">
          <div className="widget-about">
            <div className="footer-logo">
              <Link scroll={false} href="/">
                <Image
                  width={86}
                  height={24}
                  src="/assets/img/white.png"
                  alt="Ovation"
                />
              </Link>
            </div>
            <p className="about-text">
              Inversa, Inc. is a global technology powerhouse building the intelligent software and connected infrastructure that powers the continent’s next generation of growth.
            </p>
            <div className="sidebar-wrap">
              <h6>1111B S Governors Ave STE 39997</h6>
              <h6>Dover, DE 19904, USA</h6>
            </div>
            <div className="sidebar-wrap">
              <h6>
                <a href="tel:+250791703946">+250 791 703 946 </a>
              </h6>
              <h6>
                <a href="mailto:support@inversa-inc.xyz">support@inversa-inc.xyz</a>
              </h6>
            </div>
            
          </div>
        </div>
        <div className="d-flex justify-content-end">
          <Link
            scroll={false}
            href="https://calendly.com/inversa-inc-support/30min"
            className="chat-btn gsap-magnetic"
          >
            Let’s Talk with us
          </Link>
        </div>
      </div>
    </div>
  );
}
