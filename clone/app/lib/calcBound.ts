export const calc_bound = (target: number, length: number) => {
  if (target === 0) target = length - 1;
  if (target === length) target = 1;
  return target;
};
