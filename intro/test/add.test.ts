import {add} from "../src/add.ts";
import {assertEquals} from "jsr:@std/assert";

Deno.test("Add Test: ",()=>{
    let result=add(5,6);
    assertEquals(result, 11);
})

