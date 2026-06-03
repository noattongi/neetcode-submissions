class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];
        
        for (let char of s) {
            if (char == "(" || char == "{" || char == "[") {
                stack.push(char);
            } else {
                if (char == ")") {
                    if (stack[stack.length - 1] !== "(") {
                        return false;
                    }
                }
                if (char == "}") {
                    if (stack[stack.length - 1] !== "{") {
                        return false;
                    }
                }
                if (char == "]") {
                    if (stack[stack.length - 1] !== "[") {
                        return false;
                    }
                }
                stack.pop();
            }
        }

        return stack.length == 0;
    }
}
