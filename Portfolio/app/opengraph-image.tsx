import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/data";

export const runtime = "edge";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(rgba(232,232,232,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(232,232,232,0.035) 1px, transparent 1px), linear-gradient(135deg, #101114 0%, #0b0c0f 100%)",
          backgroundSize: "56px 56px, 56px 56px, auto",
          color: "#e8e8e8",
          padding: "72px",
          position: "relative",
          overflow: "hidden",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: "32px",
            border: "1px solid rgba(232,232,232,0.18)",
            borderRadius: "4px",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            height: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "18px",
              color: "#ff4655",
              fontSize: 26,
              fontWeight: 700,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
            }}
          >
            <div
              style={{
                width: "74px",
                height: "1px",
                background:
                  "linear-gradient(90deg, rgba(255,70,85,0.95), transparent)",
              }}
            />
            {siteConfig.brand}
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
            <div
              style={{
                fontSize: 82,
                fontWeight: 700,
                letterSpacing: "-0.07em",
                lineHeight: 1,
                maxWidth: 930,
              }}
            >
              I build systems that compound without me.
            </div>
            <div
              style={{
                fontSize: 32,
                color: "#b9bbc0",
                maxWidth: 920,
                lineHeight: 1.3,
              }}
            >
              AI engineering, machine learning, and software systems.
            </div>
          </div>
        </div>
      </div>
    ),
  );
}
