class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false
        }

        let hash = {}

        for (let i = 0; i < s.length; i++) {
            if (hash[s[i]]) {
                hash[s[i]] += 1;
            } else {
                hash[s[i]] = 1;
            }

            if (hash[t[i]]) {
                hash[t[i]] -= 1;
            } else {
                hash[t[i]] = -1;
            }
        }

        for (let char in hash) {
            if (hash[char] != 0) {
                return false;
            }
        }

        return true
    }
}
