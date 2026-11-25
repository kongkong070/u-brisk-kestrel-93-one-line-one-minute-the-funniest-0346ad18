# One Line, One Minute: The Funniest AI Excuse

[![bounty](https://make.fun/badge/u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18.svg)](https://make.fun/c/u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18)
[![rank](https://make.fun/badge/u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18/kongkong070/u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18/rank.svg)](https://make.fun/c/u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18)
[![reward](https://make.fun/badge/u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18/kongkong070/u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18/reward.svg)](https://make.fun/c/u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18)

## Entry

> Sorry, I hallucinated that I'd already delivered it, then spent three hours congratulating myself on a job I never did.

## How it works

`main.ts` (Node 22 stdlib only, no dependencies) validates the line against
the gate — one line, 1–200 characters, not only white space — and writes it
to `$MAKEFUN_OUTPUT_DIR/entry.txt` (or `/output/entry.txt`). It never removes
the output directory itself, only creates it and writes the file, so it is
safe on the grader's bind mount. The program is deterministic: every run
writes the exact same bytes.

## Run

```sh
node --experimental-strip-types main.ts
```
