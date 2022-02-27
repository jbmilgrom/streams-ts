import { Pair, pair } from "./pair";

export const EmptyList = "NULL";
type EmptyList = typeof EmptyList;

export type List<L> = Pair<L, List<L>> | EmptyList;

export const isEmpty = <T>(list: List<T>): list is EmptyList => list === EmptyList;

export const makeList = <T>(array: T[]): List<T> => {
  if (array.length === 0) {
    return EmptyList;
  }

  const rest = array.slice(1, array.length);
  return pair(array[0], makeList(rest));
};
