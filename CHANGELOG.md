# Changelog

All notable changes to CausaTwin will be documented in this file.

## [0.6.0] — 2026-09-23

### Added
- **50-case forward-looking drug pipeline benchmark** with cases locked at 2023-12-31 and gold = actual 2024 outcomes
- **Solo vs Multi-Agent head-to-head comparison** across three evidence configurations (Group A: LLM only / Group B: Frozen CT.gov / Group C: Live CT.gov)
- **4-agent × 4-round debate architecture** with new Safety Expert (SA) agent in addition to BEA / BCA / MA
- **6 counterintuitive findings** including Solo > Multi-Agent (+17.4 to +35.8pp), Novelty Halo Reversal, and negative-precedent blindness on F16-F25
- New file `causatwin_v0.6.html` — 50-case benchmark viewer with filters by case subset
- New file `cases_v0.6.js` — 50 cases with gold scores, novelty tiers, and 6-config decisions
- New file `CITATION.cff` — For both versions

### Findings (cross-domain validation with Laban et al., ICLR 2026)
- Solo outperforms Multi-Agent debate in all 3 evidence configurations
- Hold over-prediction (23–33 of 50 cases) reflects regression-to-mean via score averaging
- Recall(Reject) asymmetry: Solo-C reaches 88.9% vs Multi-Agent < 30% on all configs
- Frozen CT.gov evidence is double-edged: helps Multi-Agent but actually hurts Solo
- Negative-precedent blindness on F16-F25 (non-novel failed Phase 3 cases)

### Constraints
- Total benchmark cost: ~$0.07 USD (DeepSeek-V4-Flash, 300 runs)
- Lock date: 2023-12-31 (no LLM leakage of 2024 outcomes)
- Cross-backbone validation with V4-Pro, GPT-4o, Claude-3.7, Gemini-2.0 planned for v0.7

## [0.3.0] — 2026-09-01

### Added
- **3-agent × 4-round debate** framework (BEA + BCA + MA) as a self-contained browser HTML application
- **11-case benchmark** with 81.8% decision accuracy
- **50-target knowledge base** for offline Demo Mode
- **Smarter Model Paradox finding** — DeepSeek-V4-Flash outperformed V4-Pro on drug target scoring
- New file `causatwin_v0.3.html` — main demo (46KB browser-deployable)
- New file `demo_cases_data.js` — 11 pre-computed cases
- New file `target_kb_data.js` — 50-target offline KB
- GitHub Pages deployment: https://yanlee.github.io/CausaTwin/

### Notes
- Initial public release under MIT License
- Repo: https://github.com/Yanlee/CausaTwin
- Self-contained: no backend, no API key required for Demo Mode
