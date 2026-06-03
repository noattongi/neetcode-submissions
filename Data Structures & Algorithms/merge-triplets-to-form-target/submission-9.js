class Solution {
    /**
     * @param {number[][]} triplets
     * @param {number[]} target
     * @return {boolean}
     */
    mergeTriplets(triplets, target) {
        let running = [-Infinity, -Infinity, -Infinity]

        for (let triplet of triplets) {
            let operate = true;
            let matches = true;
            for (let i = 0; i < 3; i++) {
                if (triplet[i] !== target[i]) {
                    if (!(Math.max(triplet[i], running[i]) <= target[i])) {
                        console.log(triplet[i])
                        console.log(running[i])
                        console.log("no operate")
                        operate = false;
                        break;
                    }
                    matches = false;
                } else {
                    if (i === 2 && matches) {
                        return true;
                    }
                }
            }
            if (operate) {
                for (let j = 0; j < 3; j++) {
                    running[j] = Math.max(running[j], triplet[j]);
                }
            }
            console.log(running);
            operate = true;
        }

        return running[0] === target[0] && running[1] === target[1] && running[2] === target[2];
    }
}
