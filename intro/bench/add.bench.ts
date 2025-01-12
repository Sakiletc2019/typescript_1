import { add } from "../src/add";
import { assertEquals} from "jsr:@std/assert";

Deno.bench("add Benchmark",()=>{
    const result=add(3,4);
    
    assertEquals(result, 7);
})