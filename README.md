# Unilorin Post-UTME — Interactive Study Guide

An interactive, concept-first practice tool for the University of Ilorin
Post-UTME screening exam. 1,421 curated questions across English, Maths, and
General Knowledge — including a dedicated Biology & Life Science topic —
weighted to match the real exam (80% English / 10% Maths / 10% G.K.), with
a topic browser ranked by real past-paper reoccurrence, instant feedback +
explanations, and a timed 50-question CBT simulation mode that samples
questions in the same proportions past papers actually do.

## Folder structure

```
unilorin-postutme-prep/
├── index.html        Main page — structure and content
├── css/
│   └── styles.css    All styling (design tokens, layout, components)
├── js/
│   ├── data.js        The question bank (1,421 questions), as a global QUIZ_DATA object
│   └── app.js          Application logic (rendering, quiz engine, state)
└── README.md          This file
```

`index.html` loads `js/data.js` **before** `js/app.js`, since `app.js`
reads the `QUIZ_DATA` global that `data.js` defines. Keep that load order
if you edit the `<script>` tags.

## Running it locally

No build step, no dependencies, no server required — it's plain
HTML/CSS/JS. Two options:

**Option A — just open it.** Double-click `index.html`. Because the
question data loads via a normal `<script src="js/data.js">` tag (not
`fetch`), this works even directly from the filesystem (`file://`), with
no CORS issues.

**Option B — serve it** (closer to how it'll behave once deployed):

```bash
cd unilorin-postutme-prep
python3 -m http.server 8000
# then open http://localhost:8000
```

## Deploying

This is a static site — any static host works. A few options:

- **Netlify / Vercel**: drag-and-drop the `unilorin-postutme-prep` folder
  onto their dashboard, or connect it to a git repo. No build command
  needed; the publish directory is the project root.
- **GitHub Pages**: push this folder to a repo and enable Pages, pointing
  at the root of the branch (or `/docs` if you move it there).
- **Any shared hosting / S3 / Cloudflare Pages**: upload the four
  items above (`index.html`, `css/`, `js/`, and this `README.md` is
  optional) to the web root.

No environment variables, no API keys, no backend — it's fully
self-contained.

## Editing the question bank

Each question in `js/data.js` follows this shape:

```js
{
  "q": "The students _____ politics when I entered the lecture room.",
  "o": { "A": "are discussing", "B": "have discussed", "C": "were discussing", "D": "discuss" },
  "a": "C",
  "concept": "An action in progress at a specific past moment uses past continuous.",
  "method": "'When I entered' interrupts the ongoing action \u2192 were discussing."
}
```

Questions are grouped under `topics`, which are grouped under `subjects`
(`english`, `math`, `gk`), each with a `weight` (used for the dashboard
ranking and for sampling the 80/10/10 split in CBT Simulation mode). Add,
edit, or remove questions directly in the `questions` arrays — no other
file needs to change.

## How topics are ranked, and how the past-paper PDFs were used

Each `topic` object also carries a `freq` number — its estimated
**reoccurrence across real past papers**. This came from a two-part
analysis:

1. **The original 976-question bank** was already built from past-paper
   mining, so each topic's existing question count is treated as a first
   signal of how often that topic shows up.
2. **Additional past-question archives** have been folded in over several
   rounds — six PDF compilations of 2006–2017-ish Unilorin Post-UTME
   papers, a 2021 "past questions with detailed explanations" compilation,
   a current-affairs/civics booklet, a collocations/vocabulary study
   guide, and a worked-example sheet on adverbial/adjectival word order.
   Each was parsed, de-duplicated against everything already in the bank,
   fact-checked (dropping or rewriting anything that turned out to be
   stale, ambiguous, or simply wrong in the source), and classified into
   the same topic taxonomy. Each topic's match count across this combined
   corpus is the second signal.

`freq = existing bank count + new corpus match count`. The topic browser
(`openSubject` in `js/app.js`) sorts topics within each subject by this
number, so the topic that has actually recurred most often sits at the
top — e.g. under General Knowledge, Nigerian government/history facts and
biology/life-science trivia rank highly because they show up constantly
across the archive.

The **CBT Simulation** mode (`weightedTopicPick` in `js/app.js`) uses the
same `freq` numbers to decide how many questions to draw from each topic:
a topic that recurs twice as often as another is roughly twice as likely
to appear in a simulated run, mirroring the real exam's actual skew
instead of sampling every topic within a subject equally.

**New in this update:** a dedicated **Biology & Life Science** topic under
General Knowledge (20 questions — classification, human body, plant
reproduction, disease/deficiency pairings, and core life processes like
osmosis and photosynthesis), plus targeted additions to General Science,
Nigerian Government, World Affairs, Geography, and Culture/Media, and to
several English and Maths topics — all sourced from the newly parsed
archive, hand-verified, and written with the same concept/method
explanation style as the rest of the bank. Unilorin's Post-UTME does not
have separate Biology/Chemistry/Physics papers — science content only
appears as General Knowledge trivia — so that's where it's grouped here.

## Notes

- Fonts (Newsreader, IBM Plex Sans, IBM Plex Mono) load from Google
  Fonts via `index.html`'s `<head>`; an internet connection is needed
  for them to render as designed. Without it, the page falls back
  gracefully to system fonts.
- Everything else (styling, logic, data) is local — the app works fully
  offline once the fonts have cached, or with system-font fallback if
  they never load.
