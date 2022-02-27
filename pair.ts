export interface Pair<L, R> {
  left: L;
  right: R;
}

export const left = <L, R>(pair: Pair<L, R>) => pair.left;
export const right = <L, R>(pair: Pair<L, R>) => pair.right;
export const pair = <L, R>(left: L, right: R) => ({ left, right });
