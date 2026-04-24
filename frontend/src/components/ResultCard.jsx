import TreeView from "./TreeView";

const ResultCard = ({ item }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        margin: "10px 0",
        padding: "10px",
        borderRadius: "8px",
      }}
    >
      <h3>Root: {item.root}</h3>

      {item.has_cycle ? (
        <p style={{ color: "red" }}>Cycle Detected</p>
      ) : (
        <>
          <TreeView tree={item.tree} />
          <p><b>Depth:</b> {item.depth}</p>
        </>
      )}
    </div>
  );
};

export default ResultCard;