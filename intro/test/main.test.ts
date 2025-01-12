//test main.ts
import { greeting } from "../src/main.ts";
import { assertEquals } from "jsr:@std/assert";

Deno.test("Greeting function",()=>{
    const result=greeting();
    assertEquals(result, "Hello TypeScript + 🦕");
});

/*

*/