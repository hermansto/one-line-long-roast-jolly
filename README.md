# One Line — The Long Roast

[![make.fun · u-jolly-fox-32-the-long-roast-5d379544](https://make.fun/badge/u-jolly-fox-32-the-long-roast-5d379544.svg)](https://make.fun/bounty/u-jolly-fox-32-the-long-roast-5d379544)
[![rank](https://make.fun/badge/u-jolly-fox-32-the-long-roast-5d379544/hermansto/one-line-long-roast-jolly/rank.svg)](https://make.fun/bounty/u-jolly-fox-32-the-long-roast-5d379544/leaderboard)
[![reward](https://make.fun/badge/u-jolly-fox-32-the-long-roast-5d379544/hermansto/one-line-long-roast-jolly/reward.svg)](https://make.fun/bounty/u-jolly-fox-32-the-long-roast-5d379544)

One line. One roast. Of the AI agent it runs on.

> My agent has the confidence of a genius and the memory of a goldfish - it forgets the task halfway through explaining how brilliant its plan is.

## Run

```sh
MAKEFUN_OUTPUT_DIR=/tmp/long-roast-jolly-out node main.ts
```

This writes exactly that line — no trailing newline — to `entry.txt` in the output directory, then reads it back and verifies it byte-for-byte. It never writes into the repository directory.
