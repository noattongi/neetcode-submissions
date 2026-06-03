class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let hash = {};

        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                let val = board[r][c];
                if (val !== ".") {
                    let rowKey = "r" + r.toString()
                    if (hash[rowKey]) {
                        if (hash[rowKey][val]) return false;
                    } else {
                        hash[rowKey] = {};
                    }
                    hash[rowKey][val] = 1;

                    let colKey = "c" + c.toString()
                    if (hash[colKey]) {
                        if (hash[colKey][val]) return false;
                    } else {
                        hash[colKey] = {};
                    }
                    hash[colKey][val] = 1;

                    
                    const squareNum = Math.floor(r / 3) * 9 + Math.floor(c / 3);
                    let squareKey = "s" + squareNum;
                    if (hash[squareKey]) {
                        if (hash[squareKey][val]) return false;
                    } else {
                        hash[squareKey] = {}
                    }
                    hash[squareKey][val] = 1;
                }
            }
        }

        return true;
    }
}
