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
            "radial-gradient(circle at top left, rgba(125,211,252,0.22), transparent 28%), linear-gradient(180deg, #050816 0%, #070d1a 100%)",
          color: "#edf2ff",
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
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "32px",
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
              color: "#7dd3fc",
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
                  "linear-gradient(90deg, rgba(125,211,252,0.95), transparent)",
              }}
            />
            {siteConfig.name}
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
                color: "#c8d2f0",
                maxWidth: 920,
                lineHeight: 1.3,
              }}
            >
              AI-first products, strategic leverage, and venture-scale thinking.
            </div>
          </div>
        </div>
      </div>
    ),
  );
}

