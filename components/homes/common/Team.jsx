'use client';

import React from "react";

import Image from "next/image";
import Link from "next/link";

import { teamData } from "@/data/team";

export default function Team() {
  return (
    <section style={{ padding: "72px 0", background: "#fafafa" }}>
      <div className="container">

        {/* Heading */}
        <div className="row justify-content-center" style={{ marginBottom: "52px" }}>
          <div className="col-lg-6 text-center">
            <span
              style={{
                display: "inline-block",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "3px",
                textTransform: "uppercase",
                color: "var(--theme-color)",
                marginBottom: "10px",
              }}
            >
              Backed By
            </span>
            <h2
              className="sec-title"
              style={{ fontSize: "clamp(24px, 4vw, 36px)", marginBottom: 0 }}
            >
              Our Investors
            </h2>
          </div>
        </div>

        {/* Logo grid */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            gap: "28px",
          }}
        >
          {teamData.map((elm, i) => (
            <Link
              key={i}
              scroll={false}
              href={elm.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "220px",
                  padding: "40px 32px 28px",
                  background: "#ffffff",
                  border: "1px solid #e8e8e8",
                  borderRadius: "14px",
                  boxShadow: "0 1px 8px rgba(0,0,0,0.05)",
                  transition: "box-shadow 0.22s ease, transform 0.22s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 8px 28px rgba(0,0,0,0.12)";
                  e.currentTarget.style.transform = "translateY(-5px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "0 1px 8px rgba(0,0,0,0.05)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                {/* Logo */}
                <div
                  style={{
                    position: "relative",
                    width: "140px",
                    height: "70px",
                    marginBottom: "20px",
                  }}
                >
                  <Image
                    fill
                    src={elm.imageSrc}
                    alt={`${elm.name} logo`}
                    style={{ objectFit: "contain" }}
                    sizes="140px"
                  />
                </div>

                {/* Name */}
                <span
                  style={{
                    fontSize: "13px",
                    fontWeight: 600,
                    letterSpacing: "0.4px",
                    color: "#333",
                    textAlign: "center",
                  }}
                >
                  {elm.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
