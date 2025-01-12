//Beanch mark test for src/main.ts 
//test main.ts
import { greeting } from "../src/main.ts";
import { assertEquals } from "jsr:@std/assert";

Deno.bench("Greeting function",()=>{
    const result=greeting();
    assertEquals(result, "Hello TypeScript + 🦕");
});

/*
PS C:\Users\sakil\OneDrive\Desktop\my\Typescript+deno\typescript_1> deno bench intro/bench/main.bench.ts
Check file:///C:/Users/sakil/OneDrive/Desktop/my/Typescript+deno/typescript_1/intro/bench/main.bench.ts
    CPU | 11th Gen Intel(R) Core(TM) i3-1115G4 @ 3.00GHz
Runtime | Deno 2.1.4 (x86_64-pc-windows-msvc)

file:///C:/Users/sakil/OneDrive/Desktop/my/Typescript+deno/typescript_1/intro/bench/main.bench.ts

benchmark           time/iter (avg)        iter/s      (min … max)           p75      p99     p995
------------------- ----------------------------- --------------------- --------------------------
Greeting function           54.5 ns    18,340,000 ( 34.5 ns … 135.2 ns)  65.9 ns 104.4 ns 116.7 ns
*/