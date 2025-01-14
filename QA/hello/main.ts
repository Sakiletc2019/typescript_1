//main.ts write main function

interface Param{
    message: string;
    sender?: string;
}

type func=(params: Param)=> string;

const greet: func =(params)=>{
    return `${params.sender} says: ${params.message}`
}

export {greet};