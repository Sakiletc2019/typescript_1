//add teo number
let a= 5;
let b= 6;

type func=(
    a:number,
    b: number,
)=> number;

const add:func=(a,b)=>{
    return a+b;
};

export {add};