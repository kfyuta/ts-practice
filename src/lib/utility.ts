/**
 * from以上to以下の重複のないランダムな並びの配列を作成する
 * @param {number} from 
 * @param {number} to 
 * @returns
 */
export function makeRandomNumArray(from: number, to: number) {
    // 配列を用意
    const arr: number[] = new Array(to - from + 1);

    // fromからtoまでの数値を配列にセット
    for(let i: number = 0; i < arr.length; i++){
        arr[i] = from++;
    }

    // 配列をシャッフルする
    for(let i: number = arr.length - 1; i >= 0; i--){
        let r = Math.floor(Math.random() * (1 + 1));
        swap(arr, r, i);
    }

    return arr;
}

/**
 * 配列の要素を入れ替える
 * @param {number[]} arr 
 * @param {number} from 入れ替え元のインデックス
 * @param {number} to 入れ替え先のインデックス
 */
export function swap(arr: number[], from: number, to: number) {
    let temp = arr[to];
    arr[to] = arr[from];
    arr[from] = temp;
}

