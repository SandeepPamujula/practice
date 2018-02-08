
'use strict';

const arr1 = [2,1,3,4,6,5];

function sort(arr, start, end) {
    let mid = (start + end)/2;
    mid = parseInt(mid, 10);
    if (start < end) {
        sort(arr, start, mid);
        sort(arr, mid+1, end);
    }
    console.log(start,mid,end);
    merge(arr,start,end);
}
function swap(arr, i , j) {
    const buff = arr[i];
    arr[i] = arr[j];
    arr[j] = buff;
}
function merge(arr, start, end) {
    let mid = (start + end)/2;
    let temp = [];
    let j = mid;
    for ( var i = start; i< mid;i++) {
        temp.push(arr[i], arr[j]);
        if (arr[i]> arr[j]) {
            swap(arr, i , j);
        }
    }
    console.dir(temp);
}

// function merge(arr, l, m, r) {

// }

console.log(arr1);
sort(arr1, 0 , 6);
console.log(arr1);
