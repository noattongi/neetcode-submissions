class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let left = 0;
        let right = s1.length;
        //build check hash

        while (right <= s2.length) {
            if (this.isPermutation(s1, s2.slice(left, right))) {
                return true;
            } else {
                left++;
                right++;
            }
        }

        return false;
    }

    isPermutation(s1, s2) {
        let checkHash = {};
        for (let i = 0; i < s1.length; i++) {
            if (s1[i] in checkHash) {
                checkHash[s1[i]] += 1;
            } else {
                checkHash[s1[i]] = 1;
            }

            if (s2[i] in checkHash) {
                checkHash[s2[i]] -= 1;
            } else {
                checkHash[s2[i]] = -1;
            }
        }

        for (let char in checkHash) {
            if (checkHash[char] !== 0) {
                return false;
            }
        }

        return true;
    }
}
