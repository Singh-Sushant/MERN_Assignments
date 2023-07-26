// ques 1 

function one(){
    return 1;
}
function two(){
    return 2;
}

function add(){
    // console.log(arguments.length);
    let sum = 0 ;
    for(let i = 0 ; i<arguments.length ; i++){
        if(typeof arguments[i] == 'function'){
            let a = arguments[i];
            sum+=a;
        }
        if(arguments[i] instanceof Array){
            // console.log(sum)
            for(let j = 0 ; j<arguments[i].length ; j++){
                sum+=arguments[i][j];
                //console.log(sum + " ");
            }
            // continue;
        }
        else{sum+=isNaN(parseInt(arguments[i]))?0:parseInt(arguments[i]);
        console.log(sum)
        }
    }
    return sum;
}

console.log(add([1,2],2,3,1,one()));



// ques 2 -> add function using spread

// function one(){
//     return 1;
// }
// function two(){
//     return 2;
// }

function add(...arg){   
    // console.log(arguments.length);
    let sum = 0 ;
    for(let i = 0 ; i<arg.length ; i++){
        if(typeof arg[i] == 'function'){
            let a = arg[i];
            sum+=a;
        }
        if(arg[i] instanceof Array){
            // console.log(sum)
            for(let j = 0 ; j<arg[i].length ; j++){
                sum+=arg[i][j];
                //console.log(sum + " ");
            }
            // continue;
        }
        else{sum+=isNaN(parseInt(arg[i]))?0:parseInt(arg[i]);
        // console.log(sum)
        }
    }
    return sum;
}

console.log(add([1,2],2,3,1,one()));



// ques 3 

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

dayandtime();

// ques 4    
function datee(){
    let d = new Date();
    let dd = (d.getDate());
    let mm = d.getDay();
    let yyyy = d.getFullYear();
    console.log(`Date :  ${dd} - ${mm} - ${yyyy}  ,  ${dd} / ${mm} / ${yyyy} `);
}   
datee(); 