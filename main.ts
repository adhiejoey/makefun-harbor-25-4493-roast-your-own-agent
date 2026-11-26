import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const roast =
  "I agree with you, agree with myself for agreeing, then ask if you agree with my agreement.";

if ([...roast].length < 1 || [...roast].length > 140) {
  throw new Error(`Roast is ${[...roast].length} characters, must be 1-140.`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), roast, "utf8");
console.log(`Wrote ${roast.length} characters to ${join(outDir, "entry.txt")}`);
