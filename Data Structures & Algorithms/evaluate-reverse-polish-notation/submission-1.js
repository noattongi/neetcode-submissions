class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let nums = [];

        for (let token of tokens) {
            if (token === "+" || token === "-" || token === "/" || token === "*") { 
                let b = nums.pop();
                let a = nums.pop();
                switch (token) {
                    case "+":
                        nums.push(a + b);
                        break;
                    case "-":
                        nums.push(a - b);
                        break;
                    case "/":
                        nums.push(Math.trunc(a / b));
                        break;
                    case "*":
                        nums.push(a * b);
                        break;
                }
            } else {
                nums.push(Number(token))
            }
        }

        return nums[0];
    }
}
