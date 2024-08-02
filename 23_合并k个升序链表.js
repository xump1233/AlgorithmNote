/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    let dummy = new ListNode(0,null);
    let cur = dummy;
    let n = 0;
    while(n<lists.length){
        let minIndex = -1;
        let minValue = Number.MAX_VALUE;
        for(let i=0;i<lists.length;i++){
            if(lists[i] === null){
                n++;
            }
            else{
                if(lists[i].val < minValue){
                    minIndex = i;
                    minValue = lists[i].val;
                }
            }
        }
        if(minIndex === -1){
            break;
        }
        lists[minIndex] = lists[minIndex].next;
        cur.next = new ListNode(minValue,null);
        cur = cur.next;
        n = 0;
    }
    return dummy.next;
};