import {add} from "../src/add.ts";
import {assertEquals} from "jsr:@std/assert";

Deno.test("Add Test: ",()=>{
    assertEquals(add(5, 6), 11);
})

