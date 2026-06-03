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
        for (let i = nums.length - 1; i >= 0; i--) {
            prefix[i] = prefix[i] * product;
            product *= nums[i];
        }

        return prefix;
    }
}
