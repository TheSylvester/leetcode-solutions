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