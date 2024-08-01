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
var deleteDuplicates = function(head) {
    if(!head){
        return head;
    }
    let dummy = new ListNode(0,head);
    let cur = dummy.next;
    let pre = dummy;
    while(cur && cur.next){
        if(cur.val === cur.next.val){
            let target = cur.val;
            while(cur && cur.val === target){
                pre.next = cur.next;
                cur = cur.next;
            }
        }
        else{
            cur = cur.next;
            pre = pre.next;
        }
    }
    return dummy.next;
};