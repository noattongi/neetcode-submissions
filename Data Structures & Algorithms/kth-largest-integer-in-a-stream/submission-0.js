class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.sorted = nums.sort((a, b) => (b - a));
        this.k = k;
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        let i = 0;
        while (i < this.sorted.length && val < this.sorted[i]) {
            i++;
        }
        this.sorted.splice(i, 0, val);
        return this.sorted[this.k - 1];
    }
}
