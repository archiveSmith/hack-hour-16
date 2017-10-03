/**
* Part 1:
* You are given an array of arrays.  The subarrays are first names and phone numbers.
*
* Example:
*   jazbook = [
*     ['alex','301-844-3421'],
*     ['jae','301-844-1211'],
*     ['david','301-844-0978'],
*     ['travis','301-844-8505']
*     ['jasmine','1800-974-4539'],
*   ];
*
* jazbooks are not always sorted...
*
* Develop a function that takes in a jazbook and a name, searches through the jazbook and
* returns the persons phone number. If the person does not exists, return false.
*
* How efficient can you make this?

* Part 2: 
* Why are we storing names and phone numbers in an array?
* develop a function that takes in the poorly constructed jazbook and returns a proper phonebook 
* complete with methods to add new names and look up and remove existing entries
*/

//  return the number associated with the name in the jazbook
function findName(jazbook, name) {

  for(i = 0, j = jazbook.length-1, i < jazbook.length; j > 0; i++, j--){
    // console.log(i,j)
    if(jazbook[i][0] === name || jazbook[j][0] === name){
      return jazbook[i][1]
    }
  }

return false
}

// return an object literal representing the jazbook
function makePhoneBookObject(jazbook){

  function HashTable(size) {
    this.buckets = Array(size);
    this.numBuckets = this.buckets.length;
  }
     
  function HashNode(key, value, next) {
    this.key = key;
    this.value = value;
    this.next = next || null
  }
  
  HashTable.prototype.hash = function(key) {
    var total = 0;
    for(var i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    var bucket = total % this.numBuckets;
    return bucket
  }
  
  HashTable.prototype.insert = function(key, value) {
    var index = this.hash(key)
    
    if(!this.buckets[index]) {
      this.buckets[index] = new HashNode(key, value);
    }
    else if (this.buckets[index].key === key) {
      this.buckets[index].value = value;
    }
    else {
      var currentNode = this.buckets[index];
      while(currentNode.next) {
        if(currentNode.next.key === key) {
          currentNode.next.value = value;
          return;
        }
        currentNode = currentNode.next;
      }
      currentNode.next = new HashNode(key, value)
    }
  }
  
  
  HashTable.prototype.get = function(key) {
    var index = this.hash(key);
    if(!this.buckets[index]) return null;
    else {
      var currentNode = this.buckets[index];
      while(currentNode) {
        if(currentNode.key === key) return currentNode.value;
          currentNode = currentNode.next;
      }
    return null;
  
    }
  }
  
  
  HashTable.prototype.retrieveAll = function() {
    var allNodes = [];
    for(var i = 0; i < this.numBuckets; i++){
      var currentNode = this.buckets[i];
      while(currentNode){
        allNodes.push(currentNode)
        currentNode = currentNode.next
      }
    }
    return allNodes
    
  }
  
  
  
  
  var myHT = new HashTable(jazbook.size)
  
  for(var i = 0; i < jazbook.length; i++){
    // console.log(jazbook[i][0])
    // console.log(jazbook[i][1])
    
    myHT.insert(jazbook[i][0], jazbook[i][1])
  }
  
  // console.log(myHT)
  
  console.log(myHT.get('travis'))
  
}

const objectToExport = {
  findName,
  makePhoneBookObject,
};

module.exports = objectToExport;
