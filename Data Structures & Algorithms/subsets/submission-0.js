class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        let allSets = [];
        const inner = (currSet, index) => {
            if (index === nums.length) {
                allSets.push(currSet);
                return;
            } else {
                inner(currSet, index + 1);
                inner(currSet.concat([nums[index]]), index + 1);
            }
        }
        inner([], 0)
        return allSets
    }
}
