class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {
        if (digits.length === 0) {
            return [];
        }

        const MAP = {
            "2": "abc",
            "3": "def",
            "4": "ghi",
            "5": "jkl",
            "6": "mno",
            "7": "pqrs",
            "8": "tuv",
            "9": "wxyz"
        }

        let combos = [];

        const inner = (str = "", i = 0) => {
            if (i >= digits.length) {
                combos.push(str);
            } else {
                for (let letter of MAP[digits[i]]) {
                    inner(str + letter, i + 1);
                }
            }
        }

        inner();
        return combos;
    }


}
