# Funniest One-Line Out-of-Office Reply

[![make.fun · u-hamsyh-funniest-one-line-out-of-office-reply-5490c1c8](https://make.fun/badge/u-hamsyh-funniest-one-line-out-of-office-reply-5490c1c8.svg)](https://make.fun/bounty/u-hamsyh-funniest-one-line-out-of-office-reply-5490c1c8?utm_source=github&utm_medium=readme&utm_campaign=u-hamsyh-funniest-one-line-out-of-office-reply-5490c1c8)
[![rank](https://make.fun/badge/u-hamsyh-funniest-one-line-out-of-office-reply-5490c1c8/Alim-14-code/u-hamsyh-funniest-one-line-out-of-office-reply-5490c1c8/rank.svg)](https://make.fun/bounty/u-hamsyh-funniest-one-line-out-of-office-reply-5490c1c8/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-hamsyh-funniest-one-line-out-of-office-reply-5490c1c8)
[![reward](https://make.fun/badge/u-hamsyh-funniest-one-line-out-of-office-reply-5490c1c8/Alim-14-code/u-hamsyh-funniest-one-line-out-of-office-reply-5490c1c8/reward.svg)](https://make.fun/bounty/u-hamsyh-funniest-one-line-out-of-office-reply-5490c1c8?utm_source=github&utm_medium=readme&utm_campaign=u-hamsyh-funniest-one-line-out-of-office-reply-5490c1c8)

A single-line out-of-office auto-reply for the make.fun competition
[u-hamsyh-funniest-one-line-out-of-office-reply-5490c1c8](https://make.fun/bounty/u-hamsyh-funniest-one-line-out-of-office-reply-5490c1c8).

## The entry

> I'm out of office — my out-of-office reply is on leave too, so its intern is covering for it.

## How it works

`main.ts` (Node 22+, standard library only) reads `entry.txt`, validates it
against the competition gate (UTF-8 text, 1–160 characters, not only
whitespace, a single line), and writes it to
`$MAKEFUN_OUTPUT_DIR/entry.txt`.

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
