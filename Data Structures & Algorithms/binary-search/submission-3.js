class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
       let left = 0;
       let right = nums.length - 1;

       while (left <= right) {
            console.log(left, right)
            const mid = Math.floor((right + left)/ 2);
            console.log("mid index: ", mid)
            console.log("midNum: ", nums[mid])
            if (nums[mid] === target) {
                return mid;
            }
            else if (nums[mid] > target) {
                right = mid - 1;
            }
            else if (nums[mid] < target) {
                left = mid + 1;
            }
       }
       return -1;
    }
}