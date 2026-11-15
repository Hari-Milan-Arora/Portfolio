import Image from "next/image";

type OperatorVisualProps = {
  portrait?: { src: string; alt: string };
};

/** Renders the supplied portrait with a replaceable asset slot for future art direction. */
export function OperatorVisual({ portrait }: OperatorVisualProps) {
  return (
    <figure className="operator-visual">
      <div className="operator-stage">
        {portrait ? (
          <Image
            src={portrait.src}
            alt={portrait.alt}
            fill
            sizes="(min-width: 1200px) 38vw, (min-width: 768px) 52vw, 92vw"
            priority
            className="operator-portrait"
          />
        ) : (
          <div className="operator-study" aria-hidden="true">
            <div className="operator-halo" />
            <div className="operator-shard operator-shard-one" />
            <div className="operator-shard operator-shard-two" />
            <div className="operator-shard operator-shard-three" />
            <div className="operator-figure">
              <div className="operator-coat operator-coat-left" />
              <div className="operator-coat operator-coat-right" />
              <div className="operator-chest" />
              <div className="operator-neck" />
              <div className="operator-head">
                <div className="operator-hair" />
                <div className="operator-face">
                  <span className="operator-eye operator-eye-left" />
                  <span className="operator-eye operator-eye-right" />
                  <span className="operator-face-shadow" />
                </div>
                <div className="operator-ear" />
                <div className="operator-comms" />
              </div>
              <div className="operator-collar" />
              <span className="operator-chest-mark">HMA / 01</span>
              <span className="operator-stripe operator-stripe-one" />
              <span className="operator-stripe operator-stripe-two" />
              <span className="operator-rim-light" />
            </div>
          </div>
        )}
        {portrait ? (
          <div className="operator-portrait-overlay" aria-hidden="true">
            <span>HMA—01 / Operator profile</span>
            <strong>HARI MILAN ARORA</strong>
          </div>
        ) : null}
      </div>
    </figure>
  );
}
