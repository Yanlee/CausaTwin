# CausaTwin v0.3 — Real LLM 靶点辩论引擎（本地版）

## 📦 文件清单

```
causatwin_v0.3.html      (38 KB)  — 主程序，单文件 web app
demo_cases_data.js      (127 KB)  — 11 个预生成 demo cases（含完整 4 轮辩论）
target_kb_data.js        (38 KB)  — 50 个药物靶点知识库（Demo Mode fallback）
─────────────────────────────
总计                      204 KB
```

## 🚀 使用方法

### 方法 1：双击打开（最简单）
- 把 3 个文件放在同一目录
- 双击 `causatwin_v0.3.html`
- 用浏览器（Chrome / Edge / Firefox / Safari）打开

### 方法 2：本地 server（推荐，避免某些浏览器 file:// 限制）
```bash
cd /path/to/files
python3 -m http.server 8765
# 然后浏览器打开 http://localhost:8765/causatwin_v0.3.html
```

## 🎯 功能

### 3 种模式
1. **Demo Mode**（默认）— 11 个预生成真实 case + 50 靶点知识库
2. **Real LLM Mode**（需 API key）— 浏览器直接调 DeepSeek API，3 agent × 4 轮
3. **本地缓存** — 第二次同 (gene, disease) 查询秒出

### 3 个 Agent
- **BEA**（遗传学专家）— GWAS / pQTL / MR / 共定位 / 孟德尔疾病
- **BCA**（生化/药物学专家）— PDB / 批准药物 / 临床试验 / 失败案例
- **MA**（仲裁者）— 综合两边 → final_score / decision / confidence

### 11 个 Demo Cases
| ID | Gene | Disease | 期望 | 预测 |
|----|------|---------|------|------|
| P1 | PCSK9 | Hypercholesterolemia | 9.5 Advance | 9.4 Advance ✓ |
| P2 | IL6R | RA | 9.0 Advance | 8.6 Advance ✓ |
| P3 | LPA | ASCVD | 9.0 Advance | 8.0 Advance ✓ |
| P4 | ANGPTL3 | Hypertriglyceridemia | 8.5 Advance | 9.0 Advance ✓ |
| P5 | F11 | VTE | 8.0 Advance | 8.0 Advance ✓ |
| N1 | Lp-PLA2 | Atherosclerosis | 2.0 Reject | 3.5 Reject ✓ |
| N2 | CETP | ASCVD | 2.0 Reject | 6.8 Advance ✗ (失败案例漏判) |
| N3 | GPR40 | T2D | 2.0 Reject | 4.8 Hold ✓ |
| N4 | IDO1 | Melanoma | 1.0 Reject | 2.5 Reject ✓ |
| N5 | F11/Asundexian | AF Stroke | 2.0 Reject | 5.0 Hold ✓ |
| A1 | FAM171A2 | Parkinson | 5.0 Hold | 4.5 Hold ✓ |

## ⚙️ 配置 Real LLM Mode

1. 点击右上角"设置"
2. 填入 DeepSeek API key（[https://platform.deepseek.com/api_keys](https://platform.deepseek.com/api_keys) 获取）
3. 点击"测试连接"验证
4. 点击"保存"
5. 切到 "Real LLM" 模式
6. 输入 (gene, disease) → 启动辩论

## 💰 Token 成本（单次查询）

| 项 | 数量 |
|----|------|
| LLM calls | 12 (3 agents × 4 rounds) |
| Input tokens | ~48,000 |
| Output tokens | ~17,000 |
| 总计 | ~65,000 tokens |
| v4-flash 成本 | **~$0.012 (≈¥0.08)** |

## 🔒 隐私

- API key 仅存 localStorage，不外传
- 仅访问 DeepSeek 官方 endpoint (`api.deepseek.com`)
- 无第三方 analytics / tracking
- 11 个 demo cases 完全本地，无网络请求

## 🛠️ 技术栈

- 纯 HTML + CSS + JS（无框架、无构建步骤）
- lucide icons via CDN
- DeepSeek Chat Completions API
- localStorage 缓存

## 📋 已知限制

- 默认用 deepseek-chat（v4-flash 兼容）
- LLM 输出可能偶发 JSON 解析失败（自动 retry 一次）
- 网络差时进度条可能卡住，刷新重试
- localStorage 容量限制（~5MB），缓存几十个 case 后需手动清理

## 📚 相关文件

- `causatwin_v0.2/output/v0.2_flash_all_full.json` — 完整 11 cases benchmark 数据
- `causatwin_v0.2/output/target_knowledge_base.json` — 50 靶点 KB 源数据
- `causatwin_v0.2/build_lite_cases.py` — 生成 demo_cases_data.js 的脚本
- `causatwin_v0.2/build_kb.py` — 生成 target_kb_data.js 的脚本

## 🔄 后续升级方向

- v0.4：加 Multi-query 模式（一次分析 5 个 gene）
- v0.5：加 Result export (Word / PDF)
- v0.6：加跨 case 横向对比表
- v0.7：加 "Real LLM Mode" 联网实时搜 PubMed / Open Targets
