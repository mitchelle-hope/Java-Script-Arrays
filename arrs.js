// // Acessing arrays in Javascriupt
// const MyArray = ['h','e','l','l','o']
// console.log(MyArray[4]);
// console.log(MyArray[2]);

// // Adding elements to an Array
// let DailyActivities =['eat','sleep'];
// DailyActivities.push('singing');

// // Removing the last element of an Array
// console.log(DailyActivities);
// let DailyChores =['cooking','baking','washing', 'moping']
//  DailyChores.pop()
// console.log(DailyChores)

// let baking = ['cake','biscuits', 'wafles'];
// baking[2]='cookies';
// console.log(baking)

// // Checking the length of an array it will give you the number of the total elements
// let breeds = ['cat','dog','cow']
// console.log(breeds.length)

// // use of contact joins one or more arrays

// cats = ['lion','racoon','meow'];
// friends = ['misho','hope','waithera'];
// let mine =cats.concat(friends);
// console.log(mine)

// // use of indexof- searches the element of an array and it returns its position
// humans = ['me','yours','them','they']
// console.log(humans.indexOf('me'))

// // using find

// let people = ['effy','misho','kudra','nancy']
// console.log(people.find(item=>item==="brenda"));

// // using find index()

// let AnitaB =['brenda','prudence','sabdio','phelicia'];
// let getindex=AnitaB.findIndex(item=>item==="prudence");
// console.log(getindex)

// // For each 
// let ada=['kudra','respah','joanna','misho'];
// ada.forEach(element => {
//     console.log(element)
// });

// // the includes function checks whether your array includes a certain value
// //will return true or false whether the value exists

// const roomates= ['mollen','kamau','jane','grace']
// console.log(roomates.includes('kamau'))

// // using splice will remove the last three items from an array

// const fruits=['banana','aplle','mellon','grapes','guavas']
// const start = -3;
// const removedItems = fruits.splice(start);
// console.log(fruits)

// //Removes the first element from an array and returns that removed elements

// const numbers=[1,2,3,4,5,6,7]
// const newnumbers= numbers.shift()
// console.log(numbers)
// console.log(newnumbers)

// // returns a shallow copy of of the array
// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
// console.log(animals.slice(2,4))

// //inverses the array from last to first
// const months = ['March', 'Jan', 'Feb', 'Dec'];
// months.sort()
// console.log(months)

// //objects-using dot notation
// const perfomance ={ name:'Mitchelle', age:'22', hobby:'dance' }
// console.log(perfomance.age)

// //using bracket notation
// const perfom={ name:'Mitchelle', age:'22', hobby:'dance' }
// console.log(perfom['name'])

// //Nested Objects can access 
// const perfomanceclass={name:'Mitchelle', age:'22', hobby:'dance',
// marks:{french:90, german:89}}
// console.log(perfomanceclass.marks.french.age)

// //java script methods and this keyword



// let nums = [1,2,3,4,5]
// let double =nums.map(item=>item*item)
// console.log(double);
// console.log(nums);

// let even=nums.filter(item=> item%2==0);
// console.log(even);

// //classes
// class Students {
//     constructor(name, age , nationality){
//         this.name=name
//         this.age= age
//         this.nationality=nationality

//     }
// }
// let firststudent=new Students('misho','20','Kenyan')
// Students.prototype.gender ='female'
// let secondstdent= new Students('Winnie',23 ,'Ugandan')
// console.log(firststudent.name);
// console.log(secondstdent.gender);

// function People(name , age , nationality){
//     this .name=name
//     this .age=age
//     this .nationality=nationality

// }
// let  thirdpeople= new People('anne',19, 'Nigerian');
// console.log(thirdpeople);
// People.prototype.nationality ='Kenyan'
// let fourthpeople = new People('Annie',23 ,'Ugandan')
// console.log(fourthPeople.nationality);


//Destructuring an Array
// let numbze = [1,2,3,4,5];
// let [one ,two ,three]=numbze
// console.log([one]);
// console.log([two]);
// console.log([three]);

// setTimeout

// let person ={
//     name:"shah",
//     class:"Adalab"
// }
// let name{name...c}=person
// console.log(c);


//exports and imports
// SYCRONOUS OPERATION
//promises
//chaining in prosimes.then

// let promise =new Promise(function(resolve,reject){
//     resolve("promise fulfilled")
// })
// .then((result)=>console.log(result));
// .catch()=>console.log("It is okay to fail")

// console.log(promise);

