export const calculateDepth = (adjList, node) => {
  if (!adjList[node] || adjList[node].length === 0) return 1;

  let maxDepth = 0;

  for (let child of adjList[node]) {
    maxDepth = Math.max(maxDepth, calculateDepth(adjList, child));
  }

  return maxDepth + 1;
};