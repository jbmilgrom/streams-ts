const dispatch = () => {};

const select = () => {};

interface Pair<L, R> {
  left: L;
  right: R;
}

const left = <L, R>(pair: Pair<L, R>) => pair.left;
const right = <L, R>(pair: Pair<L, R>) => pair.right;
const pair = <L, R>(left: L, right: R) => ({ left, right });

const EmptyList = "NULL";
type EmptyList = "NULL";

type List<L> = Pair<L, List<L>> | EmptyList;

const makeList = <T>(array: T[]): List<T> => {
  if (array.length === 0) {
    return "NULL";
  }

  const rest = array.slice(1, array.length);
  return pair(array[0], makeList(rest));
};

const isEmpty = <T>(list: List<T>): list is "NULL" => list === "NULL";

const forEach = <T>(list: List<T>, effect: (item: T) => void) => {
  if (isEmpty(list)) {
    return;
  }
  effect(left(list));
  forEach(right(list), effect);
};

const printList = <T>(list: List<T>) =>
  forEach(list, (item) => console.log(item));

const map = <T>(list: List<T>, fn: (item: T) => T): List<T> => {
  if (isEmpty(list)) {
    return EmptyList;
  }
  return pair(fn(left(list)), map(right(list), fn));
};

const enumerateInterval = (low: number, high: number): List<number> => {
    if (low > high) {
        return EmptyList;
    }
    return pair(low, enumerateInterval(low + 1, high));
}

const indexesUpTo6 = makeList([0, 1, 2, 3, 4, 5, 6]);
printList(map(indexesUpTo6, (i) => 2 * i));

const zeroThrough10 = enumerateInterval(0, 10);
printList(zeroThrough10);
