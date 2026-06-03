class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        //build hash for nums as iterating, checking current num against hash
        let hash = {};

        for (let num of nums) {
            console.log(num)
            if (hash[num]) {
                return true
            } else {
                hash[num] = true;
            }
        }

        return false
    }
}
