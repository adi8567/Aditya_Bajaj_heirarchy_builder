const TreeView = ({ tree }) => {
  const render = (node) => {
    return (
      <ul className="tree">
        {Object.entries(node).map(([key, value]) => (
          <li key={key}>
            <span className="node">{key}</span>
            {Object.keys(value).length > 0 && render(value)}
          </li>
        ))}
      </ul>
    );
  };

  return (
  <div
    className="tree-container"
    style={{
      display: "flex",
      justifyContent: "center",
      marginTop: "10px"
    }}
  >
    {render(tree)}
  </div>
);
};

export default TreeView;