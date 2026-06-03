class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals, newInterval) {
        if (intervals.length === 0) {
            return [newInterval];
        }

        let newIntervals = [];
        let i = 0;
        let [newStart, newEnd] = newInterval;

        while (i < intervals.length) {
            let [currStart, currEnd] = intervals[i];
            if (newStart < currStart) {
                if (newEnd < currStart) {
                    newIntervals.push(newInterval);
                }
                else if (newEnd <= currEnd) {
                    newIntervals.push([newStart, currEnd]);
                    i++;
                }
                else { //new end goes past current interval
                    let j = i + 1;
                    while (j < intervals.length) {
                        if (newEnd < intervals[j][0]) {
                            break;
                        }
                        else if (newEnd < intervals[j][1]) {
                            newInterval[1] = intervals[j][1];
                            j++;
                            break;
                        }
                        else {
                            j++;
                        }
                    }
                    newIntervals.push(newInterval)
                    i = j;
                }
                newIntervals = newIntervals.concat(intervals.slice(i)) //check this
                break;
            }
            else if (newStart <= currEnd) {
                if (newEnd <= currEnd) {
                    newIntervals.push(intervals[i]);
                    i++;
                }
                else {
                    newInterval[0] = currStart
                    let j = i + 1; //TODO: account for end of intervals
                    while (j < intervals.length) {
                        if (newEnd < intervals[j][0]) {
                            break;
                        }
                        else if (newEnd < intervals[j][1]) {
                            newInterval[1] = intervals[j][1];
                            j++;
                            break;
                        }
                        else {
                            j++
                        }
                    }
                    newIntervals.push(newInterval)
                    i = j;
                }
                newIntervals = newIntervals.concat(intervals.slice(i))
                break;
            } else {
                newIntervals.push(intervals[i]);
                i++;
            }
        }

        if (newIntervals[newIntervals.length - 1][1] < newStart) {
            newIntervals.push(newInterval)
        }

        return newIntervals;
    }
}
