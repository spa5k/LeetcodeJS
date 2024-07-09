class Node {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

function hasCycle(nodes) {
    let slow = nodes;
    let fast = nodes.next;
    while (fast && fast.next) {
        if (slow.val === fast.val) {
            return true;
        }
        fast = fast.next.next;
        slow = slow.next;
    }
    return false;
}
