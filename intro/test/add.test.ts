import {add} from "../src/add.ts";
import {assertEqual} from "jsr:@std:assert";

Deno.test("Add Test: ",()=>{
    let result=add(5,6);
    assertEqual(result, 11);
})

