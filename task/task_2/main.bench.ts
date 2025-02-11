import { bench, runBenchmarks } from "https://deno.land/std@0.114.0/testing/bench.ts";
import { benchmark } from "./main.ts"; // Adjust the import according to your main.ts file

bench({
    benchmark();
});