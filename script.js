// today i learn about string method-------------

// const { useCallback } = require("react");

// let name="gautam thakur"
// console.log(name.length);


//ye batata hia ki mere naam me kitne words hai -------


// let sentence = "Hello seju how are you today";
// const newSentencs = sentence.replace("today","baby");
// console.log(newSentencs);


//this helps to change any kind of our word-------


// let invitation = `hy bro tomorow is my bdy
//  ok bro so please come bro hy do 
//  you listen bro hy are you there bro`;

//  let Aamantran = invitation.replaceAll('hy','oy dalle')
//  .replaceAll('bro','chutiye');
//  console.log(Aamantran);



 //ok now we are learning (split) ----------


//  let info = "hello my name is gautam thakur"

//  const information =info.split(' ');

//  console.log(information);



 
 //now we are learning (repaet string method)-----------

//  let text ="how are you seju ,";

//  console.log(text.repeat(2));


 //(trim)


//  let trim ="    hy seju what are you doing today   ";

//  const trimation =trim.trim();

//  console.log(trimation);
 

 ///now we are learning concating-----------------

//  let seju ="hey gautam how are you ? ";
//  let gautam ="i am good seju 😁";

//  let both =seju.concat(gautam);
//  console.log(both);


 //so today is only this thing i learn and tomorrow  i learn loops ok😁😁


 //one time revision--------

//  let fruit =`mango grapes bnana apple lichi
//   pineapple gauvav orange cocout 
//    papaya watermannle lemon cherry dragonfruit avacado `


   // const AllFruit =fruit.split(" ");
   // console.log(AllFruit);




   //one more topic---------
   // let repeat ="i am gautam thakur ";
//    let repeatAgain = repeat.repeat(5)
//    console.log(repeatAgain);

// console.log(repeat.repeat(2))


///both are right its your choice------

// let uppercase ="helo buddy how are you today , tell me";
// const upperCase=uppercase.toUpperCase();
// console.log(upperCase);


// let lowercase ="JHGH KGKJ ,GLUHK IOIYDYTD YGUHJ FYGFIYF DFTTDVJ ";
// const lowerCase=lowercase.toLowerCase();
// console.log(lowerCase);



//last thig ois concat ------------------

// let words ="a b c d e f ";
// let nextWords = "g h i j k l m";
 
// let mixThem=words.concat(nextWords);
// console.log(mixThem);


//today i am learning loops--------------------
//so print all  even number from 0 to 100-----------
// let number =0;
// for(number=0; number<=100; number++){
//    if(number%2===0){
//       console.log(number ,"is even number");
//    }
// }


//while loop--------------
// let num= 0;
// while(num<=50)
// {if(num%2!==0){
//    console.log(num ,"is odd number");}
// num++;}

//lets check now do while ---------

// let num =0;
// do{
//    if(num%2==0)
//    console.log(num,"is even number");num++;
// }while(num<=40);



// let num=12
//  let usernum=prompt("enter the value")

// while(usernum!=num){

//    usernum=prompt("try again")
// }
// console.log("mubarka praaa");


////one more time

// let num=45;
// let userguess=prompt("enter a valid number")
// while(userguess!=num){
//    userguess=prompt("again try")
// }console.log("mubarka");

//strings----------------------


// let name="gautram";
// console.log(name.length)
// console.log(name[3])


// let sentence=`hello this is mobile`;
// console.log(typeof sentence)

// let obj={
//    item:"pen",
//    price:24,
// };
// let output=`the cost of ${obj.item} is ${obj.price} rupees`;
// console.log(output);



// let string=`this is a template literal ${1+2+3}`;
// console.log(string);


// console.log("hello \n world")
// console.log("hello \t world")


// let word="jghjhkjkjhl"
// let newW=word.toUpperCase();
// console.log(newW)


// let num="gautamthakur";
// let numm=num.slice( 4,6);
// console.log(numm)



// let name=prompt("enter full name");
// let result="@"+name+name.length;
// console.log(result)

// let num =12;
// let user =prompt("enter num")
// while(user!=num){
//    user=prompt("jaa! ek moka or diya")
// }{console.log("wow nice guess")}


// let evenNum =0;
// for(evenNum=0; evenNum <=100; evenNum++)
// {if(evenNum%2==0)
//    console.log(evenNum ,"is a even number")
// }


// let num=0;
// while(num<=54){
//    console.log(num)
//    num++;
// }


// let name=prompt("enter you name")
// let user="@"+name+name.length;
// console.log(user);


// let num=45;
// let user=prompt("yanha likh be");
// while(num!=user){
//    user=prompt("dobara koshish kar")}
// {console.log("nice ,ye hui na baat")}



//arrays----is a collection of items------------


//with for loop-------------

// let cities=["delhi","pune","hp","pb","mumbai"];

// for(let i=0; i<cities.length; i++){
//    console.log(cities[i]);
// }

// for(let city of cities){
//    console.log(city);
// }
 // IT IS EASY TO USE FOR OF LOOP IN ARRAYS==========================


// let marks = [85,97,44,37,76,60];
// let sum=0;
// for (let val of marks){
//    sum+=val;
// }
// let avg=sum/marks.length;
//    console.log(`avg of marks is =${avg}`);



// let marks=[85, 97 ,44 ,37 ,76 ,60];
// let sum =0;
// for(let val of marks){
//    sum=sum+val
// }
// let avg = sum/marks.length
// console.log(avg);


//shift , unshift ,pop ,push------------


//shift -----use for remove from first----


// let number=[12,13,14,15,16]
// number.shift();
// console.log(number)


//unshift---------add from first-------

// let num=[12,13,14,15,16]
// num.unshift(11);
// console.log(num)


//pop===========
//remove from end


//  let num=[12,13,14,15,16]
//  num.pop();
// console.log(num)



//push ===========add from last----


//  let number=[12,13,14,15,16]
//  number.push(17);
// console.log(number)

//to string==============

// let item=["apple","mango","banana","lichi"];
// console.log(item.toString())


// let marval=["thor","hulk","iron"];
// let dc=["superman","batman"];
// let indian =["krish","jeavn","shaktiman"];

// let allHeroes=marval.concat(dc,indian);
// console.log(allHeroes.toString());




// let numbers=[12,15,48,48,4,2,];

// console.log(numbers);



//question===========

// let company=["bloomberg","microsoft","uber","google","ibm","netflix"];
//  company.push("Amazon")


// console.log(company.toString())





//function===============
//block of code that perform a specific task , can be invoked whenever needed================


// function myFunction(){
//    console.log("hello seju")
// }
// myFunction()

// function sum(a,b){
//    console.log(a+b)
// }
// sum(45,44)



// function multi(a,b){
//    return a*b}
// let result=multi(45,78)
//    console.log(result)



//Arrow function==================

//   const arrowSum=(a,b)=>{
//    console.log(a+b)

//   }
//   arrowSum(45,1)


//for each-----------------

// let city =["delhi","pune","mumbai"];
// city.forEach((val,idx)=>{
//    console.log(val.toUpperCase(),idx,city)
// })

// let arr=[1,20,30,45,5,65,745];
// arr.forEach((val)=>{
//    console.log(val*val)
// })


// let num=58;

// let user=prompt("guess the number");
// while(user!=num){
//    user=prompt("try again");
// }
// console.log("nice guess")


//map method================

// let num=[2,3,4,5,6,7,8];
// newone=num.map((val)=>{
//    return val*2;
// });
// console.log(newone);

//filter===============================

// let num=[2,3,45,6,7,8,6,7];
// let newOne=num.filter((val)=>{
//    return val%2===0;
// });
// console.log(newOne,'is a even number')

// let num=[1,2,3,4,5];
// let total=""
// for(let val of num){
//    total+=val;
// }console.log(total)

// let num =23;
// let user=prompt("guess the number")
// while(user!=num){
//    user=prompt("dobara try kro")
// }console.log("nice guess")

// let alpha=["a","b","c","d"]

// let number=[1,2,3,4,5,6];

// let mix=alpha.concat(number);
// console.log(mix);


//indexOf============

// let fruit=["apple","mango","lichi"]
// let newlist=fruit.indexOf("mango");
// console.log(newlist);

// let number=[1,3,4,2,5,7,4,5,3,7,9,0,5,7,4,]

// let arr=number.sort();
// let arrr=number.toReversed();
// console.log(arr);
// console.log(arrr);

// let fruit=["apple","banana","lichi","grapes"];

// for(let fruits of fruit){
//    console.log(fruits)
// }


// for(let i=0; i<fruit.length;i++){
//    console.log(fruit[i])
// }



// let name="gautam";
// let age=22;
// console.log(name);


// function squre(x){
//    return x*x
// }
// const newone=arr.map(squre)
// console.log(newone)

// const arr=[1,2,3,4];
// let newone=arr.map((arr)=>arr*2)
// console.log(newone);

//filter=======================


// let name="gautam";
// let age=22;
// let course="full-stack";

// let output=`hy i am ${name} and i am ${age} years old currently i am doing${course} `

// console.log(output)



// let marks=45;

// if (marks>90){
//    console.log('o')
// }else if(marks>80){
//    console.log('a')

// }else if(marks>70){
//    console.log('b')
// }else if(marks>50){
//    console.log('c')
// }else if(marks>30){
//    console.log('d')
// }else{console.log("fail")}


// let att="75";
// if (att>=75){
//    console.log("pass")
// }else{console.log("fail")}


// let i=0;
// for(let i=0; i<=10; i++){
//    if(i%2==0){
//       console.log(i)
//    }
// }


// let i=0;
// for (let i=0; i<=10; i+=2){
//    console.log(i)
// }



// let item =0;
// do{
//    console.log(item);
//    item+=2;
// }while(item<=10)


// let i = 0; 
// while (i <= 10) { 
//   console.log(i); 
//   i += 2;         
// }

// let num;

// do {
//    num = prompt("Enter number greater than 10");
// } while (num <= 10);

// let num=prompt("enter");
// while(num<=30){
//    num=prompt("try again")
// }

// let num=prompt("enter");
// do{num=prompt("nice one")}
// while(num<=49)

// let num=prompt("enter the odd number")
// while(num%2==0){
//    num=prompt("not odd")
// }
// let i = 1;

// while (i <= 5) {
//   console.log(i);
//   i++;
// }

// let arr = [10, 20, 30];
// let sum = 0;

// for (let val of arr) {
//   sum += val;
// }

// console.log(sum);


// let pass;

// do {
//   pass = prompt("Enter password");
// } while (pass !== "1234");




// let num;
// let user=prompt("enter here only even number")
// while(
//   user%3 !==0){user=prompt("lvden bhujyam")}
// {
//   console.log("good")
// }


//  let num="23";
//  let user=prompt("guess the nuimber");
//  while(num!==user){
// user=prompt("try again")
// }console.log("good")

// let num=45;
// let user=prompt("yanha likh be");
// while(num!=user){
//    user=prompt("dobara koshish kar")}
// {console.log("nice ,ye hui na baat")}

//  let num=0;
//  while(num<=20){
//    console.log(num)
//  num+=2;}

// let num=25;
// let user=Number(prompt("enter here"));
// while(num!==user){
//    user=Number(prompt("try again"))
// }console.log("very good")


// let num = 25;
// let user = Number(prompt("Enter number"));

// while (user !== num) {
//   user = Number(prompt("Try again"));
// }

// console.log("Very good");



// function hello(){
//    console.log("hy world how's the day")
// }
// hello();

// function greet (name){
//    console.log("hello "+name)
// }
// greet("fddfc")

// function add(a,b,c){
//    return a+b+c;
// }let result=add(5,4,2,5);
// console.log(result);

// function multi(a,b,c,d){
//    return a*b+c-d
// }let newresult=multi(5,6,9,8)
// console.log(newresult);

// let sum=(a,b)=>
// a+b;
// console.log(sum(15,15))

// let mul=(()=>{

// })







// function hello(){
// console.log("hello gautam")
// }
// hello()

// function hello(a,b){
//    return a+b;
// }
// console.log(hello(23,34))


// function hy(a,b){
// console.log(a+b)
// }
// hy(12,12)

// function multiply(a,b){
// return a*b
// }
// let result=multiply(12,12)
// console.log(result)


// let mult=(a,b)=>a*b;
// let result=mult(12,12);
// console.log(result)

// let add=(a,b)=>a+b;
// console.log(add(12,11))

// let sub=((a,b)=>{return a-b;

// })
// console.log(sub(100,20))

// let subb=((a,b)=>{
//    return a-b
// })
// let resultt=subb(12,2);
// console.log(resultt);

///////////////////////////////////////this one//////////////////////////////////////////

// let num="";
// let user=prompt("enter value unser 20 to 30")
// while(user>=30 || user<=20){
//    user=prompt("galat ! dobara guess kro")
// }
// console.log("very good")


// const checkEvenorOdd=(num)=>{
//    if(num%2===0){
//       return "even"
//    }else{return "odd"}
// }
// console.log(checkEvenorOdd(12))


///////////////////////////////////////TRY THIS ONE/////////////////////////////////////////////////////

// console.log("jlti aoo khana teyaar hai")
// setTimeout((husband)=>{

// console.log("ruko 5 sec me aya")},2000)
// setTimeout(()=>{
//    console.log("aa gya jldi khana do bhukh lgi hai")
// },7000)



// let arr=[1,2,3,4,5];
// arr.forEach((num)=>{
//    console.log(num*3)
// })

// function greet(callback){
//    console.log("hello gautam");
//    callback();
// }
// function one(){
//    console.log("welcome")
// }
// greet(one);





// function add(a,b){
//    console.log(a+b)
// };
// function multiply(a,b){
//    console.log(a*b)
// }

// console.log(add(12,12));
// console.log(multiply(12,12));

// function add(a,b){
//    return a+b
// }
// function multi(a,b){
//    return a*b
// }

// console.log(add(12,12))
// console.log(multi(12,12))


// let add =(a,b)=>a+b;
// let multi=(a,b)=>a*b;
// console.log(add(10,10))
// console.log(multi(10,10))


// let even=(num)=>{
//    if(num%2===0)
//      {return "even"}
// else{return "odd"}}
// console.log(even("11"));



// const checkEvenorOdd=(num)=>{
//    if(num%2===0){
//       return "even"
//    }else{return "odd"}
// }
// console.log(checkEvenorOdd(12))


// let even =(num)=>num%2===0 ? "even":"odd";
// console.log(even(12));

// let arr = [1,2,3];
// arr.forEach(num => {
//    console.log(num)
// });


// let arr=[10,20,30,15,48,55,33,486];
// arr.forEach((num)=>{
// if(num%2===0){
//    console.log(num)
// }
// })


//-----------------------------------------------------
// function greet(){
//    console.log("Welcome to FSD")
// }
// greet();


//--------------------------------------------------------

// function some(a,b){
//    return a*b
// }
// console.log(some(12,12))


//----------------------------------------------------


// function sum(a=4,b=5,){
//    return(a+b)
// }
// console.log(sum(10,10))


//------------------------------------------------------

// let sentence="     hello my name is gautam    ";
// console.log(sentence.length);
// console.log(sentence.trim())
// console.log(sentence.toUpperCase().trim())


//-----------------------------------------------


// console.log(Math.ceil(5.1))
// console.log(Math.sqrt(64))
// console.log(Math.round(64))


//------------------------------------------------------

// console.log(Math.floor(Math.random()*100000)+200000);

// console.log(Math.floor(Math.random)*900000+100000)

// console.log(Math.floor(Math.random()*900000)+100000)


// console.log(Math.floor(Math.random()*900000)+100000)


// console.log(Math.floor(Math.random()*900000)+100000);

// console.log("jaldi aao khane khana")
// console.log("ruko 5 sec me aya")
// setTimeout(()=>{
//    console.log("lo aa gya ab khana do")
// },5000);

// console.log("jlti aoo khana teyaar hai")
// setTimeout((husband)=>{

// console.log("ruko 5 sec me aya")},2000)
// setTimeout(()=>{
//    console.log("aa gya jldi khana do bhukh lgi hai")
// },7000)


// let num="";
// let user=prompt("enter the number")
// while(user>30 || user<20){
//  user=prompt("wrong")
// } 
//   console.log("correct")

//   let num="";
// let user=prompt("enter value unser 20 to 30")
// while(user>=30 || user<=20){
//    user=prompt("galat ! dobara guess kro")
// }
// console.log("very good")


//////////////////////////OBJECT/////////////////////////////////////


// let student ={
//    name:["gautam","seju","dheeraj","mohini"],
//    age:22,
//    class:12,
//    passORfail:true,

//    good(){
//       console.log("all students are performing very well")
//    },
//    bad(){
//       console.log("some student are too lazy")
//    }}
//    console.log(student.name)
//    console.log(student.age)
//    student.good();
//    student.bad();



// let num=0;
// for(let num=0; num<=10; num+=2)
// // console.log(num)


// let num=0;
// while(num<=20){
// console.log(num)
// num+=2
// }


// let student ={
//    name:["gautam","seju","dheeraj","mohini"],
//    age:22,
//    class:12,
//    passORfail:true,


//    good(){
//       console.log("all students are performing very well")
//    },
//    bad(){
//       console.log("some student are too lazy")
//    }}
   // console.log(student.name)
   // console.log(student.age)
   // console.log(student.hobbies)
   // student.good();
   // student.bad();

   // student.hobbies=["games","trecking"]
   // console.log(student)

   // student.topper=["gautam","seju"]


   // const isEvan=
   // console.log(isEvan(13))

//    let num = 10;
// let result = (num % 2 === 0) ? "even" : "odd";
// console.log(result);


// let num = 12;
// console.log(num%2===0 ? "even" : "odd");

// console.log(this)

// let num=2;
// while(num<=20){
//    console.log(num)
//    num+=2
// };


// console.log("may i come in sir ?");
// console.log("wait 3-5 sec")
// setTimeout(()=>{
//   console.log("now can i come in sir")
// },3500)


// let num=15;
// console.log(num%2 === 0 ? "even" : "odd");


// let i=0;
// for(let i=0; i<=20; i+=2){
//    console.log(i)
// }

// let i=0;
// while(i<=20){
//    console.log(i)
//    i+=2
// }

// let num=25;
// let user=prompt("guess the number")
// // console.log(user==num? "correct ans":"try again")

// while(user!=num){
//    user=prompt("try agsin")
// }
// console.log("nice")

// let sum=(a,b)=>a+b;
// console.log(sum(12,12))

// function multi(a,b){
//    return a*b
// }
// console.log(multi(12,12))

// let num=[1,2,3,4,5];
// let sum=0
// for(let val of num)   sum+=val;
// console.log(sum,"this is the sum of num");

// num.forEach((val)=>{sum+=val
// })
// console.log(sum)

// console.log([1,2,3,4,25].reduce((a,b) => a+b, 0));
// 
// let num=[1,2,3,4,5];
// let result=num.reduce((a,b)=>{ return a+b
// })
// console.log(result)

// let num=[1,2,3,4,5];
// let result=num.reduce((a,b)=>a+b);
// console.log(result)

// let num = [1,2,3,4,5];

// let result = num.reduce((a, b) => a + b);

// console.log(result);


// let num=[1,2,3,4,15];
// let sum=0;
// for(let val of num)sum+=val;
// console.log(sum)

///////////////////for each||||filter||||map|||||reduse/////////////////////////


// let num=[1,2,3,4,5];
// let result=num.filter((val)=>val>3
// )
// console.log(result)


// let num=[11,22,33,44,55];
// let result=num.map((add)=>{return add+10
// });
// console.log(result)


// let num=[1,2,3,4,5];
// let add=0;
// let result=num.forEach((val)=>val+=10)
// console.log(result)

// let num = [1,2,3,4,5];

// num.forEach((val, i) => {
//   num[i] = val + 10;
// });

// console.log(num);


// let num=[1,2,3,4]
// num.forEach((val,index)=>{
//    num[index]=val+10
// })
// console.log(num)

// const num=[1,2,3,4,5];
// let sum=num.reduce((a,b)=>{
// return a+b
// },0)
// console.log(sum)


// let user =prompt("guess the number");
// while(user<=20 ||user>=30){
//    user=prompt("try again")
// }
//    console.log("very good")


// let num=[1,2,3,4,5,6,7,8,9,10];
// let sum=0;
// for(let val of num){
//  sum = sum+val;
// }
// console.log(sum)


// let shopingCart=[{
//    phone : "iphone 17",
//    price : 100000
// },{
//    laptop : "acer lite",
//    price : 52000
// },{
//    chair : "tire chair",
//    price :5000
// },{
//    table : "wood table",
//    price : 8000
// },{cource:"full-stack",
//    price :35000
// }];

// let totalOfItems=shopingCart.reduce((a,b)=>{return a+b.price
// },0)
// console.log('your total is = rs',totalOfItems)



//////////////////////DOM /////////////////////////////////////////////////////


// function changeBC(){
//    document.querySelector("body").style.backgroundColor="grEEN";
// }

// let age=18;
// console.log(age>=18 ? "adult":"not adult");



let num='55';
let user=prompt("guess the number")
while(user!==num){
   user=prompt("try again")
}console.log("nice guess");