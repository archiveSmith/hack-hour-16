/**
 * Write a function deleteDups that removes duplicates from an unsorted linked list.
 *
 * Example:
 * 1->2->3->3
 *
 * deleteDups(head); -> 1->2->3
 *
 * Extra:
 * How would you solve this problem if a temporary buffer is not allowed?
 */



const deleteDups = (head) => {
    let temporaryBuffer = [];
    let current = head;
    let previous = current;
    
    while(current){
        if(!temporaryBuffer.includes(current.value)){
          console.log(current.value);
            temporaryBuffer.push(current.value)
        } else{
          previous.next = current.next
        }
        previous = current;
        current = current.next
    }

    return head
}
module.exports = deleteDups;