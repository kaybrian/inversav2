import React from "react";

import Image from "next/image";

export default function Harambee() {
    return (
        <div className="why-area-1 space shape-mockup-wrap">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="title-area mb-45">
                            <h2 className="sec-title">
                                Harambee
                            </h2>
                        </div>
                        <h4>Powering Community-Led Growth.</h4>
                        <p>
                            A next-generation donation-based crowdfunding platform. Harambee leverages the spirit of African communal support, digitizing "pulling together" to fund education, healthcare, and innovation.
                        </p>

                    </div>
                </div>
            </div>
            <div
                className="why-img-1-1 shape-mockup wow img-custom-anim-right animated"
                data-wow-duration="1.5s"
                data-wow-delay="0.2s"
                style={{ top: "-100px", right: "0px", bottom: "140px" }}
            >
                <Image
                    width={838}
                    height={778}
                    src="/assets/img/products/cover.png"
                    alt="img"
                    style={{ width: "100%", height: "100%", objectFit: "contain" }}

                />
            </div>
            
        </div>
    );
}
