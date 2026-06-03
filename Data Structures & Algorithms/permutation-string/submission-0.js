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
        let checkHash = {};
        for (let char of s1) {
            if (char in checkHash) {
                checkHash[char] += 1;
            } else {
                checkHash[char] = 1;
            }
        }

        let hasPermutation = false;
        while (right <= s2.length) {
            if (this.isPermutation(checkHash, s2.slice(left, right))) {
                hasPermutation = true;
                break;
            } else {
                right++;
                left++;
            }
        }

        return hasPermutation;
    }

    isPermutation(checkHash, str) {
        let hashCopy = {...checkHash};
        for (let char of str) {
            if (hashCopy[char]) {
                hashCopy[char]--;
            } else {
                return false;
            }
        }

        for (let char in hashCopy) {
            if (hashCopy[char]) {
                return false;
            }
        }

        return true;
    }
}
