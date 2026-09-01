// Drug target knowledge base (49 targets)
const TARGET_KB = {
  "PCSK9": {
    "protein_class": "serine protease",
    "function": "Binds LDL receptor (LDLR) and directs it to lysosomal degradation. Loss-of-function → higher LDLR density → lower LDL-C.",
    "druggability_tier": 1,
    "modalities": [
      "antibody (approved)",
      "siRNA (approved)",
      "small molecule (in development)"
    ],
    "approved_drugs": "Evolocumab (Amgen), Alirocumab (Sanofi), Inclisiran (Novartis siRNA)",
    "genetic_evidence": "Strong. LoF variants (R46L, C679X) → 15% lower LDL-C → 47% lower CHD risk per 1 mmol/L.",
    "mr_strength": "Very strong. IVW P<10^-200 across multiple cohorts.",
    "key_variants": "rs11591147 (R46L), rs562556 (loss-of-function)",
    "diseases": [
      "Hypercholesterolemia",
      "ASCVD",
      "Familial hypercholesterolemia"
    ],
    "pathway_centrality": 9,
    "off_target_risk": 8,
    "tier": 1
  },
  "LPA": {
    "protein_class": "lipoprotein(a) particle component",
    "function": "Apolipoprotein(a) covalently linked to apoB-100 on LDL-like particles. Genetically determined Lp(a) levels strongly predict ASCVD.",
    "druggability_tier": 1,
    "modalities": [
      "ASO (pelacarsen Phase 3)",
      "siRNA (olpasiran Phase 3)"
    ],
    "approved_drugs": "None yet (Phase 3 ongoing)",
    "genetic_evidence": "Very strong. LPA locus accounts for ~90% of Lp(a) variance. Mendelian randomization shows OR 1.5-2.0 for CHD per 50 mg/dL higher Lp(a).",
    "mr_strength": "Very strong. Causal for ASCVD.",
    "key_variants": "rs10455872, rs3798220 (LPA kringle IV-2 repeats)",
    "diseases": [
      "Atherosclerotic cardiovascular disease",
      "Aortic stenosis",
      "Venous thromboembolism"
    ],
    "pathway_centrality": 2,
    "off_target_risk": 9,
    "tier": 1
  },
  "ANGPTL3": {
    "protein_class": "angiopoietin-like protein",
    "function": "Inhibits lipoprotein lipase (LPL) and endothelial lipase. LoF → lower TG, LDL-C, HDL-C.",
    "druggability_tier": 1,
    "modalities": [
      "antibody (evinacumab approved HoFH)",
      "ASO (vupanorsen Phase 2)",
      "siRNA (ARO-ANG3 Phase 2)"
    ],
    "approved_drugs": "Evinacumab (Regeneron) for HoFH",
    "genetic_evidence": "Strong. LoF in 1% of population → 34% lower TG, 17% lower LDL-C → reduced ASCVD.",
    "mr_strength": "Strong.",
    "key_variants": "rs11207977 (LoF)",
    "diseases": [
      "Hypertriglyceridemia",
      "Homozygous familial hypercholesterolemia (HoFH)",
      "ASCVD"
    ],
    "pathway_centrality": 6,
    "off_target_risk": 7,
    "tier": 1
  },
  "APOC3": {
    "protein_class": "apolipoprotein C-III",
    "function": "Inhibits lipoprotein lipase and hepatic lipase; promotes VLDL assembly. LoF → lower TG.",
    "druggability_tier": 1,
    "modalities": [
      "ASO (volanesorsen approved in EU)",
      "siRNA (ARO-APOC3 Phase 2)"
    ],
    "approved_drugs": "Volanesorsen (Waylivra, EU only for FCS)",
    "genetic_evidence": "Strong. LoF carriers → 39% lower TG → reduced CHD.",
    "mr_strength": "Strong. Causal for ASCVD via TG.",
    "key_variants": "rs138326449 (LoF), rs147210663",
    "diseases": [
      "Familial chylomicronemia syndrome (FCS)",
      "Hypertriglyceridemia",
      "ASCVD"
    ],
    "pathway_centrality": 5,
    "off_target_risk": 7,
    "tier": 1
  },
  "CETP": {
    "protein_class": "cholesteryl ester transfer protein",
    "function": "Transfers cholesteryl esters from HDL to LDL/VLDL. Inhibition → higher HDL-C.",
    "druggability_tier": 1,
    "modalities": [
      "small molecule (anacetrapib, evacetrapib)"
    ],
    "approved_drugs": "None (multiple Phase 3 failures)",
    "genetic_evidence": "Mixed. CETP LoF → higher HDL, lower LDL → some studies show lower CHD, others not.",
    "mr_strength": "Weak. Causal for HDL, not clearly for CHD.",
    "key_variants": "rs708272 (TaqIB), rs1800775",
    "diseases": [
      "Dyslipidemia",
      "ASCVD (failed trials)"
    ],
    "pathway_centrality": 4,
    "off_target_risk": 5,
    "tier": 2,
    "failure_history": "3 of 4 CETP inhibitors failed Phase 3. torcetrapib increased mortality."
  },
  "IL6R": {
    "protein_class": "interleukin-6 receptor (cytokine receptor)",
    "function": "Binds IL-6, activates JAK/STAT3 signaling. Asp358Ala variant → reduced soluble IL6R → dampened IL-6 signaling.",
    "druggability_tier": 1,
    "modalities": [
      "antibody (tocilizumab, sarilumab approved)"
    ],
    "approved_drugs": "Tocilizumab (Roche), Sarilumab (Sanofi)",
    "genetic_evidence": "Strong. Asp358Ala → 5% lower CRP, 0.85 OR for CHD, 0.95 OR for RA, severe COVID-19 protection.",
    "mr_strength": "Strong.",
    "key_variants": "rs2228145 (Asp358Ala)",
    "diseases": [
      "Rheumatoid arthritis",
      "Juvenile idiopathic arthritis",
      "Castleman disease",
      "COVID-19",
      "ASCVD"
    ],
    "pathway_centrality": 8,
    "off_target_risk": 5,
    "tier": 1
  },
  "TNF": {
    "protein_class": "pro-inflammatory cytokine",
    "function": "Master regulator of inflammation, activates NF-κB signaling.",
    "druggability_tier": 1,
    "modalities": [
      "antibody (multiple approved)"
    ],
    "approved_drugs": "Infliximab, Adalimumab, Etanercept, Golimumab, Certolizumab (all approved)",
    "genetic_evidence": "Strong. TNF locus associated with autoimmune disease risk.",
    "mr_strength": "Moderate (complicated by pleiotropy).",
    "key_variants": "rs1800629, rs361525",
    "diseases": [
      "Rheumatoid arthritis",
      "Crohn's disease",
      "Psoriasis",
      "Ankylosing spondylitis",
      "Ulcerative colitis"
    ],
    "pathway_centrality": 9,
    "off_target_risk": 4,
    "tier": 1
  },
  "IL23R": {
    "protein_class": "interleukin-23 receptor",
    "function": "Binds IL-23, activates JAK2/TYK2 signaling. Key driver of Th17 inflammation.",
    "druggability_tier": 1,
    "modalities": [
      "antibody (risankizumab, guselkumab, tildrakizumab approved)"
    ],
    "approved_drugs": "Risankizumab (AbbVie), Guselkumab (J&J), Tildrakizumab (Merck)",
    "genetic_evidence": "Strong. IL23R coding variants (e.g., Arg381Gln) → strong protection from IBD, psoriasis, AS.",
    "mr_strength": "Moderate.",
    "key_variants": "rs11209026 (Arg381Gln, protective)",
    "diseases": [
      "Plaque psoriasis",
      "Psoriatic arthritis",
      "Crohn's disease",
      "Ulcerative colitis"
    ],
    "pathway_centrality": 7,
    "off_target_risk": 6,
    "tier": 1
  },
  "JAK1": {
    "protein_class": "tyrosine kinase",
    "function": "Janus kinase 1, transduces signals from cytokine receptors (IL-6, IFN, IL-2 family).",
    "druggability_tier": 1,
    "modalities": [
      "small molecule (multiple approved JAK inhibitors)"
    ],
    "approved_drugs": "Tofacitinib, Baricitinib, Upadacitinib, Filgotinib, Ritlecitinib",
    "genetic_evidence": "Moderate.",
    "mr_strength": "Moderate.",
    "key_variants": "rs10995441 (intronic)",
    "diseases": [
      "Rheumatoid arthritis",
      "Atopic dermatitis",
      "Ulcerative colitis",
      "Myelofibrosis",
      "Alopecia areata"
    ],
    "pathway_centrality": 8,
    "off_target_risk": 5,
    "tier": 1
  },
  "JAK2": {
    "protein_class": "tyrosine kinase",
    "function": "V617F activating mutation causes myeloproliferative neoplasms.",
    "druggability_tier": 1,
    "modalities": [
      "small molecule (ruxolitinib approved)"
    ],
    "approved_drugs": "Ruxolitinib, Fedratinib, Pacritinib, Momelotinib",
    "genetic_evidence": "Very strong for MPN. JAK2 V617F → polycythemia vera, essential thrombocythemia, primary myelofibrosis.",
    "mr_strength": "N/A (somatic driver).",
    "key_variants": "V617F (somatic, 95% of PV)",
    "diseases": [
      "Polycythemia vera",
      "Essential thrombocythemia",
      "Primary myelofibrosis",
      "GVHD"
    ],
    "pathway_centrality": 9,
    "off_target_risk": 4,
    "tier": 1
  },
  "GLP1R": {
    "protein_class": "GPCR (class B)",
    "function": "Glucagon-like peptide-1 receptor. Activates Gs → cAMP → insulin secretion, appetite suppression.",
    "druggability_tier": 1,
    "modalities": [
      "peptide agonist (semaglutide, liraglutide approved)"
    ],
    "approved_drugs": "Semaglutide (Ozempic/Wegovy), Liraglutide, Dulaglutide, Exenatide, Lixisenatide, Tirzepatide (dual GIP/GLP-1)",
    "genetic_evidence": "Strong. Loss-of-function in GLP1R → higher T2D risk. Gain-of-function → lower BMI, T2D risk.",
    "mr_strength": "Strong.",
    "key_variants": "rs10305420, rs6923761",
    "diseases": [
      "Type 2 diabetes",
      "Obesity",
      "ASCVD (semaglutide SELECT trial)",
      "NAFLD",
      "Alzheimer's (investigational)"
    ],
    "pathway_centrality": 7,
    "off_target_risk": 7,
    "tier": 1
  },
  "GCGR": {
    "protein_class": "GPCR (class B)",
    "function": "Glucagon receptor. Antagonists reduce hyperglycemia.",
    "druggability_tier": 1,
    "modalities": [
      "antibody (LY2409021 Phase 2)",
      "small molecule (multiple in development)"
    ],
    "approved_drugs": "None (pipeline stage)",
    "genetic_evidence": "Moderate. GCGR LoF → lower glucose but higher LDL-C and fatty liver.",
    "mr_strength": "Moderate.",
    "key_variants": "rs1800437",
    "diseases": [
      "Type 2 diabetes",
      "Hyperglycemia",
      "NAFLD"
    ],
    "pathway_centrality": 5,
    "off_target_risk": 4,
    "tier": 2
  },
  "GPR40": {
    "protein_class": "GPCR (free fatty acid receptor 1)",
    "function": "FFAR1/GPR40. Activated by long-chain fatty acids, amplifies glucose-stimulated insulin secretion.",
    "druggability_tier": 1,
    "modalities": [
      "small molecule agonist (fasiglifam halted 2016)"
    ],
    "approved_drugs": "None (fasiglifam/TAK-875 failed Phase 3 for liver toxicity)",
    "genetic_evidence": "Weak. Association with T2D but unclear causality.",
    "mr_strength": "Weak.",
    "key_variants": "rs2307022, rs6083983",
    "diseases": [
      "Type 2 diabetes (failed)"
    ],
    "pathway_centrality": 3,
    "off_target_risk": 2,
    "tier": 3,
    "failure_history": "Fasiglifam halted Phase 3 in 2016 for liver toxicity (LFT elevations)."
  },
  "FFAR4": {
    "protein_class": "GPCR (free fatty acid receptor 4 / GPR120)",
    "function": "Long-chain fatty acid sensor. Modulates inflammation, insulin sensitivity.",
    "druggability_tier": 1,
    "modalities": [
      "small molecule agonist"
    ],
    "approved_drugs": "None (preclinical/early clinical)",
    "genetic_evidence": "Moderate. R270H variant → higher obesity risk in some populations.",
    "mr_strength": "Weak.",
    "key_variants": "rs10812787 (R270H)",
    "diseases": [
      "Obesity",
      "Type 2 diabetes",
      "NAFLD"
    ],
    "pathway_centrality": 4,
    "off_target_risk": 6,
    "tier": 2
  },
  "BRAF": {
    "protein_class": "serine/threonine kinase",
    "function": "B-Raf proto-oncogene. V600E mutation drives melanoma, colorectal cancer, thyroid cancer.",
    "druggability_tier": 1,
    "modalities": [
      "small molecule inhibitor (multiple approved)"
    ],
    "approved_drugs": "Vemurafenib, Dabrafenib, Encorafenib (all approved for BRAF V600E+ melanoma)",
    "genetic_evidence": "Strong. BRAF V600E somatic driver in 50% of melanomas, 10% of CRCs.",
    "mr_strength": "N/A (somatic driver).",
    "key_variants": "V600E (somatic)",
    "diseases": [
      "Melanoma",
      "Colorectal cancer",
      "Thyroid cancer",
      "Hairy cell leukemia",
      "Lung cancer"
    ],
    "pathway_centrality": 9,
    "off_target_risk": 6,
    "tier": 1
  },
  "EGFR": {
    "protein_class": "receptor tyrosine kinase",
    "function": "Epidermal growth factor receptor. Activates RAS/MAPK and PI3K/AKT signaling.",
    "druggability_tier": 1,
    "modalities": [
      "small molecule TKI (multiple approved)",
      "antibody (cetuximab, panitumumab, etc.)"
    ],
    "approved_drugs": "Erlotinib, Gefitinib, Afatinib, Osimertinib, Cetuximab, Panitumumab, Necitumumab",
    "genetic_evidence": "Strong. Activating mutations (L858R, exon 19 del) drive NSCLC.",
    "mr_strength": "N/A (somatic driver).",
    "key_variants": "L858R, T790M, exon 19 deletion",
    "diseases": [
      "Non-small cell lung cancer",
      "Colorectal cancer",
      "Head and neck cancer",
      "Glioblastoma"
    ],
    "pathway_centrality": 9,
    "off_target_risk": 5,
    "tier": 1
  },
  "KRAS": {
    "protein_class": "small GTPase",
    "function": "K-Ras. G12C, G12D, G12V mutations drive multiple cancers. Long thought 'undruggable'.",
    "druggability_tier": 1,
    "modalities": [
      "small molecule (sotorasib, adagrasib approved for G12C)"
    ],
    "approved_drugs": "Sotorasib (Amgen, KRAS G12C+ NSCLC), Adagrasib (Mirati)",
    "genetic_evidence": "Very strong. KRAS G12C in 13% of NSCLC, 3% of CRC, 1-2% of other cancers.",
    "mr_strength": "N/A (somatic driver).",
    "key_variants": "G12C, G12D, G12V, G13D (somatic)",
    "diseases": [
      "Non-small cell lung cancer",
      "Colorectal cancer",
      "Pancreatic cancer",
      "Biliary tract cancer"
    ],
    "pathway_centrality": 10,
    "off_target_risk": 4,
    "tier": 1
  },
  "ABL1": {
    "protein_class": "tyrosine kinase",
    "function": "Abelson murine leukemia viral oncogene homolog 1. BCR-ABL fusion drives CML.",
    "druggability_tier": 1,
    "modalities": [
      "small molecule TKI (multiple approved)"
    ],
    "approved_drugs": "Imatinib, Dasatinib, Nilotinib, Bosutinib, Ponatinib, Asciminib",
    "genetic_evidence": "Strong. BCR-ABL translocation t(9;22) in 95% of CML.",
    "mr_strength": "N/A (somatic driver).",
    "key_variants": "BCR-ABL fusion (Philadelphia chromosome)",
    "diseases": [
      "Chronic myeloid leukemia (CML)",
      "Acute lymphoblastic leukemia (Ph+ ALL)",
      "GIST"
    ],
    "pathway_centrality": 9,
    "off_target_risk": 5,
    "tier": 1
  },
  "BCR": {
    "protein_class": "scaffold/signaling protein",
    "function": "Breakpoint cluster region. Forms BCR-ABL fusion with ABL1, driving CML.",
    "druggability_tier": 2,
    "modalities": [
      "not directly targeted; ABL inhibitors address BCR-ABL"
    ],
    "approved_drugs": "None targeting BCR alone",
    "genetic_evidence": "Strong (BCR-ABL in CML).",
    "mr_strength": "N/A.",
    "key_variants": "t(9;22) fusion",
    "diseases": [
      "CML",
      "Ph+ ALL"
    ],
    "pathway_centrality": 7,
    "off_target_risk": 5,
    "tier": 1
  },
  "ALK": {
    "protein_class": "receptor tyrosine kinase",
    "function": "Anaplastic lymphoma kinase. Activating fusions and mutations drive NSCLC, ALCL, neuroblastoma.",
    "druggability_tier": 1,
    "modalities": [
      "small molecule TKI (multiple approved)"
    ],
    "approved_drugs": "Crizotinib, Ceritinib, Alectinib, Brigatinib, Lorlatinib, Ensartinib",
    "genetic_evidence": "Strong. EML4-ALK fusion in 5% of NSCLC. Multiple ALK mutations in neuroblastoma.",
    "mr_strength": "N/A (somatic).",
    "key_variants": "EML4-ALK fusion, F1174L, R1275Q",
    "diseases": [
      "Non-small cell lung cancer",
      "Anaplastic large cell lymphoma",
      "Neuroblastoma",
      "Inflammatory myofibroblastic tumor"
    ],
    "pathway_centrality": 8,
    "off_target_risk": 5,
    "tier": 1
  },
  "MET": {
    "protein_class": "receptor tyrosine kinase",
    "function": "Hepatocyte growth factor receptor. Activates RAS/MAPK and PI3K/AKT.",
    "druggability_tier": 1,
    "modalities": [
      "small molecule TKI (capmatinib, tepotinib approved)",
      "antibody (emibetuzumab)"
    ],
    "approved_drugs": "Capmatinib, Tepotinib (MET ex14+ NSCLC)",
    "genetic_evidence": "Strong. MET exon 14 skipping in 3% of NSCLC. Amplification in multiple cancers.",
    "mr_strength": "N/A (somatic).",
    "key_variants": "MET exon 14 skipping, amplification",
    "diseases": [
      "Non-small cell lung cancer",
      "Hepatocellular carcinoma",
      "Gastric cancer"
    ],
    "pathway_centrality": 7,
    "off_target_risk": 4,
    "tier": 1
  },
  "F11": {
    "protein_class": "serine protease (coagulation factor XI)",
    "function": "FXIa activates FIX in the intrinsic coagulation pathway. LoF (hemophilia C) → reduced thrombosis, minimal bleeding.",
    "druggability_tier": 1,
    "modalities": [
      "antibody (abelacimab, osocimab Phase 3)",
      "ASO (fesomersen Phase 2)",
      "small molecule (milvexian Phase 2, asundexian failed 2024)"
    ],
    "approved_drugs": "Abelacimab in some regions for VTE prevention",
    "genetic_evidence": "Strong. FXI deficiency (hemophilia C) → low thrombosis, normal bleeding.",
    "mr_strength": "Strong. Causal for VTE, protective against stroke.",
    "key_variants": "rs2289252, F11 LoF variants",
    "diseases": [
      "Venous thromboembolism",
      "Atrial fibrillation stroke prevention",
      "Major orthopedic surgery VTE"
    ],
    "pathway_centrality": 6,
    "off_target_risk": 8,
    "tier": 1
  },
  "F2": {
    "protein_class": "serine protease (thrombin)",
    "function": "Prothrombin. Activated to thrombin (FIIa), converts fibrinogen to fibrin.",
    "druggability_tier": 1,
    "modalities": [
      "small molecule (dabigatran approved)"
    ],
    "approved_drugs": "Dabigatran (Boehringer Ingelheim)",
    "genetic_evidence": "Strong. G20210A prothrombin variant → higher VTE risk.",
    "mr_strength": "Strong.",
    "key_variants": "G20210A (3'UTR)",
    "diseases": [
      "Atrial fibrillation",
      "VTE",
      "Stroke prevention"
    ],
    "pathway_centrality": 9,
    "off_target_risk": 5,
    "tier": 1
  },
  "F10": {
    "protein_class": "serine protease (coagulation factor X)",
    "function": "FXa is convergence point of intrinsic/extrinsic pathways, activates prothrombin.",
    "druggability_tier": 1,
    "modalities": [
      "small molecule (rivaroxaban, apixaban, edoxaban approved)"
    ],
    "approved_drugs": "Rivaroxaban, Apixaban, Edoxaban (all approved for VTE, AF)",
    "genetic_evidence": "Moderate.",
    "mr_strength": "Moderate.",
    "key_variants": "rs3211772 (intronic)",
    "diseases": [
      "Atrial fibrillation",
      "VTE",
      "ACS secondary prevention"
    ],
    "pathway_centrality": 9,
    "off_target_risk": 4,
    "tier": 1
  },
  "SERPINC1": {
    "protein_class": "serine protease inhibitor (antithrombin)",
    "function": "Antithrombin inhibits thrombin and FXa. Heparin cofactor.",
    "druggability_tier": 2,
    "modalities": [
      "replacement protein (antithrombin concentrate approved)"
    ],
    "approved_drugs": "Antithrombin alfa (ATryn, rEVO Biologics)",
    "genetic_evidence": "Strong. AT deficiency → high VTE risk.",
    "mr_strength": "N/A.",
    "key_variants": "Multiple LoF",
    "diseases": [
      "Hereditary antithrombin deficiency",
      "Heparin resistance",
      "VTE"
    ],
    "pathway_centrality": 8,
    "off_target_risk": 7,
    "tier": 2
  },
  "SCN5A": {
    "protein_class": "voltage-gated sodium channel",
    "function": "Cardiac sodium channel (Nav1.5). Critical for cardiac action potential initiation.",
    "druggability_tier": 1,
    "modalities": [
      "small molecule (multiple antiarrhythmics)"
    ],
    "approved_drugs": "Flecainide, Propafenone, Mexiletine (sodium channel blockers)",
    "genetic_evidence": "Strong. SCN5A LoF → Brugada syndrome. Gain-of-function → LQT3.",
    "mr_strength": "N/A (Mendelian).",
    "key_variants": "Multiple (>300 known)",
    "diseases": [
      "Brugada syndrome",
      "Long QT syndrome type 3",
      "Cardiac conduction disease",
      "Sudden infant death syndrome"
    ],
    "pathway_centrality": 9,
    "off_target_risk": 5,
    "tier": 1
  },
  "SCN9A": {
    "protein_class": "voltage-gated sodium channel",
    "function": "Nav1.7. Critical for pain signal transmission in nociceptors.",
    "druggability_tier": 1,
    "modalities": [
      "small molecule (in development)",
      "ASO (in development)"
    ],
    "approved_drugs": "None yet (multiple candidates in clinical trials)",
    "genetic_evidence": "Very strong. LoF → congenital insensitivity to pain. GoF → erythromelalgia, paroxysmal extreme pain disorder.",
    "mr_strength": "Strong (human genetics validates pain target).",
    "key_variants": "Multiple LoF/GoF",
    "diseases": [
      "Chronic pain",
      "Neuropathic pain",
      "Erythromelalgia",
      "Inherited pain disorders"
    ],
    "pathway_centrality": 6,
    "off_target_risk": 5,
    "tier": 1
  },
  "SLC6A4": {
    "protein_class": "neurotransmitter transporter (serotonin)",
    "function": "Serotonin transporter (SERT). Reuptakes serotonin from synaptic cleft.",
    "druggability_tier": 1,
    "modalities": [
      "small molecule (SSRIs)"
    ],
    "approved_drugs": "Fluoxetine, Sertraline, Paroxetine, Citalopram, Escitalopram (SSRIs)",
    "genetic_evidence": "Moderate. 5-HTTLPR polymorphism linked to depression, SSRI response.",
    "mr_strength": "Weak-Moderate.",
    "key_variants": "5-HTTLPR (L/S), rs25531",
    "diseases": [
      "Major depressive disorder",
      "Anxiety disorders",
      "OCD",
      "PTSD"
    ],
    "pathway_centrality": 9,
    "off_target_risk": 4,
    "tier": 1
  },
  "APP": {
    "protein_class": "transmembrane protein",
    "function": "Amyloid precursor protein. Cleaved to Aβ peptides, which aggregate in Alzheimer's disease plaques.",
    "druggability_tier": 1,
    "modalities": [
      "antibody (lecanemab, aducanumab, donanemab)",
      "BACE inhibitor (failed)"
    ],
    "approved_drugs": "Lecanemab (Eisai/Biogen), Aducanumab (Biogen, controversial), Donanemab (Eli Lilly)",
    "genetic_evidence": "Strong. APP duplications, Swedish, Arctic, Iowa mutations → early-onset AD.",
    "mr_strength": "Strong (familial AD).",
    "key_variants": "Swedish KM670/671NL, Arctic E693G, Iowa D694N",
    "diseases": [
      "Alzheimer's disease (early and late onset)"
    ],
    "pathway_centrality": 8,
    "off_target_risk": 4,
    "tier": 1
  },
  "PSEN1": {
    "protein_class": "aspartyl protease (γ-secretase catalytic subunit)",
    "function": "Presenilin 1. Catalytic subunit of γ-secretase that cleaves APP to Aβ.",
    "druggability_tier": 1,
    "modalities": [
      "small molecule γ-secretase modulators (in development)"
    ],
    "approved_drugs": "None direct; BACE inhibitors failed",
    "genetic_evidence": "Very strong. PSEN1 mutations → aggressive early-onset AD.",
    "mr_strength": "N/A (Mendelian).",
    "key_variants": "Multiple (>200 known)",
    "diseases": [
      "Early-onset familial Alzheimer's disease"
    ],
    "pathway_centrality": 7,
    "off_target_risk": 4,
    "tier": 1
  },
  "SNCA": {
    "protein_class": "presynaptic protein (α-synuclein)",
    "function": "α-Synuclein. Major component of Lewy bodies in Parkinson's disease.",
    "druggability_tier": 1,
    "modalities": [
      "antibody (prasinezumab Phase 2)",
      "ASO (in development)"
    ],
    "approved_drugs": "None (prasinezumab and cinpanemab failed Phase 2)",
    "genetic_evidence": "Strong. SNCA triplication → familial PD. A53T, A30P, E46K mutations.",
    "mr_strength": "N/A (Mendelian).",
    "key_variants": "A53T, A30P, E46K, gene triplication",
    "diseases": [
      "Parkinson's disease",
      "Dementia with Lewy bodies",
      "Multiple system atrophy"
    ],
    "pathway_centrality": 8,
    "off_target_risk": 5,
    "tier": 1
  },
  "LRRK2": {
    "protein_class": "serine/threonine kinase",
    "function": "Leucine-rich repeat kinase 2. G2019S activating mutation is the most common cause of familial PD.",
    "druggability_tier": 1,
    "modalities": [
      "small molecule TKI (multiple in development)"
    ],
    "approved_drugs": "None yet (Phase 2/3 ongoing)",
    "genetic_evidence": "Very strong. G2019S in 1% of sporadic PD, 5% of familial PD.",
    "mr_strength": "N/A (Mendelian).",
    "key_variants": "G2019S, R1441C/G/H",
    "diseases": [
      "Parkinson's disease (familial and sporadic)",
      "Crohn's disease (some variants)"
    ],
    "pathway_centrality": 6,
    "off_target_risk": 4,
    "tier": 1
  },
  "FAM171A2": {
    "protein_class": "neuronal transmembrane protein",
    "function": "Endolysosomal protein mediating α-synuclein fibril uptake in neurons.",
    "druggability_tier": 2,
    "modalities": [
      "small molecule (bemcentinib repurposed for PD)",
      "antibody (theoretical)"
    ],
    "approved_drugs": "None (bemcentinib Phase 2 for COVID-19, repurposed for PD)",
    "genetic_evidence": "Moderate. Recent GWAS and functional studies (Science 2025, Wu KM).",
    "mr_strength": "Moderate.",
    "key_variants": "rs7082295 (GWAS hit)",
    "diseases": [
      "Parkinson's disease (emerging)",
      "AML (preclinical)"
    ],
    "pathway_centrality": 5,
    "off_target_risk": 5,
    "tier": 2
  },
  "GBA": {
    "protein_class": "lysosomal enzyme (glucocerebrosidase)",
    "function": "β-glucocerebrosidase. GBA LoF → Gaucher disease, increased PD risk.",
    "druggability_tier": 1,
    "modalities": [
      "ERT (imiglucerase approved for Gaucher)",
      "small molecule chaperone (ambroxol, miglustat)"
    ],
    "approved_drugs": "Imiglucerase, Velaglucerase, Taliglucerase (Gaucher), Ambroxol (off-label)",
    "genetic_evidence": "Very strong. GBA LoF → 5-fold higher PD risk.",
    "mr_strength": "N/A (Mendelian).",
    "key_variants": "N370S, L444P, 84GG",
    "diseases": [
      "Gaucher disease (Type 1, 2, 3)",
      "Parkinson's disease (risk factor)"
    ],
    "pathway_centrality": 4,
    "off_target_risk": 6,
    "tier": 1
  },
  "HTT": {
    "protein_class": "scaffold protein (huntingtin)",
    "function": "Huntingtin. CAG repeat expansion drives Huntington's disease.",
    "druggability_tier": 1,
    "modalities": [
      "ASO (tominersen halted 2021)",
      "ASO (AMT-130 gene therapy)"
    ],
    "approved_drugs": "None (tominersen halted for safety; AMT-130 in trials)",
    "genetic_evidence": "Definitive. CAG repeat expansion in exon 1 → HD.",
    "mr_strength": "N/A (Mendelian).",
    "key_variants": "CAG repeat expansion (≥36 = pathogenic)",
    "diseases": [
      "Huntington's disease"
    ],
    "pathway_centrality": 7,
    "off_target_risk": 3,
    "tier": 1
  },
  "INSR": {
    "protein_class": "receptor tyrosine kinase",
    "function": "Insulin receptor. Binds insulin, activates PI3K/AKT signaling.",
    "druggability_tier": 1,
    "modalities": [
      "recombinant insulin (approved)"
    ],
    "approved_drugs": "Multiple insulin formulations (lispro, aspart, glargine, degludec)",
    "genetic_evidence": "Very strong. INSR mutations → insulin resistance syndromes (Donohue, Rabson-Mendenhall).",
    "mr_strength": "N/A (Mendelian).",
    "key_variants": "Multiple LoF",
    "diseases": [
      "Type 1 diabetes",
      "Type 2 diabetes",
      "Insulin resistance syndromes",
      "Donohue syndrome"
    ],
    "pathway_centrality": 9,
    "off_target_risk": 5,
    "tier": 1
  },
  "PPARG": {
    "protein_class": "nuclear receptor (NR1C3)",
    "function": "Peroxisome proliferator-activated receptor gamma. Master regulator of adipogenesis, insulin sensitivity.",
    "druggability_tier": 1,
    "modalities": [
      "small molecule agonist (thiazolidinediones)"
    ],
    "approved_drugs": "Pioglitazone, Rosiglitazone (TZDs)",
    "genetic_evidence": "Strong. PPARG LoF → insulin resistance, T2D. Pro12Ala → 20% lower T2D risk.",
    "mr_strength": "Moderate.",
    "key_variants": "Pro12Ala (P12A, rs1801282)",
    "diseases": [
      "Type 2 diabetes",
      "NAFLD",
      "Metabolic syndrome"
    ],
    "pathway_centrality": 8,
    "off_target_risk": 3,
    "tier": 1
  },
  "SGLT2": {
    "protein_class": "transporter (SLC5A2)",
    "function": "Sodium-glucose cotransporter 2. Reabsorbs glucose in kidney proximal tubule.",
    "druggability_tier": 1,
    "modalities": [
      "small molecule inhibitor (SGLT2 inhibitors)"
    ],
    "approved_drugs": "Canagliflozin, Dapagliflozin, Empagliflozin, Ertugliflozin",
    "genetic_evidence": "Strong. SGLT2 LoF variants → lower glucose, lower uric acid, cardioprotective.",
    "mr_strength": "Moderate (protective effects validated in trials).",
    "key_variants": "rs9934336 (LoF)",
    "diseases": [
      "Type 2 diabetes",
      "Heart failure (HFrEF, HFpEF)",
      "CKD",
      "Cardiovascular death"
    ],
    "pathway_centrality": 5,
    "off_target_risk": 7,
    "tier": 1
  },
  "HMGCR": {
    "protein_class": "enzyme (3-hydroxy-3-methylglutaryl-CoA reductase)",
    "function": "Rate-limiting enzyme in cholesterol biosynthesis.",
    "druggability_tier": 1,
    "modalities": [
      "small molecule inhibitor (statins)"
    ],
    "approved_drugs": "Atorvastatin, Rosuvastatin, Simvastatin, Pravastatin, Lovastatin, Fluvastatin, Pitavastatin",
    "genetic_evidence": "Very strong. HMGCR LoF variants → lower LDL-C → reduced CHD (mirror statin effect).",
    "mr_strength": "Very strong (validates statin mechanism).",
    "key_variants": "rs12916 (LoF proxy)",
    "diseases": [
      "Hypercholesterolemia",
      "ASCVD",
      "Primary prevention of CVD"
    ],
    "pathway_centrality": 8,
    "off_target_risk": 4,
    "tier": 1
  },
  "LDLR": {
    "protein_class": "receptor (LDL receptor)",
    "function": "Binds LDL particles, mediates endocytosis and lysosomal degradation. LoF → familial hypercholesterolemia.",
    "druggability_tier": 1,
    "modalities": [
      "not directly targeted; PCSK9 inhibitors increase LDLR"
    ],
    "approved_drugs": "None direct (PCSK9 inhibitors address the same pathway)",
    "genetic_evidence": "Very strong. >1000 LoF variants → FH. Mendelian randomization confirms causal for CHD.",
    "mr_strength": "Very strong.",
    "key_variants": "Multiple (>1000 known)",
    "diseases": [
      "Familial hypercholesterolemia",
      "ASCVD"
    ],
    "pathway_centrality": 9,
    "off_target_risk": 9,
    "tier": 1
  },
  "TP53": {
    "protein_class": "tumor suppressor (transcription factor)",
    "function": "'Guardian of the genome'. Triggers cell cycle arrest, apoptosis, DNA repair in response to stress.",
    "druggability_tier": 3,
    "modalities": [
      "gene therapy (in development)",
      "small molecule reactivators (PRIMA-1/MAPR)"
    ],
    "approved_drugs": "None direct (most p53-targeting drugs failed)",
    "genetic_evidence": "Very strong. TP53 mutations in 50% of all cancers. Li-Fraumeni syndrome from germline LoF.",
    "mr_strength": "N/A (tumor suppressor, context-dependent).",
    "key_variants": "R175H, R248Q, R273H (hotspot mutations)",
    "diseases": [
      "Most cancers (somatic)",
      "Li-Fraumeni syndrome (germline)"
    ],
    "pathway_centrality": 10,
    "off_target_risk": 2,
    "tier": 2,
    "failure_history": "p53 traditionally considered undruggable; eprenetapopt (PRIMA-1MET) Phase 3 AML failed."
  },
  "MYC": {
    "protein_class": "transcription factor (oncogene)",
    "function": "c-Myc. Master regulator of cell growth, proliferation, metabolism.",
    "druggability_tier": 4,
    "modalities": [
      "none direct (transcription factor, traditionally undruggable)",
      "BET inhibitors (downstream)"
    ],
    "approved_drugs": "None direct",
    "genetic_evidence": "Very strong. MYC amplification/overexpression in many cancers.",
    "mr_strength": "N/A (somatic).",
    "key_variants": "8q24 amplification",
    "diseases": [
      "Burkitt lymphoma (t(8;14))",
      "Neuroblastoma (MYCN)",
      "Multiple carcinomas"
    ],
    "pathway_centrality": 10,
    "off_target_risk": 1,
    "tier": 3,
    "failure_history": "No direct MYC inhibitors approved; indirect approaches (BET, G-quadruplex) in development."
  },
  "BRCA1": {
    "protein_class": "tumor suppressor (DNA repair)",
    "function": "DNA double-strand break repair via homologous recombination.",
    "druggability_tier": 2,
    "modalities": [
      "PARP inhibitors (indirect, in BRCA-deficient cancers)"
    ],
    "approved_drugs": "Olaparib, Rucaparib, Niraparib, Talazoparib (PARP inhibitors for BRCA+)",
    "genetic_evidence": "Very strong. BRCA1 LoF → hereditary breast/ovarian cancer.",
    "mr_strength": "N/A (Mendelian).",
    "key_variants": "Multiple (>500 known), 185delAG, 5382insC",
    "diseases": [
      "Hereditary breast cancer",
      "Hereditary ovarian cancer",
      "BRCA1/2-deficient cancers (PARPi responsive)"
    ],
    "pathway_centrality": 9,
    "off_target_risk": 6,
    "tier": 1
  },
  "BRCA2": {
    "protein_class": "tumor suppressor (DNA repair)",
    "function": "DNA double-strand break repair via homologous recombination. Partner of BRCA1.",
    "druggability_tier": 2,
    "modalities": [
      "PARP inhibitors (indirect)"
    ],
    "approved_drugs": "Olaparib, Rucaparib, Niraparib, Talazoparib",
    "genetic_evidence": "Very strong. BRCA2 LoF → hereditary breast/ovarian/prostate/pancreatic cancer.",
    "mr_strength": "N/A (Mendelian).",
    "key_variants": "Multiple, 6174delT",
    "diseases": [
      "Hereditary breast cancer",
      "Hereditary ovarian cancer",
      "Hereditary prostate cancer",
      "Hereditary pancreatic cancer"
    ],
    "pathway_centrality": 9,
    "off_target_risk": 6,
    "tier": 1
  },
  "JAK3": {
    "protein_class": "tyrosine kinase",
    "function": "Janus kinase 3. Restricted to immune cells, signals through γc cytokine receptors.",
    "druggability_tier": 1,
    "modalities": [
      "small molecule inhibitor (decernotinib, ritlecitinib)"
    ],
    "approved_drugs": "Ritlecitinib (Pfizer, alopecia areata)",
    "genetic_evidence": "Strong. JAK3 LoF → SCID (autosomal recessive).",
    "mr_strength": "N/A (Mendelian).",
    "key_variants": "Multiple LoF",
    "diseases": [
      "Alopecia areata",
      "RA",
      "Psoriasis",
      "Ulcerative colitis",
      "SCID (germline)"
    ],
    "pathway_centrality": 7,
    "off_target_risk": 4,
    "tier": 1
  },
  "TYK2": {
    "protein_class": "tyrosine kinase",
    "function": "Non-receptor tyrosine kinase 2. Pairs with JAK1/2 for type I IFN, IL-12, IL-23 signaling.",
    "druggability_tier": 1,
    "modalities": [
      "small molecule (deucravacitinib allosteric approved)"
    ],
    "approved_drugs": "Deucravacitinib (Bristol Myers Squibb, psoriasis)",
    "genetic_evidence": "Strong. TYK2 LoF → protection from psoriasis, T1D, IBD (human genetics).",
    "mr_strength": "Strong.",
    "key_variants": "P1104A (protective LoF)",
    "diseases": [
      "Plaque psoriasis",
      "Psoriatic arthritis",
      "Lupus",
      "IBD (Crohn's, UC)"
    ],
    "pathway_centrality": 7,
    "off_target_risk": 6,
    "tier": 1
  },
  "IDO1": {
    "protein_class": "enzyme (indoleamine 2,3-dioxygenase 1)",
    "function": "Tryptophan catabolism enzyme. Immunosuppressive in tumor microenvironment.",
    "druggability_tier": 1,
    "modalities": [
      "small molecule inhibitor (epacadostat failed Phase 3)"
    ],
    "approved_drugs": "None (epacadostat + pembrolizumab failed ECHO-301 2018)",
    "genetic_evidence": "Weak. IDO1 LoF not clearly protective in human studies.",
    "mr_strength": "Weak.",
    "key_variants": "rs3739319, rs9657182",
    "diseases": [
      "Melanoma (failed)",
      "Renal cell carcinoma",
      "Hematologic malignancies"
    ],
    "pathway_centrality": 4,
    "off_target_risk": 3,
    "tier": 3,
    "failure_history": "Epacadostat + Keytruda failed Phase 3 ECHO-301 in melanoma (2018) for futility."
  },
  "STAT3": {
    "protein_class": "transcription factor",
    "function": "Signal transducer and activator of transcription 3. Converges signals from IL-6, IL-10, IL-23, many others.",
    "druggability_tier": 2,
    "modalities": [
      "ASO (in development)",
      "small molecule (in development)"
    ],
    "approved_drugs": "None direct (JAK inhibitors target upstream)",
    "genetic_evidence": "Strong. STAT3 LoF → autosomal dominant hyper-IgE syndrome (Job syndrome). GoF → autoimmune.",
    "mr_strength": "N/A (Mendelian).",
    "key_variants": "Multiple LoF/GoF",
    "diseases": [
      "Cancer (many types, somatic)",
      "Hyper-IgE syndrome (germline)",
      "Autoimmune lymphoproliferative syndrome"
    ],
    "pathway_centrality": 9,
    "off_target_risk": 3,
    "tier": 2
  },
  "IL4R": {
    "protein_class": "cytokine receptor (interleukin-4 receptor)",
    "function": "Binds IL-4 and IL-13, activates JAK1/JAK3-STAT6 signaling. Key in Th2 inflammation.",
    "druggability_tier": 1,
    "modalities": [
      "antibody (dupilumab blocks IL4Rα)"
    ],
    "approved_drugs": "Dupilumab (Sanofi/Regeneron) - blocks IL-4Rα",
    "genetic_evidence": "Strong. IL4R variants linked to atopy, asthma severity.",
    "mr_strength": "Moderate.",
    "key_variants": "rs1801275 (Q551R)",
    "diseases": [
      "Atopic dermatitis",
      "Asthma",
      "Chronic rhinosinusitis with nasal polyps",
      "Eosinophilic esophagitis",
      "Prurigo nodularis"
    ],
    "pathway_centrality": 6,
    "off_target_risk": 5,
    "tier": 1
  },
  "Lp-PLA2": {
    "protein_class": "enzyme (lipoprotein-associated phospholipase A2)",
    "function": "PLA2G7. Hydrolyzes oxidized phospholipids on LDL. Associated with CVD risk.",
    "druggability_tier": 2,
    "modalities": [
      "small molecule inhibitor (darapladib failed 2014)"
    ],
    "approved_drugs": "None (darapladib failed STABILITY Phase 3 2014)",
    "genetic_evidence": "Weak. PLA2G7 LoF variants → lower enzyme activity but no protection from CVD.",
    "mr_strength": "Weak. No causal effect on ASCVD.",
    "key_variants": "rs1805017 (V279F LoF)",
    "diseases": [
      "Atherosclerosis (failed target)"
    ],
    "pathway_centrality": 3,
    "off_target_risk": 5,
    "tier": 3,
    "failure_history": "Darapladib failed Phase 3 STABILITY trial 2014. Genetic studies confirmed lack of causal effect."
  }
};
