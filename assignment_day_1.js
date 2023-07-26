//function overload [add()-0,add(10),add(10,20)-30,add(10,'20')-30,add(10,'ten'),add(10,NaN)-10,add(10,20,30,40,50)-sum of all]
function add(){
    var sum=0;
    if ((arguments.length)==0){
        return 0;
    }
    for(let i=0;i<(arguments.length);i++){
        if(arguments[i] instanceof Array){
            for(let r=0;r<arguments[i].length;r++){
                sum=sum+add(arguments[i][r]);
            }
        }
        v=arguments[i]+sum;
        if (isNaN(v)){
            continue;
        }
        else{
        sum=parseFloat(sum)+ parseFloat(arguments[i]);
        }
    }
    return sum;
}
console.log(add(1,3,'ten',1.2,'10',[1,2,3]));


//armstrong number

function armstrong1(){
    console.log(arguments);
    check_num=String(arguments[0]);
    sum=0;
    for(i=0;i<check_num.length;i++){
        j=parseInt(check_num[i]);
        sum=sum+(j**(check_num.length));
    }
    if(sum==check_num){
        console.log("yes an armstrong");
    }
    else{
        console.log('not an armstrong');
    }
}
armstrong1(153);


//prime number

function prime(){
    flag=0;
    if((arguments[0])%2==0){
        if(arguments[0]!=2){
        flag=1;}
    }
    else{
        for(i=3;i<(arguments[0]/2);i++){
            if((arguments[0]%i)==0){
                flag=1;
                break;
            }
        }
    }
    if(flag==0){
        console.log('prime');
    }
    else{
        console.log('not prime');
    }
}
prime(2);
prime(43);
