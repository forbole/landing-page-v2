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
  "rgba(253, 59, 76, 0.3)",
  "rgba(253, 149, 59, 0.3)",
  "rgba(163, 106, 255, 0.3)",
  "rgba(253, 59, 171, 0.3)",
  "rgba(11, 180, 255, 0.3)",
  "rgba(0, 206, 119, 0.3)",
  "rgba(255, 167, 0, 0.3)",
  "rgba(59, 119, 253, 0.3)",
];

export const tagTextColors = [
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

export const generateTagTextColor = (index = 0) => {
  return tagTextColors[index % tagTextColors.length];
};
