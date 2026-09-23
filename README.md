# CausaTwin

**CausaTwin** is a multi-agent adversarial debate framework for drug target discovery. Two LLM experts (BEA on causal genetics, BCA on druggability, and since v0.6 also SA on safety) argue across four rounds while a Mediator arbitrates. CausaTwin v0.6 ships as a **50-case forward-looking benchmark** (locked at 2023-12-31, gold = actual 2024 outcomes) and reaches **81.6% decision accuracy** with single-agent Solo, **outperforming multi-agent debate by +17.4 to +35.8 percentage points** across all three evidence configurations tested.

## Two Public Versions

| Version | Released | Cases | Key contribution | Live demo |
|---|---|---|---|---|
| **v0.3** | 2026-09-01 | 11 | 3-agent debate framework, 81.8% accuracy, browser-deployable | [causatwin_v0.3.html](https://yanlee.github.io/CausaTwin/causatwin_v0.3.html) |
| **v0.6** ⭐ | 2026-09-23 | 50 | Forward-looking benchmark, **Solo > Multi-Agent** finding, 6 counterintuitive results | [causatwin_v0.6.html](https://yanlee.github.io/CausaTwin/causatwin_v0.6.html) |

The v0.6 release is the recommended version for researchers studying the **aptitude-vs-unreliability trade-off in multi-agent debate**. It cross-validates the Laban et al. (ICLR 2026) finding that multi-turn LLMs lose consistency rather than mean capability.

## Why CausaTwin?

Drug target prioritization is a critical bottleneck in pharmaceutical R&D. Single-LLM "ask an expert" approaches fail to surface evidence–tractability conflicts. CausaTwin solves this by structuring the evaluation as an **adversarial debate** between specialized agents and a mediator:

- **BEA** (Bioinformatics Expert) — evaluates causal genetic evidence: cis-pQTL, Mendelian randomization, co-localization, cross-population replication.
- **BCA** (Biochemistry Expert) — evaluates druggability: modality options, safety, pathway centrality, off-target risk.
- **SA** (Safety Expert, v0.6+) — evaluates off-target risks, hepatic/cardiac/CNS concerns, FAERS-like class data.
- **MA** (Mediator) — integrates the debate into a final score and decision (Advance / Conditional Advance / Hold / Reject).

The 4-round protocol (opening → cross-examination → locking → reflection) forces explicit reasoning over silent agreement.

## Quick Start

The fastest way to try CausaTwin is the browser demo (no backend, no API key required for Demo Mode):

```bash
git clone https://github.com/Yanlee/CausaTwin.git
cd CausaTwin
# Option 1: open directly
open causatwin_v0.6.html

# Option 2: serve locally (recommended)
python3 -m http.server 8765
# then visit http://localhost:8765/causatwin_v0.6.html
```

## v0.6 Headline Results

50 forward-looking cases (locked 2023-12-31, gold = 2024 outcomes), DeepSeek-V4-Flash backbone, total cost ~$0.07:

| Configuration | N | Accuracy | P(Adv) | R(Adv) | P(Rej) | R(Rej) | MAE |
|---|---:|---:|---:|---:|---:|---:|---:|
| Multi-Agent A (LLM only) | 50 | 34.0% | 53.8% | 29.2% | 100% | 22.2% | 1.17 |
| **Solo A (LLM only)** | 35 | **68.4%** | 68.8% | 100% | 100% | 36.4% | 1.88 |
| Multi-Agent B (Frozen CT.gov) | 46 | 50.0% | 77.8% | 63.6% | 100% | 29.4% | 1.09 |
| **Solo B (Frozen CT.gov)** | 43 | **61.7%** | 61.5% | 100% | 100% | 20.0% | 1.64 |
| Multi-Agent C (Live CT.gov) | 48 | 45.8% | 70.0% | 63.6% | 100% | 22.2% | 0.87 |
| **Solo C (Live CT.gov)** | 48 | **81.6%** | 75.0% | 100% | 100% | **88.9%** | 2.30 |

**Headline**: Solo outperforms Multi-Agent in all three configurations. The gap is largest where evidence is most abundant. On the diagnostic **Recall(Reject)** metric — the metric that distinguishes "identifying known failures" — Solo-C reaches 88.9%, correctly identifying 25 of 28 actual Reject cases, while every Multi-Agent configuration stays below 30%.

## 6 Counter-Intuitive Findings (v0.6)

1. **Solo > Multi-Agent in all 3 evidence groups** — +34.4pp (A), +17.4pp (B), +35.8pp (C)
2. **Novelty Halo Reversal** — Multi-Agent better on novel cases (56.5%) than on mature cases (33.9%); Solo is approximately flat
3. **Recall(Reject) asymmetry** — Solo-C 88.9% vs Multi-Agent < 30% on all configs
4. **Frozen CT.gov is double-edged** — helps Multi-Agent (+15.2pp) but hurts Solo (-6.7pp)
5. **BEA/BCA disagreement inverted** — largest on LOW-novelty (5.94), smallest on HIGH-novelty (3.44)
6. **F16–F25 Non-novel failed cases** — Multi-Agent 3/10 correct vs Solo 7/7 correct (negative-precedent blindness)

## v0.3 Original Results (preserved for reference)

| Metric | Value |
|--------|-------|
| AUROC | 1.000 |
| Spearman ρ | 0.864 |
| Brier score | 0.113 |
| Decision accuracy | 0.818 (9/11) |
| Cost per case | $0.0034 |
| Model | DeepSeek-V4-Flash |

The original v0.3 release includes a 50-target offline knowledge base, so v0.3 Demo Mode can synthesize reasonable scores for any (gene, disease) pair without API access.

## The Smarter Model Paradox (carried over from v0.3)

When we benchmarked DeepSeek-V4-Flash against DeepSeek-V4-Pro, the cost-optimized, smaller model **outperformed** the larger, more expensive model on decision accuracy while being ~13× cheaper. We propose four non-exclusive hypotheses (see `docs/CausaTwin_v0.6_Paper_v5.docx` §4.7):

1. **Over-Commitment Bias** — v4-pro forms stronger initial commitments and is less likely to revise.
2. **Hold-Class Collapse** — averaging four agents' scores collapses strong signals into the Hold band.
3. **Calibration Drift** — absolute capability does not transfer to confidence calibration.
4. **Anchoring on Biological Plausibility** — agents anchor on target validity while under-weighting molecule-specific failures.

## Repository Layout

```
causatwin/
├── causatwin_v0.3.html              # v0.3 demo (browser-deployable)
├── causatwin_v0.6.html              # v0.6 50-case benchmark viewer ⭐
├── demo_cases_data.js              # v0.3 11 pre-computed cases (127 KB)
├── cases_v0.6.js                   # v0.6 50 cases with 6-config decisions
├── target_kb_data.js               # v0.3 50-target offline KB (38 KB)
├── index.html                      # Version selector (v0.3 / v0.6)
├── README.md
├── CHANGELOG.md
├── CITATION.cff                    # Citation metadata
├── LICENSE                         # MIT
├── docs/
│   ├── CausaTwin_v0.3_Main_Report.docx       # v0.3 paper
│   └── CausaTwin_v0.6_Paper_v5.docx          # v0.6 paper ⭐
└── output/                         # Raw benchmark JSON, figures
    └── v6_fig1-5_*.png             # 5 v0.6 figures
```

## Architecture Diagram

```
                 ┌─────────────────────────────────────┐
                 │   User input: (gene, disease)       │
                 └────────────┬────────────────────────┘
                              │
                  ┌───────────┴───────────┐
                  │                       │
              Real LLM Mode           Demo Mode
              (DeepSeek API)          (offline KB)
                  │                       │
                  └───────────┬───────────┘
                              │
            ┌─────────────────┼─────────────────┐
            │                 │                 │
          BEA             BCA               SA
     (causal genetic  (druggability,   (safety,
      evidence)       modality)         off-target)
            │                 │                 │
            └──── 4 rounds ───┴────── 4 rounds ─┘
                              │
                          MA (Mediator)
                          arbitration
                              │
                  ┌───────────┴───────────┐
                  │   final_score: 0-10   │
                  │   decision: Advance/  │
                  │   Conditional/Hold/  │
                  │   Reject             │
                  └───────────────────────┘
```

## Reproducing the Benchmark (v0.6)

```bash
cd src
export DEEPSEEK_API_KEY=sk-...
# Run the 50-case benchmark (3 evidence configs × 50 cases × 2 systems)
python3 benchmark_v06.py --config A B C
# Generate figures
python3 make_v6_figures.py
# Generate paper
python3 make_paper_v5.py
```

Total benchmark cost: **~$0.07 USD**.

## Citation

If you use CausaTwin in a publication, please cite both versions. See `CITATION.cff` for machine-readable citation metadata.

```bibtex
@misc{causatwin2026v03,
  title={CausaTwin v0.3: Multi-Agent Adversarial Debate with Real LLM 
         Literature Retrieval for Drug Target Discovery},
  author={Li, Yan and Zhao, Danning and others},
  year={2026},
  publisher={GitHub},
  url={https://github.com/Yanlee/CausaTwin}
}

@misc{causatwin2026v06,
  title={When Solo Beats the Committee: Multi-Agent Debate vs Single-Agent 
         Decision in 50-Case Forward-Looking Drug Pipeline Scoring},
  author={Li, Yan and Zhao, Danning and Song, Xuanying and Zhang, Zilin 
          and Zhou, Luting and Jin, Xiangqian and Xin, Hongyi},
  year={2026},
  publisher={GitHub},
  url={https://github.com/Yanlee/CausaTwin}
}
```

## License

MIT — see [LICENSE](LICENSE).
