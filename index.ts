import {pair, left, right} from './pair';
import {List, isEmpty, EmptyList, makeList} from './list';

const dispatch = () => {};

const select = () => {};


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
