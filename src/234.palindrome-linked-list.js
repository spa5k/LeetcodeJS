/*
 * @lc app=leetcode id=234 lang=javascript
 *
 * [234] Palindrome Linked List
 */
class ListNode {
    constructor(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}
// @lc code=start
/**
 * Definition for singly-linked list.
 *
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    let prev = slow;
    slow = slow.next;
    prev.next = null;

    while (slow) {
        let temp = slow.next;
        slow.next = prev;
        prev = slow;
        slow = temp;
    }

    let left = head;
    let right = prev;

    while (right) {
        if (right.val != left.val) {
            return false;
        }
        right = right.next;
        left = left.next;
    }
    return true;
};
// @lc code=end
