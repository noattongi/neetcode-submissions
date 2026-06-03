class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let hash = {};
        for (let num of nums) {
            if (hash[num] !== undefined) {
                hash[num]++;
            } else {
                hash[num] = 1;
            }
        }
        return Object.keys(hash).sort((a, b) => (hash[b] - hash[a])).slice(0, k);
    }
}
