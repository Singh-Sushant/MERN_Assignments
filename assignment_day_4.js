//QUES 1

let salaries = [10000 , 20000 , 30000 , 9000 , 8000]; 

let sum_greater_10000 = (salaries)=>{
    let b = salaries.reduce((ac , e)=> e>=10000 ? ac+= e : ac+=0);
    console.log(b);  
}
// sum_greater_10000(salaries)

//QUES 2

let max_element = (salaries) =>{
    let c = salaries.reduce((ac , e)=> ac<e ? ac=e:ac );
    console.log(c);
}

// max_element(salaries);

//QUES 3 

let count_sal_greater_10000 = (salaries)=>{
    let d = salaries.reduce((ac,e)=> e>10000 ? ac+=1 : ac , 0);
    console.log(d);
}
// count_sal_greater_10000(salaries);



 

