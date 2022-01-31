Array.prototype.newFilter = function (callback, context) {
  let result = [];
  for (let index = 0; index < this.length; index++) {
    if (callback.call(context, this[index], index, this)) {
      result.push(this[index]);
    }
  }
  return result;
};

// Example 1
const array = [1, 2, 3, 4];
const filterArr = array.newFilter((el) => el % 2 === 0);
console.log(filterArr);

// Example 2
const persons = [
  {
    id: 1,
    name: "Arpit",
    age: 23,
  },
  {
    id: 2,
    name: "Juhi",
    age: 24,
  },
  {
    id: 3,
    name: "Ayushi",
    age: 24,
  },
];
const filterPersons = persons.newFilter((el) => el.age === 24);
console.log(filterPersons);
