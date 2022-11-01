# [876. Middle of the Linked List](https://leetcode.com/problems/middle-of-the-linked-list/?envType=study-plan&id=algorithm-i)

Given the `head` of a singly linked list, return the middle node of the linked list.

If there are two middle nodes, return the second middle node.

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
 * @return {ListNode}
 */
var middleNode = function(head) {
    
    // find length
    let ptr = head;
    let mid = head;
    
    let count = 0;
    while (ptr.next) {
        ptr = ptr.next;
        count++;
        if (count % 2) {
            mid = mid.next;
        }
    }
 
    return mid;       
    
};
```

