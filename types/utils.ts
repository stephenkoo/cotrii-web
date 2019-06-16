/**
 * StrictUnion
 *
 * Makes a union 'strict', such that members are disallowed from including the
 * keys of other members For example, {x: 1, y: 1} is a valid member of
 * {x: number} | {y: number}, but it's not a valid member of
 * StrictUnion<{x: number} | {y: number}>.
 *
 * https://stackoverflow.com/questions/56454289/typescript-utility-to-union-multiple-types-that-each-intersect-to-a-single-base
 * https://stackoverflow.com/questions/52677576/typescript-discriminated-union-allows-invalid-state/52678379#52678379
 * https://github.com/andnp/SimplyTyped#strictunion
 */
type UnionKeys<T> = T extends any ? keyof T : never;
type StrictUnionHelper<T, TAll> = T extends any
  ? T & Partial<Record<Exclude<UnionKeys<TAll>, keyof T>, never>>
  : never;

export type StrictUnion<T> = StrictUnionHelper<T, T>;
