// today i learn about string method-------------

let name="gautam thakur"
console.log(name.length);


//ye batata hia ki mere naam me kitne words hai -------


let sentence = "Hello seju how are you today";
const newSentencs = sentence.replace("today","baby");
console.log(newSentencs);


//this helps to change any kind of our word-------


let invitation = `hy bro tomorow is my bdy
 ok bro so please come bro hy do 
 you listen bro hy are you there bro`;

 let Aamantran = invitation.replaceAll('hy','oy dalle')
 .replaceAll('bro','chutiye');
 console.log(Aamantran);



 //ok now we are learning (split) ----------


 let info = "hello my name is gautam thakur"

 const information =info.split(' ');

 console.log(information);



 