# CausaTwin v0.6.0 — Release Notes

**Released:** 2026-09-23

## What is v0.6?

CausaTwin v0.6 is a **50-case forward-looking drug pipeline benchmark** that compares a 4-agent × 4-round adversarial debate system against a single-agent (Solo) decision baseline. Unlike v0.3, which validated the algorithm itself, v0.6 tests it on **forward-looking cases** (locked at 2023-12-31) with **gold-standard outcomes from the actual 2024 calendar year** — preventing LLM hindsight contamination.

## What changed since v0.3?

| Dimension | v0.3 | v0.6 |
|---|---|---|
| **Cases** | 11 (mostly post-hoc) | **50** (forward-looking) |
| **Agents** | 3 (BEA + BCA + MA) | **4** (+ SA Safety Expert) |
| **Configurations** | 1 (LLM only) | **3** (LLM / Frozen / Live)** |
| **Lock date** | None | **2023-12-31** |
| **Gold standard** | Curation at time of writing | **Actual 2024 outcomes** |
| **Total runs** | 11 × 1 = 11 | **50 × 6 = 300** |
| **Total cost** | ~$0.04 | **~$0.07** |
| **Key finding** | 81.8% accuracy | **Solo > Multi-Agent** (-17.4 to -35.8pp) |

## 6 Counter-Intuitive Findings

1. **Solo > Multi-Agent in all 3 groups**: +34.4pp (A), +17.4pp (B), +35.8pp (C)
2. **Novelty Halo Reversal**: Multi-Agent better on novel cases, worse on mature cases
3. **Recall(Reject) asymmetry**: Solo-C 88.9% vs Multi-Agent < 30% on all configs
4. **Frozen CT.gov double-edged**: helps Multi-Agent but hurts Solo
5. **BEA/BCA disagreement inverted**: largest on LOW-novelty cases (5.94), smallest on HIGH-novelty (3.44)
6. **F16–F25 non-novel failed**: Multi-Agent 3/10 correct vs Solo 7/7 correct (negative-precedent blindness)

## How to use this release

### In your browser (no install)
```bash
# Visit the GitHub Pages demo (v0.6 added):
open https://yanlee.github.io/CausaTwin/causatwin_v0.6.html
```

### Clone and run locally
```bash
git clone https://github.com/Yanlee/CausaTwin.git
cd CausaTwin
python3 -m http.server 8765
# Visit http://localhost:8765/causatwin_v0.6.html
```

### Cite this version
See `CITATION.cff` or the v0.6 paper (`docs/CausaTwin_v0.6_Paper_v5.docx`).

## Files in this update package

| File | Purpose |
|---|---|
| `causatwin_v0.6.html` | 50-case benchmark viewer (HTML, no backend) |
| `cases_v0.6.js` | 50 cases with 6-config decisions |
| `CITATION.cff` | Citation metadata for both versions |
| `CHANGELOG.md` | Full version history |
| `release_notes_v0.6.md` | This document |
| `index.html` | Updated version selector (v0.3 / v0.6) |
| `docs/CausaTwin_v0.6_Paper_v5.docx` | v0.6 paper (full draft) |

## Coming in v0.7

- Cross-backbone validation: V4-Pro, GPT-4o, Claude-3.7, Gemini-2.0
- Pangenome reference panel integration (1KCP) for Solo-C variant calls
- Web API for batch queries
- 100+ case expansion with cardiovascular + neurological priority
