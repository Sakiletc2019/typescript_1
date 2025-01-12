import { add } from "../src/add.ts";
import {assert, assertEquals} from "jsr:@std/assert";

Deno.bench("add Benchmark",()=>{
    assert(true);
    const result=add(3,4);
    
    assertEquals(result, 7);
})

/*
deno bench intro/bench/add.bench.ts
Check file:///C:/Users/sakil/OneDrive/Desktop/my/Typescript+deno/typescript_1/intro/bench/add.bench.ts
    CPU | 11th Gen Intel(R) Core(TM) i3-1115G4 @ 3.00GHz
Runtime | Deno 2.1.4 (x86_64-pc-windows-msvc)

file:///C:/Users/sakil/OneDrive/Desktop/my/Typescript+deno/typescript_1/intro/bench/add.bench.ts

benchmark       time/iter (avg)        iter/s      (min … max)           p75      p99     p995
--------------- ----------------------------- --------------------- --------------------------
add Benchmark           45.3 ns    22,080,000 ( 32.3 ns … 192.1 ns)  45.3 ns  93.7 ns 100.4 ns
*/