class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * [1,2,3,4,5,6] 10
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let left = 0;
        let right = numbers.length - 1;

        while (numbers[left] + numbers[right] != target) {
            let sum = numbers[left] + numbers[right];
            if (sum > target) {
                right--;
            } else {
                left++;
            }
        }

        return [left + 1, right + 1]
    }
}
