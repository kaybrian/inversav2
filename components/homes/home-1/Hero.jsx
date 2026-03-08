import React from "react";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="hero-wrapper hero-1" id="hero">
      <div className="container">
        <div className="hero-style1">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="hero-title wow img-custom-anim-left animated">
                Architecting Africa’s
              </h1>

              <h1 className="hero-title text-lg-end wow img-custom-anim-right animated">
                Digital Renaissance
              </h1>
            </div>
            <div className="col-lg-6 offset-lg-6">
              <p className="hero-text wow img-custom-anim-right animated">
                Inversa, Inc. is a global technology powerhouse building the intelligent software and connected infrastructure that powers the continent’s next generation of growth.
              </p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
