// render.mjs — renders design/news.html → entry.png via Playwright (headless, no root)
import { chromium } from 'playwright';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

const here = fileURLToPath(new URL('.', import.meta.url));
const out = process.argv[2] ?? join(here, '..', 'entry.png');

const b = await chromium.launch({ headless: true });
const p = await b.newPage({ viewport: { width: 1024, height: 1024 }, deviceScaleFactor: 1 });
await p.goto('file://' + join(here, 'news.html'), { waitUntil: 'load' });
await p.waitForTimeout(500);
await p.screenshot({ path: out, clip: { x: 0, y: 0, width: 1024, height: 1024 } });
await b.close();
console.log('written', out);