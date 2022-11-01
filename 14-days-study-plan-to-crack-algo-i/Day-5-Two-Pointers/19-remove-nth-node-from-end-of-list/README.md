# [19. Remove Nth Node From End of List](https://leetcode.com/problems/remove-nth-node-from-end-of-list/?envType=study-plan&id=algorithm-i)

Given the `head` of a linked list, remove the nth node from the end of the list and return its head.

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    
    let ptr = head;
    let preN = head;
    
    while (ptr.next && (--n+1)) {
        ptr = ptr.next;
    }
    
    while (ptr.next) {
        ptr = ptr.next;
        preN = preN.next;
    }
    
    if (preN === head) {
        if (n === 1) {
            head = head.next;
        } else {
            head.next = head.next.next;
        }
    } else {
        preN.next = preN.next?.next;
    }
    
    return head;
};
```
