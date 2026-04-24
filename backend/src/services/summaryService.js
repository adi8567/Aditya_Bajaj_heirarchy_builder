export const generateSummary = (hierarchies) => {
  let totalTrees = 0;
  let totalCycles = 0;
  let maxDepth = 0;
  let largestTreeRoot = "";

  for (let item of hierarchies) {
    if (item.has_cycle) {
      totalCycles++;
    } else {
      totalTrees++;

      if (
        item.depth > maxDepth ||
        (item.depth === maxDepth && item.root < largestTreeRoot)
      ) {
        maxDepth = item.depth;
        largestTreeRoot = item.root;
      }
    }
  }

  return {
    total_trees: totalTrees,
    total_cycles: totalCycles,
    largest_tree_root: largestTreeRoot
  };
};