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
var mergeTwoLists = function(l1, l2) {
    
    const dummy = new ListNode(0)
    let p1 = l1, p2 = l2, current = dummy
    while (p1 && p2) {
        if (p1.val <= p2.val) {
            current.next = p1
            p1 = p1.next
        } else {
            current.next = p2
            p2 = p2.next
        }
        current = current.next
    }
    current.next = p1 || p2
    return dummy.next
};
mergeTwoLists()