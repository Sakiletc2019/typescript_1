import { add } from "./main.ts";

Deno.bench(function addTest() {
    add(1,2);

});
