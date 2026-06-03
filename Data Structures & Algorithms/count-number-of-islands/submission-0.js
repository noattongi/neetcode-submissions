class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let count = 0;

        for (let y = 0; y < grid.length; y++) {
            for (let x = 0; x < grid[y].length; x++) {
                if (grid[y][x] === "1") {
                    grid = this.clearIsland(grid, y, x);
                    count++;
                }
            }
        }

        return count;
    }

    clearIsland(grid, y, x) {
        grid[y][x] = "0";
        if (x < grid[y].length - 1 && grid[y][x + 1] === "1") {
            grid = this.clearIsland(grid, y, x + 1);
        }
        if (y > 0 && grid[y - 1][x] === "1") {
            grid = this.clearIsland(grid, y - 1, x);
        }
        if (x > 0 && grid[y][x - 1] === "1") {
            grid = this.clearIsland(grid, y, x - 1);
        }
        if (y < grid.length - 1 && grid[y + 1][x] === "1") {
            grid = this.clearIsland(grid, y + 1, x);
        }
        return grid;
    }
}
