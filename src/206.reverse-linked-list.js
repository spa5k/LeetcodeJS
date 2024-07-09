/*
 * @lc app=leetcode id=206 lang=javascript
 *
 * [206] Reverse Linked List
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    let reverse = null;
    let curr = head;

    while (curr) {
        let next = curr.next;
        curr.next = reverse;
        reverse = curr;
        curr = next;
    }
    return reverse;
};
// @lc code=end
