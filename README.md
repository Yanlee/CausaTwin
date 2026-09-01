# CausaTwin

**CausaTwin** is a multi-agent adversarial debate framework for drug target discovery, in which a Bioinformatics Expert (BEA), a Biochemistry Expert (BCA), and a Mediator (MA) LLM agent evaluate each candidate target through a four-round debate weighing genetic causal evidence against druggability. v0.3 ships as a 204-KB self-contained browser application supporting both online LLM queries and offline synthesis modes, and reaches 81.8% decision accuracy on an 11-case benchmark of clinically validated and historically failed drug targets.

## Why CausaTwin?

Drug target prioritization is a critical bottleneck in pharmaceutical R&D. Single-LLM "ask an expert" approaches fail to surface evidence–tractability conflicts. CausaTwin solves this by structuring the evaluation as an **adversarial debate** between two specialized agents and a mediator:

- **BEA** (Bioinformatics Expert) — evaluates causal genetic evidence: cis-pQTL, Mendelian randomization, co-localization, cross-population replication.
- **BCA** (Biochemistry Expert) — evaluates druggability: modality options, safety, pathway centrality, off-target risk.
- **MA** (Mediator) — integrates the debate into a final score and decision (Advance / Hold / Reject).

The 4-round protocol (opening → cross-examination → locking → reflection) forces explicit reasoning over silent agreement.

## Quick Start

The fastest way to try CausaTwin is the local HTML application (no backend, no API key required for Demo Mode):

```bash
git clone https://github.com/<your-org>/causatwin.git
cd causatwin
# Option 1: open directly
open causatwin_v0.3.html

# Option 2: serve locally (recommended)
python3 -m http.server 8765
# then visit http://localhost:8765/causatwin_v0.3.html
```

## Three Modes of Operation

| Mode | LLM? | Network | Use case |
|------|------|---------|----------|
| **Demo Mode** (default) | No | No | Browse 11 pre-computed cases; offline synthesis for new (gene, disease) pairs using a 50-target knowledge base |
| **Real LLM Mode** | Yes (DeepSeek) | Yes | Run a true 4-round debate for any new (gene, disease) pair. Cost: ~$0.012 per query |
| **Cached Mode** | Optional | No | Identical queries return instantly from localStorage |

## Results on 11-Case Benchmark

| Metric | Value |
|--------|-------|
| AUROC | 1.000 |
| Spearman ρ | 0.864 |
| Brier score | 0.113 |
| Decision accuracy | 0.818 (9/11) |
| Cost per case | $0.0034 |
| Model | deepseek-v4-flash |

Two of eleven cases (N2 CETP, N3 GPR40) were mis-classified. Both are historically failed targets where the LLM-evaluated genetic evidence was strong; a clinical-trial-history dimension in MA would correct these errors and is planned for v0.4.

## A Counter-Intuitive Finding: The Smarter Model Paradox

When we benchmarked v4-flash against v4-pro, the cost-optimized, smaller model **outperformed** the larger, more expensive model on decision accuracy (81.8% vs 54.5%) while being ~13× cheaper. We propose four non-exclusive hypotheses:

1. **Over-Commitment Bias** — v4-pro forms stronger initial commitments and is less likely to revise.
2. **Hold-Class Collapse** — v4-pro produced zero correct Hold decisions (F1 = 0.000); RLHF fine-tuning may have trained it away from "I don't know".
3. **Calibration Drift** — Capability and calibration are partially decoupled; Brier 0.131 (v4-pro) vs 0.113 (v4-flash).
4. **Anchoring on Biological Plausibility** — v4-pro anchors on target validity while under-weighting molecule-specific failures (e.g., F11/Asundexian).

## Repository Layout

```
causatwin/
├── causatwin_v0.3.html     # Main browser application (38 KB)
├── demo_cases_data.js      # 11 pre-computed benchmark cases (127 KB)
├── target_kb_data.js       # 50-target knowledge base for Demo Mode (38 KB)
├── README.md
├── LICENSE                 # MIT
├── docs/
│   ├── CausaTwin_v0.3_Main_Report.docx        # Paper-ready main report
│   ├── CausaTwin_v0.2_SI_v4_pro.docx          # Supplementary Information (v4-pro)
│   └── Discussion_Smarter_Model_Paradox.docx  # Detailed paradox analysis
├── src/                    # Python source for benchmark execution
├── output/                 # Raw benchmark JSON, figures, transcripts
└── scripts/                # Build scripts (KB regeneration, etc.)
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
              (DeepSeek API)          (KB + synthesis)
                  │                       │
                  └───────────┬───────────┘
                              │
            ┌─────────────────┼─────────────────┐
            │                 │                 │
          BEA             BCA                MA
     (causal genetic  (druggability,   (arbitration,
      evidence)       modality)         final score)
            │                 │                 │
            └──── 4 rounds ───┴────── 4 rounds ─┘
                              │
                  ┌───────────┴───────────┐
                  │   final_score: 1-10   │
                  │   decision: Advance/  │
                  │   Conditional/Hold/  │
                  │   Reject             │
                  └───────────────────────┘
```

## Reproducing the Benchmark

```bash
cd src
# Set DeepSeek API key
export DEEPSEEK_API_KEY=sk-...
# Run on 11 cases
python3 benchmark.py --model deepseek-v4-flash --cases 11
# Generate figures
python3 make_figures.py
# Generate report
python3 make_report_v03.py
```

## Citation

If you use CausaTwin in a publication, please cite:

> CausaTwin v0.3: Multi-Agent Adversarial Debate with Real LLM Literature Retrieval for Drug Target Discovery. 2026.

## License

MIT — see [LICENSE](LICENSE).
