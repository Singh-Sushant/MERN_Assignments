// 4 functions 

//normal functions 

function areaperi(){
    let a = prompt("Input length");
    let b = prompt("Input breadth");

    console.log("Area = " + parseInt(a)*parseInt(b));
    console.log("Perimeter = " + 2*(parseInt(a) + parseInt(b)));
}



//arrow func
let a = prompt("Input length");
let b = prompt("Input breadth");
const func = (a=0,b=0)=>{
    
        return `area = ${parseInt(a*b)}   perimeter = ${2*(parseInt(a)+parseInt(b))}`;

    }

    //also
    // const ann =(a,b)=> a+b;

//anonymous functions 

// let a = prompt("Input length");
// let b = prompt("Input breadth");
function calculate(){
    
    var area = function (a,b){
        return a*b;
    }
    var perimeter = function (a,b){
        return 2*(a+b);
    }

    return [area , perimeter];
}


//name functions 

// let a = prompt("Input length");
// let b = prompt("Input breadth");
function calculate(){

    var area = function func1(a,b){
        return a*b;
    }
    var perimeter = function func2(a,b){
        return 2*(a+b);
    }

    return [area, perimeter];
}

console.log(calculate()[0](a,b));
console.log(calculate()[1](a,b));




//DAY AND TIME USING 4 DIFFERENT FUNCTIONS 

//Normal function

function dayandtime(){
    let d = new Date();
    let days = {0:"Sunday" , 1:"Monday" , 2:"Tuesday" , 3:"Wednesday" , 4: "Thursday" , 5:"Friday" , 6:"Saturday"}
    console.log("Today is " + days[d.getDay()])
    var a = d.getHours();
    if(a>12){
        a=a-12;
        a = a + " PM";
    }
    else{
        a = a + " AM";
    }
    console.log(`current time is ${a} : ${d.getMinutes()} : ${d.getSeconds()}`)
}

//Arrow function

const dayandtime2 = ()=>{
    let d = new Date();
    let days = {0:"Sunday" , 1:"Monday" , 2:"Tuesday" , 3:"Wednesday" , 4: "Thursday" , 5:"Friday" , 6:"Saturday"}
    console.log("Today is " + days[d.getDay()])
    var a = d.getHours();
    if(a>12){
        a=a-12;
        a = a + " PM";
    }
    else{
        a = a + " AM";
    }
    console.log(`current time is ${a} : ${d.getMinutes()} : ${d.getSeconds()}`)
}

//Anonymous

const dayandtime3 = function(){
    let d = new Date();
    let days = {0:"Sunday" , 1:"Monday" , 2:"Tuesday" , 3:"Wednesday" , 4: "Thursday" , 5:"Friday" , 6:"Saturday"}
    console.log("Today is " + days[d.getDay()])
    var a = d.getHours();
    if(a>12){
        a=a-12;
        a = a + " PM";
    }
    else{
        a = a + " AM";
    }
    console.log(`current time is ${a} : ${d.getMinutes()} : ${d.getSeconds()}`)
}

//Name functions

const dayandtime4 = function data(){
    let d = new Date();
    let days = {0:"Sunday" , 1:"Monday" , 2:"Tuesday" , 3:"Wednesday" , 4: "Thursday" , 5:"Friday" , 6:"Saturday"}
    console.log("Today is " + days[d.getDay()])
    var a = d.getHours();
    if(a>12){
        a=a-12;
        a = a + " PM";
    }
    else{
        a = a + " AM";
    }
    console.log(`current time is ${a} : ${d.getMinutes()} : ${d.getSeconds()}`)
}

dayandtime4();





// DATE function using 4 different ways 

//normal function 

function datee(){
    let d = new Date();
    let dd = (d.getDate());
    let mm = d.getDay();
    let yyyy = d.getFullYear();
    console.log(`Date :  ${dd} - ${mm} - ${yyyy}  ,  ${dd} / ${mm} / ${yyyy} `);
} 

//Arrow function

const datee2 = ()=>{
    let d = new Date();
    let dd = (d.getDate());
    let mm = d.getDay();
    let yyyy = d.getFullYear();
    console.log(`Date :  ${dd} - ${mm} - ${yyyy}  ,  ${dd} / ${mm} / ${yyyy} `);
} 

//Anonoymous function

const datee3 = function(){
    let d = new Date();
    let dd = (d.getDate());
    let mm = d.getDay();
    let yyyy = d.getFullYear();
    console.log(`Date :  ${dd} - ${mm} - ${yyyy}  ,  ${dd} / ${mm} / ${yyyy} `);
} 

// Name function 

const datee4 = function calc(){
    let d = new Date();
    let dd = (d.getDate());
    let mm = d.getDay();
    let yyyy = d.getFullYear();
    console.log(`Date :  ${dd} - ${mm} - ${yyyy}  ,  ${dd} / ${mm} / ${yyyy} `);
} 





