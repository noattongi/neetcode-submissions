/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let p1 = list1;
        let p2 = list2;
        let merged = new ListNode();
        let pm = merged;

        while (p1 && p2) {
            if (p1.val < p2.val) {
                pm.next = p1;
                p1 = p1.next;
            } else {
                pm.next = p2;
                p2 = p2.next;
            }
            pm = pm.next;
        }

        pm.next = p1 || p2;

        return merged.next;
    }
}
