export const parseDescription = (description: string) => {
  return description.split('\n').map((line) => line);
};
