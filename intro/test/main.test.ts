//test main.ts
import { greeting } from "../src/main.ts";
import { assertEquals } from "jsr:@std/assert";

Deno.bench("Greeting function",()=>{
    const result=greeting();
    assertEquals(result, "Hello TypeScript + 🦕");
});

/*
PS C:\Users\sakil\OneDrive\Desktop\my\Typescript+deno\typescript_1> deno bench intro/test/test.main.ts
Check file:///C:/Users/sakil/OneDrive/Desktop/my/Typescript+deno/typescript_1/intro/test/test.main.ts
    CPU | 11th Gen Intel(R) Core(TM) i3-1115G4 @ 3.00GHz
Runtime | Deno 2.1.4 (x86_64-pc-windows-msvc)

file:///C:/Users/sakil/OneDrive/Desktop/my/Typescript+deno/typescript_1/intro/test/test.main.ts

benchmark           time/iter (avg)        iter/s      (min … max)           p75      p99     p995
------------------- ----------------------------- --------------------- --------------------------
Greeting function           45.5 ns    21,990,000 ( 31.4 ns … 161.9 ns)  46.7 ns  97.3 ns 100.1 ns
*/