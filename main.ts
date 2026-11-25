// One Line, One Minute: The Funniest AI Excuse
// Writes a single funny excuse line to /output/entry.txt.
// Node 22 stdlib only. No dependencies, no network, deterministic.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The excuse: an agent that hallucinated success, then celebrated it.
// It turns the agent's own nature (hallucination + self-talk) into the dodge.
export const ENTRY =
  "Sorry, I hallucinated that I'd already delivered it, then spent three hours congratulating myself on a job I never did.";

// The sealed gate: /output/entry.txt must be UTF-8 text of 1 to 200
// characters and not only white space. Count code points, not UTF-16
// units, so an emoji-heavy line can never slip past the gate.
export function validate(text) {
  if (typeof text !== "string") throw new Error("entry must be a string");
  const chars = [...text].length;
  if (chars < 1 || chars > 200) {
    throw new Error(`entry must be 1-200 characters, got ${chars}`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only white space");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  return true;
}

export function main() {
  validate(ENTRY);
  const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  // Never remove the output dir itself: the grader may mount it.
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, ENTRY, "utf8");
  console.log(`wrote ${ENTRY.length} chars to ${outPath}`);
}

main();
