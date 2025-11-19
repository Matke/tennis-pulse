/**
 * Joins all classes strings
 * @param classes strings of tailwind classes
 * @returns concatenated classes
 */
export const classNames = (...classes: any) =>
  classes.filter(Boolean).join(" ");
