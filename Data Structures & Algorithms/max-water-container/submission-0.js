class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0;
        let right = heights.length - 1;
        let max = 0;

        while (left < right) {
            let area = Math.min(heights[left], heights[right]) * (right - left);
            if (area > max) max = area;

            if (heights[left] > heights[right]) {
                right--;
            } else {
                left++;
            }
        }

        return max;
    }
}
