export const detectCycle = (adjList, node, visited, recStack) => {
  if (!visited.has(node)) {
    visited.add(node);
    recStack.add(node);

    for (let neighbor of adjList[node] || []) {
      if (!visited.has(neighbor) &&
          detectCycle(adjList, neighbor, visited, recStack)) {
        return true;
      } else if (recStack.has(neighbor)) {
        return true;
      }
    }
  }

  recStack.delete(node);
  return false;
};