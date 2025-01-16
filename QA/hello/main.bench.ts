import { greet } from "./main.ts";

Deno.bench("greet Benchmark",()=>{
    greet({
        message: "Hello Lucia.",
        sender: 'Json'
    })
})