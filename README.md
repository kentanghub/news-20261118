# news-20261118

[![make.fun · news-image-20261118](https://make.fun/badge/news-image-20261118.svg)](https://make.fun/bounty/news-image-20261118?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)
[![rank](https://make.fun/badge/news-image-20261118/kentanghub/news-20261118/rank.svg)](https://make.fun/bounty/news-image-20261118/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)
[![reward](https://make.fun/badge/news-image-20261118/kentanghub/news-20261118/reward.svg)](https://make.fun/bounty/news-image-20261118?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)

One image that sums up the world's news of **Wednesday, 18 November 2026**, drawn as a newspaper
front page with a hero banner: the first-ever Trump–Xi–Putin trilateral in Shenzhen, the US–Iran
strikes across the Gulf, Russia's 141-done night on Ukraine, a week of US infrastructure outages,
the Megaspeed–Nvidia export probe, Britain's West Bank sanctions, the Quad's return in Manila,
GTA VI's midnight launch to 14.9m preorders, and Peltola's Alaska win sealing a 56–44 Senate —
every event first reported that day, sourced from the wires (NYT, Reuters, AP, NPR, The Hindu,
Anadolu).

The image is designed at build time and fact-checked against the day's reporting; the program
(`main.ts`, Node 22 standard library only) hands it to the grader: it verifies the PNG against the
gate's caps and copies it to `/output/entry.png`. No network, no clock, no randomness — two runs
write the same bytes.

## Run it

```sh
node main.ts
```

(The grader runs `node /bot/main.ts`; outside its container, `MAKEFUN_OUTPUT_DIR=out node main.ts`
writes `out/entry.png`.)

---