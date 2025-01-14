//main.ts write main function

interface Param{
    message: string;
    sender?: string;
};

type func=(params: Param)=> string;

const greet: func =(params)=>{
    return `${params.sender} says: ${params.message}`
};

export {greet};


//for standalone run
if (import.meta.main){
    console.log(greet({
        message: 'Hi Lucia',
        sender: 'json'
    }));
};