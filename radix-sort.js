/*
- Did sort algo does not compare each member's value
- Pros and cons:
 - We have to use more memeory to store temp data
- Complexity: O(n)
*/

function getPosition(num, place) {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10
}   // gives back bucket index  


function getMax(arr) {
    let max = 0;
    for (let num of arr) {
        if (max < num.toString().length) {
            max = num.toString().length
        }
    }
    return max
}
function radixSort(arr) {

    const max = getMax(arr);

    for (let i = 0; i < max; i++) {
        let buckets = Array.from({ length: 10 }, () => []) // creating 10 empty arrays

        for (let j = 0; j < arr.length; j++) {

            buckets[getPosition(arr[j], i)].push(arr[j]); //push the number into desired
            // bucket
        }
        arr = [].concat(...buckets);
    }
    return arr
}
console.log(radixSort([4, 933, 233, 3222, 1, 7, 5]))

