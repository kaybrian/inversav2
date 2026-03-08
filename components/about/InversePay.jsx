import React from "react";

import Image from "next/image";

export default function InversePay() {
  return (
    <div className="why-area-1 space bg-theme shape-mockup-wrap">
      <div
        className="why-img-1-1 shape-mockup wow img-custom-anim-right animated"
        data-wow-duration="1.5s"
        data-wow-delay="0.2s"
        style={{ top: "-100px", right: "0px", bottom: "140px" }}
      >
        <Image
          width={838}
          height={778}
          src="/assets/img/products/inverse.png"
          alt="img"
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="title-area mb-45">
              <h2 className="sec-title">
                InversePay
              </h2>
            </div>
            <h4>Borderless Payments for a Global Africa.</h4>
            <p>
              Our flagship digital wallet and cross-border platform. 
              InversePay bypasses traditional banking silos to offer instant, 
              multi-currency transactions at a fraction of the cost.
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
}
