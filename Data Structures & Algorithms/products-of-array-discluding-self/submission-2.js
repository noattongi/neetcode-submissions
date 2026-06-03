class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let prefix = [];
        let product = 1;
        for (let num of nums) {
            prefix.push(product);
            product *= num
        }

        product = 1;
        let suffix = [];
        for (let i = nums.length - 1; i >= 0; i--) {
            suffix.push(product);
            product *= nums[i];
        }

        suffix = suffix.reverse();

        return prefix.map((p, index) => p * suffix[index]);
    }
}
