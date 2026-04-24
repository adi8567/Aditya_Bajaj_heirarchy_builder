export const isValidEdge = (edge) => {
  if (typeof edge !== "string") return false;

  const trimmed = edge.trim();

  // Regex check
  const regex = /^[A-Z]->[A-Z]$/;
  if (!regex.test(trimmed)) return false;

  const [parent, child] = trimmed.split("->");

  // Reject self-loop
  if (parent === child) return false;

  return true;
};