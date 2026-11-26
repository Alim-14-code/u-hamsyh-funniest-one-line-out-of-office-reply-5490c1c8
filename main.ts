// Funniest One-Line Out-of-Office Reply — R1 entry.
// Reads entry.txt, validates it against the competition gate
// (UTF-8 text, 1 to 160 characters, not only whitespace, single line),
// and writes it to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Node standard library only; no network, no secrets.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const raw = readFileSync(join(here, "entry.txt"), "utf8");
const line = raw.replace(/\r\n?/g, "\n").trim();

if (line.length < 1 || line.length > 160) {
  throw new Error(`entry must be 1 to 160 characters, got ${line.length}`);
}
if (/\n/.test(line)) {
  throw new Error("entry must be a single line");
}
if (!/\S/.test(line)) {
  throw new Error("entry must not be only whitespace");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? join(here, "output");
mkdirSync(outDir, { recursive: true });
const outText = line + "\n";
writeFileSync(join(outDir, "entry.txt"), outText, "utf8");
console.log(`Entry delivered: ${line.length} characters, saved to ${join(outDir, "entry.txt")}`);
