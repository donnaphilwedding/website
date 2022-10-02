export const merge = (...classes: (string | undefined | null)[]) => {
  return classes.filter(Boolean).join(' ');
};
