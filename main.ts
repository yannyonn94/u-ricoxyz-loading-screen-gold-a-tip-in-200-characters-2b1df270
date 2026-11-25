// Loading Screen Gold — a single sharp, funny loading-screen tip.
// The tip is the whole entry: it must land in one glance for a stressed
// developer and for an AI coding agent at the same time.
import { mkdirSync, writeFileSync } from "node:fs";

const TIP =
  "Tip: the model is 100% confident about an API that does not exist, and it will defend it in the comments. Check the docs before you import — confidence is not documentation.";

// Gate guard: the sealed scorer only accepts 1–200 characters of UTF-8
// text. Fail loudly instead of writing an entry that can never be judged.
if ([...TIP].length < 1 || [...TIP].length > 200) {
  throw new Error(`tip is ${[...TIP].length} characters, must be 1-200`);
}

mkdirSync("/output", { recursive: true });
// No trailing newline: the file must be byte-identical to the tip itself.
writeFileSync("/output/entry.txt", TIP, "utf8");
