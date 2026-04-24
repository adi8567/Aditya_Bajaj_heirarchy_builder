export const buildTree = (adjList, node) => {
  const result = {};

  if (!adjList[node] || adjList[node].length === 0) {
    return {};
  }

  for (let child of adjList[node]) {
    result[child] = buildTree(adjList, child);
  }

  return result;
};