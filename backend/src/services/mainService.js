import { parseInput } from "./parserService.js";
import { buildGraph } from "./graphService.js";
import { detectCycle } from "../utils/cycleDetector.js";
import { calculateDepth } from "../utils/depthCalculator.js";
import { buildTree } from "./treeService.js";
import { generateSummary } from "./summaryService.js";

export const processData = (data) => {
  const { validEdges, invalidEntries, duplicateEdges } = parseInput(data);

  const { adjList, childSet } = buildGraph(validEdges);

  const visitedGlobal = new Set();
  const hierarchies = [];

  const nodes = Object.keys(adjList);

  for (let node of nodes) {
    if (visitedGlobal.has(node)) continue;

    const visited = new Set();
    const recStack = new Set();

    const hasCycle = detectCycle(adjList, node, visited, recStack);

    for (let v of visited) visitedGlobal.add(v);

    let root = node;

    if (!hasCycle) {
      while (childSet.has(root)) {
        root = Object.keys(adjList).find(p =>
          adjList[p].includes(root)
        );
      }
    } else {
      root = [...visited].sort()[0];
    }

    if (hasCycle) {
      hierarchies.push({
        root,
        tree: {},
        has_cycle: true
      });
    } else {
      const tree = {
        [root]: buildTree(adjList, root)
      };

      const depth = calculateDepth(adjList, root);

      hierarchies.push({
        root,
        tree,
        depth
      });
    }
  }
  const summary = generateSummary(hierarchies);

  return {
    hierarchies,
    invalid_entries: invalidEntries,
    duplicate_edges: duplicateEdges,
    summary
  };
};
