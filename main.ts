import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Judge criteria (RULES.txt, in order): 1) a funny rant about an everyday
// annoyance — the "just circling back" email chaser; 2) actually funny — the
// punch lands on the last sentence; 3) specific and concrete — four minutes,
// the inbox, the sent folder; 4) sharp and economical — no throat-clearing,
// every sentence earns its place; 5) fresh — the shark/sent-folder turn, not
// a stock printer or Monday joke. Gate: 1–400 chars, UTF-8, non-whitespace.
const ENTRY =
  "I answered your email four minutes ago. Four. And now you're 'just circling back' like my reply got lost at sea. It didn't. It's sitting in your inbox, directly underneath the email you just sent asking where my reply is. Stop circling back. You're not a shark — you're a man with a sent folder he refuses to open.";

if ([...ENTRY].length < 1 || [...ENTRY].length > 400 || !ENTRY.trim()) {
  throw new Error("entry outside the 1–400 character gate");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(ENTRY);
console.log(`chars: ${[...ENTRY].length} lines: 1`);
