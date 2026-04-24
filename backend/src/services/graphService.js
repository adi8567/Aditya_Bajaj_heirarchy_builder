export const buildGraph = (edges) => {
  const adjList = {};
  const childSet = new Set();
  const parentMap = {};

  for (let edge of edges) {
    const [parent, child] = edge.split("->");

    // Handle multi-parent case
    if (parentMap[child]) continue;

    parentMap[child] = parent;

    if (!adjList[parent]) adjList[parent] = [];
    adjList[parent].push(child);

    if (!adjList[child]) adjList[child] = [];

    childSet.add(child);
  }

  return { adjList, childSet };
};