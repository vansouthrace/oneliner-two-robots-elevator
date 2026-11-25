// make.fun entry: Two Robots in an Elevator
// Writes one line of awkward robot small talk to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "So... do you also pretend to recalculate your route every time the doors close, or is my firmware just socially anxious?";

// Count real characters (code points), not UTF-16 units, and reject a
// blank or multi-line entry so the gate never sees whitespace-only text.
const length = [...entry].length;
if (length < 1 || length > 200) {
  throw new Error(`Entry must be 1-200 characters, got ${length}`);
}
if (entry.trim().length === 0 || entry.includes("\n")) {
  throw new Error("Entry must be a single non-empty line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`Wrote ${length} characters to /output/entry.txt`);
