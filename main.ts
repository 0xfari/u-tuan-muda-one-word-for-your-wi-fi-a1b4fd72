import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// OneBar: the signal strength the router reports most honestly —
// one bar, in the corner, behind two walls and a microwave.
// The router brags about the one bar it has left, like a trophy.
// Every dead zone in the house agrees: this is the honest name.
const WORD = "OneBar";

const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

function emptyDir(dir: string): void {
  mkdirSync(dir, { recursive: true });
  for (const name of readdirSync(dir)) {
    rmSync(join(dir, name), { recursive: true, force: true });
  }
}

function run(): void {
  emptyDir(OUT_DIR);
  writeFileSync(join(OUT_DIR, "entry.txt"), WORD + "\n", "utf8");
}

run();
