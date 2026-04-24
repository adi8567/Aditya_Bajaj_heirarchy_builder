import { isValidEdge } from "../utils/validator.js";

export const parseInput = (data) => {
  const validEdges = [];
  const invalidEntries = [];
  const duplicateEdges = [];

  const seen = new Set();

  for (let item of data) {
    const trimmed = typeof item === "string" ? item.trim() : "";

    if (!isValidEdge(trimmed)) {
      invalidEntries.push(item);
      continue;
    }

    if (seen.has(trimmed)) {
      if (!duplicateEdges.includes(trimmed)) {
        duplicateEdges.push(trimmed);
      }
      continue;
    }

    seen.add(trimmed);
    validEdges.push(trimmed);
  }

  return {
    validEdges,
    invalidEntries,
    duplicateEdges
  };
};