import { mkdirSync, writeFileSync } from "node:fs";

const greeting =
  "You've reached Mochi. I'm busy knocking things off the shelf. Leave a message after the beep. Your message is next.";

// The server gate only accepts UTF-8 text of 1 to 120 characters,
// not only white space. Refuse to write anything that would fail it.
if (greeting.length < 1 || greeting.length > 120 || /^\s*$/.test(greeting)) {
  throw new Error(`greeting fails the 1-120 character gate: ${greeting.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", greeting, "utf8");
