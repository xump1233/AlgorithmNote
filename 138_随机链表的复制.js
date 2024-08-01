/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function(head) {
    if(!head){
        return;
    }
    let map = new Map();
    let dummy = new _Node(0,null,null);
    let copy = dummy;
    let cur = head;
    let n = 1;
    while(cur){
        map.set(cur,n);
        n++;
        cur = cur.next;
    }
    let rmap = new Map();
    cur = head;
    n = 1;
    while(cur){
        rmap.set(n,cur.random === null?null:map.get(cur.random));
        cur = cur.next;
        n++;
    }
    cur = head;
    while(cur){
        let copyNode = new _Node(cur.val,null,null);
        copy.next = copyNode;
        copy = copy.next;
        cur = cur.next;
    }
    let cmap = new Map();
    copy = dummy.next;
    n = 1;
    while(copy){
        cmap.set(n,copy);
        copy = copy.next;
        n++;
    }
    copy = dummy.next;
    n = 1;
    while(copy){
        copy.random = rmap.get(n) === null?null:cmap.get(rmap.get(n));
        copy = copy.next;
        n++;
    }
    return dummy.next;
};