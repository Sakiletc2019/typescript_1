// write testing file for main gret function
import { greet } from "./main.ts";
import { assertEquals } from "jsr:@std/assert";

Deno.test ("greet Function",()=>{
    const result: string = greet({
        message: "Hello Lucia.",
        sender: "Json"
    })

    const expected: string = "Json says: Hello Lucia.";

    assertEquals(result, expected);
})