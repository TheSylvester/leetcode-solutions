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