/* 
HEAP SORT
- why? to improve the speed of selection sort
- when finding min member at position i, we can't reuse info from steps i-1
- heap is an array of members, each memeber has to satisfy this condition:
    - a[i] >= a [2i+1]
    - a[i] >= a [2i+2]
i goes from 0

algorithm of heap sort
1. turn the list into a heap
2. move the max member to end of heap
3. remove max member from heap: r = r-1
4. compare r and l, if r>l then repeat step 2, else stop the algo

Pseudo code of heap sort

void HeapSort(int a [ ) {
    TaoHeap (a, n—l) ; 
    r = n—l; 
    while (r > O) {
    HoanVi (a[0], a[r]); 
    r=r-1
    HieuChinh (a, O, r) ;
    }
}
void TaoHeap(int a[], int r) {
    int l = r/2
    while (l>0) {
        HIeuChinh(a,l,r)
        l = l-1
    }
}

- A  heap can reuse previous computation (loose structure by comparing a[i] with a[2i+1] & a[2i+2])

- Complexity of heap sort: O(nlog2n)
[]
*/

// JS code demo: https://www.w3resource.com/javascript-exercises/searching-and-sorting-algorithm/searching-and-sorting-algorithm-exercise-3.php

var array_length;
/* to create MAX  array */  
function heap_root(input, i) {
    var left = 2 * i + 1;
    var right = 2 * i + 2;
    var max = i;

    if (left < array_length && input[left] > input[max]) {
        max = left;
    }

    if (right < array_length && input[right] > input[max])     {
        max = right;
    }

    if (max != i) {
        swap(input, i, max);
        heap_root(input, max);
    }
}

function swap(input, index_A, index_B) {
    var temp = input[index_A];

    input[index_A] = input[index_B];
    input[index_B] = temp;
}

function heapSort(input) {
    
    array_length = input.length;

    for (var i = Math.floor(array_length / 2); i >= 0; i -= 1)      {
        heap_root(input, i);
      }

    for (i = input.length - 1; i > 0; i--) {
        swap(input, 0, i);
        array_length--;
      
      
        heap_root(input, 0);
    }
}

var arr = [3, 0, 2, 5, -1, 4, 1];
heapSort(arr);
console.log(arr);
