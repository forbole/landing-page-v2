export const fakeTags = [
  "big dipper",
  "cosmos",
  "desmos",
  "blockchain",
  "validator",
  "protocol",
  "community",
  "security",
  "scale",
  "snacks",
];

export const tagColors = [
  "rgba(253, 59, 76, 1)",
  "rgba(253, 149, 59, 1)",
  "rgba(163, 106, 255, 1)",
  "rgba(253, 59, 171, 1)",
  "rgba(11, 180, 255, 1)",
  "rgba(0, 206, 119, 1)",
  "rgba(255, 167, 0, 1)",
  "rgba(59, 119, 253, 1)",
];

export const generateBackgroundColor = (index = 0) => {
  return tagColors[index % tagColors.length];
};
