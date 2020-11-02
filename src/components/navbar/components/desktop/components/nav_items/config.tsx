export const formatLanguageList = (languages: any) => {
  return languages.map((x: any) => ({
    key: x.key,
    text: x.display,
    value: x.key,
  }));
};
