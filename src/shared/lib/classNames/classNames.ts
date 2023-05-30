export type Mods = Record<string, boolean | string | undefined>;

export function classNames(
  cls: string,
  mods: Mods = {},
  additional: Array<string | undefined> = [],
): string {
  return [
    cls,
    ...additional,
    ...Object.entries(mods)
      .filter(([key, value]) => Boolean(value))
      .map(([key, value]) => key),
  ].join(" ");
}
