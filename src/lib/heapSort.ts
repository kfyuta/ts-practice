export function heapSort(arr: number[]) {
    let arraySize = arr.length;
    // 未整列範囲の終端
    let bottom = arraySize - 1;
    for(;;) {
        if(bottom === 0) break;
        // 節の数
        let nodeMaxIndex: number = Math.floor(arraySize / 2 - 1);
        for(let i = nodeMaxIndex; i >= 0; i--) {
            maxInt(arr, i, bottom);
        }

        swap(arr, 0, bottom);
        bottom--;
        arraySize--;
    }
    return arr;
}
 
function maxInt(arr: number[], root: number, bottom: number){
    let left: number = 2 * root + 1;
    let right: number = left + 1;
    let child: number = left;
    // 右の子が左の子より大きい場合
    if(right <= bottom && arr[left] < arr[right]) {
        child = right;
    }
    // 子が親より大きいとき、親と子を入れ替える
    if(arr[child] > arr[root]) {
        swap(arr, child, root)
    }

}

function swap(arr: number[], from: number, to: number) {
    let temp: number = arr[to];
    arr[to] = arr[from];
    arr[from] = temp; 
}