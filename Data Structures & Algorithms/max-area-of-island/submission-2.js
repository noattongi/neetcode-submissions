class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    constructor() {
        this.maxArea = 0;
    }

    maxAreaOfIsland(grid) {
        for (let y = 0; y < grid.length; y++) {
            for (let x = 0; x < grid[y].length; x++) {
                if (grid[y][x] === 1) {
                    let count = this.traverseIsland(grid, y, x);
                    if (count > this.maxArea) this.maxArea = count;
                }
            }
        }

        return this.maxArea;
    }

    traverseIsland(grid, y, x) {
        grid[y][x] = 0;
        let count = 1;

        const DIRS = [[0, 1], [0, -1], [1, 0], [-1, 0]]

        for (const [dy, dx] of DIRS) {
            let checkY = y + dy;
            let checkX = x + dx;
            if (checkY >= 0 && checkY < grid.length && checkX >= 0 && checkX < grid[0].length) {
                if (grid[checkY][checkX] === 1) {
                    count += this.traverseIsland(grid, checkY, checkX, count);
                }
            }
        }

        return count
    }
}
