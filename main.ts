// The Long Roast — one line, roasting the agent that runs on it.
// The line lives in a single constant so the guard below can check it
// before anything is written anywhere.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Byte-level check below, so an invisible trailing newline or a
// multi-byte surprise cannot slip past a plain string comparison.

const LINE =
  "My agent has the confidence of a genius and the memory of a goldfish - it forgets the task halfway through explaining how brilliant its plan is.";

// The grader only ever sees this one output directory. Never write
// into the repository itself — it is mounted read-only at run time.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

if (LINE.length === 0) {
  throw new Error("entry must not be empty");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be exactly one line");
}
if (LINE.length > 200) {
  throw new Error(`entry is ${LINE.length} characters, over the 200 limit`);
}

mkdirSync(outDir, { recursive: true });
const entryPath = join(outDir, "entry.txt");

// No trailing newline on purpose: the file must be exactly the line.
writeFileSync(entryPath, LINE, "utf8");

const writtenBytes = readFileSync(entryPath);
const expectedBytes = Buffer.from(LINE, "utf8");
if (!writtenBytes.equals(expectedBytes)) {
  throw new Error("entry.txt does not match the line byte-for-byte");
}
if (writtenBytes.length > 0 && writtenBytes[writtenBytes.length - 1] === 0x0a) {
  throw new Error("entry.txt must not end with a newline");
}
console.log(
  `Wrote ${LINE.length} characters (${expectedBytes.length} bytes) to ${entryPath}`,
);
