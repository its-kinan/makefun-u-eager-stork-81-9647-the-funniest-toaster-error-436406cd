// The Funniest Toaster Error Message
// Deterministic: no network, no clock, no randomness. Writes one fixed
// error line — a toaster that has hit its contract limit — to
// <output dir>/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Error E-04: 4,112 slices toasted. My contract ended at 4,000.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
