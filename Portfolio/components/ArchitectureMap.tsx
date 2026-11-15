type ArchitectureMapProps = {
  nodes: { label: string; detail: string }[];
  flow: string[];
};

export function ArchitectureMap({ nodes, flow }: ArchitectureMapProps) {
  return (
    <div className="architecture-map" aria-label="Verified system architecture">
      <div className="architecture-nodes">
        {nodes.map((node, index) => (
          <article className="architecture-node" key={node.label}>
            <span className="architecture-node-index">0{index + 1}</span>
            <h3>{node.label}</h3>
            <p>{node.detail}</p>
          </article>
        ))}
      </div>
      <div className="architecture-flow">
        <p className="hero-metadata">Runtime flow</p>
        <ol>
          {flow.map((step, index) => (
            <li key={step}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {step}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
