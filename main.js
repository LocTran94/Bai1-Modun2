// Cho một mảng như sau: [1, 2, 3, 4, 5, 6, 7];
//
// Xây dựng hàm trả về một mảng mới gồm các phần tử mảng là bình phương của các phần tử trong mảng ban đầu, như sau: [1,4,9,16,25,36,49];
//
//

// const arr = [1, 2, 3, 4, 5, 6, 7];
// const arr1 = [];
// function test(arr) {
//     for (let i of arr){
//         arr1.push(i * i)
//     }
// }
// test(arr)
// console.log(arr1)

// const arr1 = arr.map(i => i*i)
// console.log(arr1)
// const arr2 = arr.filter(i => i % 2 === 0)
// console.log(arr2)


//Bài tập 1 phần 1 modun 2

// function lastIndexOf(arr, elt, start = 4) {
//
//     for (let i = start - 1; i >= 0; i--)
//         if (arr[i] === elt) return i
//
//       return -1
//
// }
// console.log(lastIndexOf([1, 2, 1, 2], 2))


// Luyện tập sử dụng cú pháp destructuring assignment (1)

// let profile = {
//
//     a: 'Code',
//
//
//     b: 'Gym',
//
//
//     bday: new Date('1979-01-02')
// }

// let a  = () =>  profile.fname + ' ' + profile.lname
//
// cách sử dụng arrow funtion
// console.log(a());

// let {a, b} = profile;
// console.log(a)
// console.log(b)


//
// function replace(array, from, to, elements) {
//
//     array.splice.apply(array, [from, to - from].concat(elements))
//
//
// }
//
//
// let testArray = [1, 2, 100, 100, 6]
//
//
// replace(testArray, 2, 4, [3, 4, 5])
//
//
// console.log(testArray)


// Bài luyện tập 2 phần 1 Arrow function
//
// const inventory = [
//
//     {type:   "machine", value: 5000},
//
//
//     {type:   "machine", value:  650},
//
//
//     {type:      "duck", value:   10},
//
//
//     {type: "furniture", value: 1200},
//
//
//     {type:   "machine", value:   77}
//
//
// ]
// function test(a,b){
//     return a + b.value;
// }
// let totalMachineValue = inventory.reduce(test,0)
// console.log(totalMachineValue)


