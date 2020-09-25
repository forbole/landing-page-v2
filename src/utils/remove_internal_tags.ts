export const removeInternalTags = (tags: any[]) => {
  return tags.filter((x) => x.visibility == "public");
};
