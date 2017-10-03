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
  for (let i = 0; i < jazbook.length; i++) {
    if (jazbook[i][0] === name) return jazbook[i][1]
  }
  return false
}

const book = [
  ['alex','301-844-3421'],
  ['jae','301-844-1211'],
  ['david','301-844-0978'],
  ['travis','301-844-8505'],
  ['jasmine','1800-974-4539'],
];

// return an object literal representing the jazbook

function makePhoneBookObject(jazbook) {
  return jazbook.reduce((newBook, el) => {
    newBook[el[0]] = el[1]
    return newBook
  }, {})
}
// class makePhoneBookObject {
//   constructor(jazbook) {
//     this.jazbook = jazbook.reduce((newBook, el) => {
//       newBook[el[0]] = el[1]
//       return newBook
//     }, {})
//   }
//
//   addContact (name, phoneNumber) {
//     if (this.jazbook[name]) {
//       console.log('Name already exists in  jazbook')
//     }
//     this.jazbook[name] = phoneNumber
//   }
//
//   removeContact (name) {
//     if (this.jazbook[name]) {
//       delete this.jazbook[name]
//     } else {
//       console.log(`Cannot find ${name} in jazbook`)
//     }
//   }
//
//   searchContact (name) {
//     if (this.jazbook[name]) return this.jazbook[name]
//     return console.log(`Cannot find ${name} in jazbook`)
//   }
//
// }
// const newBook = new makePhoneBookObject(book)
// // console.log(newBook)
// newBook.addContact('grant', '213-608-5443')
// // console.log(newBook)
// // newBook.removeContact('grant')
// console.log(newBook.searchContact('grant'))
// console.log(newBook)


const objectToExport = {
  findName,
  makePhoneBookObject,
};

module.exports = objectToExport;
