class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        if (s.length === 1) return 1;

        let left = 0;
        let right = 0;
        let freqMap = {};
        let maxLength = 1;

        while (right < s.length) {
            if (s[right] in freqMap) {
                freqMap[s[right]]++;
            } else {
                freqMap[s[right]] = 1;
            }

            let maxFreq = Math.max(...Object.values(freqMap))

            while (right - left + 1 - maxFreq > k) {
                freqMap[s[left]]--;
                left++;
            }

            maxLength = Math.max(maxLength, right - left + 1);
            right++;
        }

        return maxLength
    }
}
