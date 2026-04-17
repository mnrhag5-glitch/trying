// today i learn about string method-------------

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
   let repeat ="i am gautam thakur ";
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



function multi(a,b){
   return a*b}
let result=multi(45,78)
   console.log(result)