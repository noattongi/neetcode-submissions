class PrefixTree {
    constructor() {
        this.tree = {};
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let pointer = this.tree;
        for (let letter of word) {
            if (!pointer[letter]) {
                pointer[letter] = {};
            }
            pointer = pointer[letter];
        }
        pointer.end = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let pointer = this.tree;
        for (let letter of word) {
            if (!pointer[letter]) {
                return false
            } else {
                pointer = pointer[letter];
            }
        }
        return pointer.end === true;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let pointer = this.tree;
        for (let letter of prefix) {
            if (!pointer[letter]) {
                return false;
            } else {
                pointer = pointer[letter];
            }
        }
        return true
    }
}
