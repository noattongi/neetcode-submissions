class DynamicArray {
    /**
     * @constructor
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.length = 0;
        this.arr = [];
    }

    /**
     * @param {number} i
     * @returns {number}
     */
    get(i) {
        return this.arr[i];
    }

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i, n) {
        this.arr[i] = n;
        return;
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n) {
        this.length += 1;
        if (this.length > this.capacity) {
            this.resize();
        }
        this.arr.push(n);
        return;
    }

    /**
     * @returns {number}
     */
    popback() {
        this.length -= 1;
        let popped = this.arr.pop()
        return popped;
    }

    /**
     * @returns {void}
     */
    resize() {
        this.capacity = this.capacity * 2;
        return;
    }

    /**
     * @returns {number}
     */
    getSize() {
        return this.length;
    }

    /**
     * @returns {number}
     */
    getCapacity() {
        return this.capacity;
    }
}
