# [21. Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/)

You are given the heads of two sorted linked lists `list1` and `list2`.

Merge the two lists in a one **sorted** list. The list should be made by splicing together the nodes of the first two lists.

Return the `head` of the merged linked list.

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    
    let head = new ListNode(null, null);
    let current = head;    
    
    while (list1 && list2) {
    
        if (list1.val < list2.val) {
           current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
      current = current.next;
    }
    if (list1 === null) current.next = list2;
    if (list2 === null) current.next = list1;

    return head.next;
};
```

### Solution:

- Make a new head for a ListNode
- on each iteration, current.next = the greater of the lists' values

