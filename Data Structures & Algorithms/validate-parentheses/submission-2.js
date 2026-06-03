class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let map = { ")": "(", "}": "{", "]": "["};
        let stack = [];

        for (let char of s) {
            if (char in map) {
                if (stack[stack.length - 1] !== map[char]) {
                    return false;
                } else {
                    stack.pop();
                }
            } else {
                stack.push(char);
            }
        }

        return stack.length === 0;
    }
}
