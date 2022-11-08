import {makeRandomNumArray} from "./lib/utility";
import {heapSort} from "./lib/heapSort";

console.time("start")
console.log(heapSort(makeRandomNumArray(1,20000)));
console.timeEnd("start")