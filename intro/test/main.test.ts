//test main.ts
import { greeting } from "../src/main.ts";
import { assertEquals } from "jsr:@std/assert";

Deno.test("Greeting function",()=>{
    const result=greeting();
    assertEquals(result, "Hello TypeScript + 🦕");
});

/*
deno test intro/test/main.test.ts   
Check file:///C:/Users/sakil/OneDrive/Desktop/my/Typescript+deno/typescript_1/intro/test/main.test.ts
running 1 test from ./intro/test/main.test.ts
Greeting function ... ok (0ms)

ok | 1 passed | 0 failed (4ms)
*/