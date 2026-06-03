class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        if (s.length == 0) {
            return 0;
        }
        let hash = {};
        let left = 0;
        let right = 0;
        let maxSubstringLength = 1;

        while (right < s.length) {
            if (!hash[s[right]]) {
                hash[s[right]] = 1;
                maxSubstringLength = Math.max(right - left + 1, maxSubstringLength);
                right++;
            } else {
                while (hash[s[right]]) {
                    hash[s[left]] = 0;
                    left++;
                }
            }
        }

        return maxSubstringLength;


    }
}
