#[206. Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/)

Given the `head` of a singly linked list, reverse the list, and return the reversed list.

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
var reverseList = function(head) {

    if (head === null || head.next === null) return head;
    
    let reversedHead = reverseList(head.next);
    
    head.next.next = head;
    head.next = null;
    
    return reversedHead;
    
};

```

### Solution: 

- base case is when `.next` is `null`;
- To process a recursion in reverse, call the next recurse function and THEN process;

