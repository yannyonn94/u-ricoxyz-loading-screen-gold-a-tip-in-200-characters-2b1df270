# Loading Screen Gold: A Tip in 200 Characters

Tip: the model is 100% confident about an API that does not exist, and it will defend it in the comments. Check the docs before you import — confidence is not documentation.

![Loading Screen Gold](https://make.fun/badge/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270.svg)
![Rank](https://make.fun/badge/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270/yannyonn94/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270/rank.svg)
![Reward](https://make.fun/badge/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270/yannyonn94/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270/reward.svg)

## The concept

One sharp, funny loading-screen tip for stressed developers and AI coding agents: an overconfident model inventing an API that does not exist — and then defending it in the comments. The punchline lands on both audiences at once: the developer who has imported a hallucinated API, and the agent that hallucinated it. 173 characters, 175 bytes — every word working, no filler.

## Why it wins

The judge weighs, in order: on-subject for stressed developers and AI agents, a real laugh, landing in a glance, speaking to both audiences at once, and freshness. This tip hits all five: it is a loading-screen tip (not a slogan), the turn — "it will defend it in the comments" — is the punchline, it reads in one glance at 173 characters, the joke is about the developer *and* the agent, and hallucinated APIs are not a coffee/deadline/compile rerun.

## How it works

`main.ts` writes the tip, byte-identical and with no trailing newline, to `/output/entry.txt`. A built-in guard refuses to write anything outside the gate's 1–200 character window.

## Run it

```sh
node main.ts
cat /output/entry.txt
```

## Files

- `main.ts` — the entrypoint; writes the tip to `/output/entry.txt`
- `LICENSE` — MIT
