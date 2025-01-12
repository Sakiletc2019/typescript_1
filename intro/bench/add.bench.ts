import { add } from "../src/add";
import {assert, assertEquals} from "jsr:@std/assert";

Deno.bench("add Benchmark",()=>{
    assert(true);
    const result=add(3,4);
    
    assertEquals(result, 7);
})