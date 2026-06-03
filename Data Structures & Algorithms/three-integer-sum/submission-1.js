class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     *  [-4,-1,-1,0,1,2,2]
     *  
     */
    threeSum(nums) {
        let sortedNums = nums.sort((a, b) => (a - b));
        let pivot = 0;
        let triplets = [];
        while (pivot < sortedNums.length - 2) {
            let left = pivot + 1;
            let right = sortedNums.length - 1;
            while (left < right) {
                let sum = sortedNums[pivot] + sortedNums[left] + sortedNums[right];
                if (sum < 0) {
                    left++;
                }
                else if (sum > 0) {
                    right--;
                }
                else if (sum === 0) {
                    triplets.push([sortedNums[pivot], sortedNums[left], sortedNums[right]]);
                    let lTemp = sortedNums[left];
                    while (sortedNums[left] == lTemp && left < right) {left++;}
                    
                    let rTemp = sortedNums[right];
                    while (sortedNums[right] == rTemp && left < right) {right--;}
                }
            }
            let pTemp = sortedNums[pivot];
            while (pivot < sortedNums.length - 2 && sortedNums[pivot] == pTemp) {
                pivot++;
            }
        }
        return triplets
    }
}
