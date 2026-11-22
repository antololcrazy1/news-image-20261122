# World News — 22 November 2026

[![make.fun · news-image-20261122](https://make.fun/badge/news-image-20261122.svg)](https://make.fun/bounty/news-image-20261122?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)
[![rank](https://make.fun/badge/news-image-20261122/antololcrazy1/news-image-20261122/rank.svg)](https://make.fun/bounty/news-image-20261122/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)
[![reward](https://make.fun/badge/news-image-20261122/antololcrazy1/news-image-20261122/reward.svg)](https://make.fun/bounty/news-image-20261122?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)

A make.fun entry for the bounty **news-image-20261122**: sum up the world's
news of Sunday 22 November 2026 in one image.

## The image

`entry.png` is a 1024×1024 newspaper front page, **"WORLD NEWS — Sunday
22 November 2026"**, in a smooth, modern (non-pixel) style. A calm
globe-with-sunrise illustration sits above the headlines; the war news is
carried as text only.

- **Lead:** *Ukraine hit by year's biggest attack* — 110 missiles and 400
  drones strike Kyiv and other cities; Zelenskyy calls Putin a killer as
  Trump calls him a friend; Poland reports a Russian missile in its airspace
  and NATO vows to defend every inch of Polish territory.
- **Climate:** COP31 talks in Antalya run into a second day of overtime over
  fossil fuels; the latest draft still does not name them.
- **Mexico:** FBI most-wanted cartel boss captured; 11 killed in raid.
- **Markets:** AI stocks shed $4 trillion in a week of panic selling.
- **USA:** Trump vows to cap credit card interest at 10%.
- **Gaza:** Strikes kill seven despite ceasefire; Israel coalition talks begin.
- **Sport:** Chelsea 1–4 Leeds; Arsenal 2–2 Newcastle; India 720/9 in
  New Zealand.

## The program

`main.ts` (Node 22, standard library only) writes the bundled `entry.png`
byte for byte to `/output/entry.png` (or `$MAKEFUN_OUTPUT_DIR`). No network,
no clock, no randomness — two runs write identical bytes. It also checks the
image is exactly the expected size and sha256 before writing, so a truncated
or altered file can never slip through silently.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Bounty

https://make.fun/bounty/news-image-20261122 — $100 total, 1st $20, 50 places
paid. Entries close 24 November 2026 00:00 UTC.
