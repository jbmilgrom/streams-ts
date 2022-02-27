import {Pair} from './pair';

export const EmptyList = "NULL";
type EmptyList = "NULL";

export type List<L> = Pair<L, List<L>> | EmptyList;

export const isEmpty = <T>(list: List<T>): list is "NULL" => list === "NULL";