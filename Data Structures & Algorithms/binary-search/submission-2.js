class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        if (nums.length == 0) {
            return -1;
        }
        if (nums.length == 1 && nums[0] !== target) {
            return -1
        }
        const midIndex = Math.floor((nums.length - 1)/ 2)
        const mid = nums[midIndex];
        console.log(nums);
        console.log(midIndex);
        if (mid === target) {
            return midIndex;
        } else {
            if (mid > target) {
                return this.search(nums.slice(0, midIndex), target);
            } else {
                let index = this.search(nums.slice(midIndex + 1), target);
                return index === -1 ? -1 : index + midIndex + 1
            }
        }
    }
}