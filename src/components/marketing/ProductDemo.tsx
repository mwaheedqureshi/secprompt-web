'use client'
import { useEffect, useRef, useState } from 'react'

const HTML = `<!DOCTYPE html>
<html><head><meta charset="utf-8">
<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
*{margin:0;padding:0;box-sizing:border-box}
:root{
--bg:#070810;--s1:#0c0e1a;--s2:#101320;--s3:#141728;
--p:#7c6af7;--p2:#9d8ff9;--p3:#5b4fd4;
--b:#3b82f6;--c:#06b6d4;--g:#10b981;--am:#f59e0b;--r:#ef4444;
--t:#f8fafc;--t2:#94a3b8;--t3:#475569;--t4:#1e2538;
--br1:rgba(124,106,247,0.15);--br2:rgba(124,106,247,0.28);--br3:rgba(124,106,247,0.5);
}
html,body{width:960px;height:540px;overflow:hidden;background:#070810;font-family:'Inter',system-ui,sans-serif;color:#f8fafc}
#wrap{width:960px;height:540px;position:relative;overflow:hidden;background:var(--bg)}
.scanline{position:absolute;inset:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,0.03) 2px,rgba(0,0,0,0.03) 4px);pointer-events:none;z-index:100}
.sc{position:absolute;inset:0;opacity:0;transition:opacity 0.7s cubic-bezier(0.4,0,0.2,1);pointer-events:none;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 40px}
.sc.on{opacity:1}
.chrome{position:absolute;top:0;left:0;right:0;height:44px;background:var(--s1);border-bottom:1px solid var(--br1);display:flex;align-items:center;padding:0 20px;gap:16px;z-index:50}
.chrome-dot{width:9px;height:9px;border-radius:50%}
.chrome-bar{flex:1;height:22px;background:var(--s2);border:1px solid var(--br1);border-radius:4px;display:flex;align-items:center;padding:0 10px;gap:6px}
.chrome-lock{width:7px;height:7px;border:1px solid var(--t3);border-radius:50%;margin-bottom:-1px}
.chrome-url{font-size:10px;color:var(--t3);letter-spacing:0.02em}
.chrome-nav{display:flex;gap:8px;font-size:18px;color:var(--t3);line-height:1}
.sidebar{position:absolute;left:0;top:44px;bottom:0;width:52px;background:var(--s1);border-right:1px solid var(--br1);display:flex;flex-direction:column;align-items:center;padding-top:16px;gap:6px;z-index:50}
.si{width:32px;height:32px;border-radius:7px;display:flex;align-items:center;justify-content:center;font-size:14px;cursor:default}
.si.act{background:rgba(124,106,247,0.18);border:1px solid var(--br2)}
.si.dim{opacity:0.35}
.main{position:absolute;left:52px;top:44px;right:0;bottom:0}
.topbar{display:flex;align-items:center;gap:10px;margin-bottom:16px;width:100%}
.tblabel{font-size:10px;font-weight:700;letter-spacing:0.14em;color:var(--p2);text-transform:uppercase}
.divider{width:1px;height:12px;background:var(--br2)}
.tbtag{font-size:10px;color:var(--t3);letter-spacing:0.06em}
.pill{display:inline-flex;align-items:center;gap:5px;padding:3px 10px;border-radius:20px;font-size:10px;font-weight:600;letter-spacing:0.04em}
.pill-g{background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.25);color:#34d399}
.pill-p{background:rgba(124,106,247,0.12);border:1px solid var(--br2);color:var(--p2)}
.pill-r{background:rgba(239,68,68,0.1);border:1px solid rgba(239,68,68,0.25);color:#f87171}
.pill-am{background:rgba(245,158,11,0.1);border:1px solid rgba(245,158,11,0.25);color:#fbbf24}
.pulse-dot{width:5px;height:5px;border-radius:50%;animation:pd 2s infinite}
.pulse-dot.g{background:#34d399}
.pulse-dot.r{background:#f87171}
@keyframes pd{0%,100%{opacity:1}50%{opacity:0.3}}
.card{background:var(--s2);border:1px solid var(--br1);border-radius:10px;padding:16px 18px}
.card-hi{border-color:var(--br3)}
.clabel{font-size:9px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:var(--p);margin-bottom:8px}
.ctitle{font-size:13px;font-weight:600;color:var(--t)}
.csub{font-size:11px;color:var(--t3);margin-top:2px}
.row{display:flex;justify-content:space-between;align-items:center;padding:5px 0;border-bottom:1px solid rgba(255,255,255,0.04)}
.row:last-child{border-bottom:none}
.rkey{font-size:11px;color:var(--t3)}
.rval{font-size:11px;font-weight:600;color:var(--t2)}
.meter{height:3px;background:rgba(255,255,255,0.06);border-radius:2px;margin-top:8px;overflow:hidden}
.mfill{height:100%;border-radius:2px;transition:width 1.4s cubic-bezier(0.4,0,0.2,1)}
.num-big{font-size:32px;font-weight:800;letter-spacing:-0.02em;line-height:1}
.frow{display:flex;align-items:center;gap:8px;padding:6px 0;border-bottom:1px solid rgba(255,255,255,0.04)}
.frow:last-child{border-bottom:none}
.ftag{font-size:9px;font-weight:700;letter-spacing:0.1em;padding:2px 7px;border-radius:4px;text-transform:uppercase;flex-shrink:0}
.ftext{font-size:11px;color:var(--t2)}
.fstatus{margin-left:auto;font-size:9px;font-weight:600;padding:2px 8px;border-radius:4px;white-space:nowrap}
.trace-node{background:var(--s2);border:1px solid var(--br1);border-radius:9px;padding:12px 16px;opacity:0;transform:translateY(8px);transition:opacity 0.45s ease,transform 0.45s ease}
.trace-node.on{opacity:1;transform:translateY(0)}
.trace-arrow{display:flex;justify-content:center;align-items:center;height:18px;color:var(--p);font-size:12px;opacity:0.4}
.trace-type{font-size:9px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;margin-bottom:5px}
.trace-text{font-size:12px;font-weight:500;color:var(--t)}
.trace-sub{font-size:11px;color:var(--t3);margin-top:3px}
.ev-chips{display:flex;gap:6px;flex-wrap:wrap;margin-top:7px}
.ev-chip{font-size:10px;padding:3px 9px;border-radius:5px;background:rgba(59,130,246,0.1);border:1px solid rgba(59,130,246,0.22);color:#60a5fa;font-weight:500}
.conf-row{display:flex;align-items:center;gap:10px;margin-top:8px}
.conf-val{font-size:11px;font-weight:600;color:var(--g);white-space:nowrap}
.conf-bar{flex:1;height:4px;background:rgba(16,185,129,0.12);border-radius:2px;overflow:hidden}
.conf-fill{height:100%;background:var(--g);border-radius:2px;transition:width 1.2s ease}
.step-flow{display:flex;flex-direction:column;gap:0;width:100%}
.sf-item{display:flex;gap:14px;padding:10px 0}
.sf-line{display:flex;flex-direction:column;align-items:center;width:24px;flex-shrink:0}
.sf-num{width:24px;height:24px;border-radius:50%;background:rgba(124,106,247,0.15);border:1px solid var(--br2);color:var(--p2);font-size:10px;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0}
.sf-conn{flex:1;width:1px;background:var(--br1);margin:3px 0}
.sf-body{flex:1;padding-bottom:4px}
.sf-title{font-size:12px;font-weight:600;color:var(--t)}
.sf-desc{font-size:11px;color:var(--t3);margin-top:2px}
.hero-hl{font-size:40px;font-weight:800;line-height:1.1;text-align:center;letter-spacing:-0.02em;color:var(--t);margin-bottom:12px}
.hero-hl em{font-style:normal;color:var(--p2)}
.hero-sub{font-size:14px;color:var(--t3);text-align:center;line-height:1.7;margin-bottom:26px}
.hero-badges{display:flex;gap:8px;flex-wrap:wrap;justify-content:center}
.hero-badge{background:var(--s2);border:1px solid var(--br1);border-radius:20px;padding:6px 14px;font-size:11px;font-weight:500;color:var(--t3);letter-spacing:0.02em}
.logo-text{font-size:18px;font-weight:800;letter-spacing:-0.02em;color:var(--t);margin-top:22px}
.logo-text span{color:var(--p2)}
.panel2{display:flex;gap:14px;width:100%;align-items:stretch}
.p2l,.p2r{flex:1;background:var(--s2);border:1px solid var(--br1);border-radius:10px;padding:16px}
.p2c{width:160px;flex-shrink:0;background:var(--s1);border:1px solid var(--br3);border-radius:12px;padding:18px 14px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center}
.p2flow{height:2px;background:rgba(124,106,247,0.12);border-radius:1px;margin:10px 0;position:relative;overflow:visible}
.p2fp{position:absolute;width:7px;height:7px;border-radius:50%;background:var(--p);top:-2.5px;animation:fp 2.2s linear infinite}
.p2fp:nth-child(2){animation-delay:-0.73s}
.p2fp:nth-child(3){animation-delay:-1.46s}
@keyframes fp{from{left:-7px;opacity:0}10%{opacity:0.9}90%{opacity:0.9}to{left:100%;opacity:0}}
.arrow-h{color:var(--t4);font-size:16px;display:flex;align-items:center}
.pitem{display:flex;align-items:center;gap:7px;font-size:11px;color:var(--t3);padding:4px 0;border-bottom:1px solid rgba(255,255,255,0.04)}
.pitem:last-child{border-bottom:none}
.pdot{width:4px;height:4px;border-radius:50%;background:var(--p);opacity:0.5;flex-shrink:0}
.grid2{display:grid;grid-template-columns:1fr 1fr;gap:12px;width:100%}
.grid3{display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;width:100%}
#progress{position:absolute;bottom:0;left:52px;right:0;height:2px;background:transparent}
#pbar{height:100%;background:var(--p);width:0;transition:none}
#nav{position:absolute;bottom:14px;left:50%;transform:translateX(-50%);display:flex;gap:6px;z-index:200}
.nd{width:4px;height:4px;border-radius:50%;background:var(--t4);transition:all 0.3s}
.nd.on{background:var(--p);width:14px;border-radius:2px}
</style></head><body>
<div id="wrap">
<div class="scanline"></div>
<div class="chrome">
  <div style="display:flex;gap:5px;margin-right:6px">
    <div class="chrome-dot" style="background:#ff5f57"></div>
    <div class="chrome-dot" style="background:#febc2e"></div>
    <div class="chrome-dot" style="background:#28c840"></div>
  </div>
  <div class="chrome-nav">&#8249; &#8250;</div>
  <div class="chrome-bar">
    <div class="chrome-lock"></div>
    <span class="chrome-url">app.secprompt.io / assessments / FinTechSupplier-2024</span>
  </div>
  <div style="display:flex;gap:8px;align-items:center">
    <span class="pill pill-g"><span class="pulse-dot g"></span>Live</span>
    <span style="font-size:11px;color:var(--t3)">v2.4.1</span>
  </div>
</div>
<div class="sidebar">
  <div class="si act">&#9646;</div>
  <div class="si dim">&#9632;</div>
  <div class="si dim">&#9650;</div>
  <div class="si dim">&#9654;</div>
  <div class="si dim" style="margin-top:auto;margin-bottom:16px">&#9881;</div>
</div>

<!-- S1 -->
<div class="sc on" id="s1" style="padding:52px 32px 28px">
  <div class="topbar">
    <span class="tblabel">Executive Dashboard</span>
    <div class="divider"></div>
    <span class="tbtag">Q4 2024 · 12 Active Suppliers</span>
    <div style="flex:1"></div>
    <span class="pill pill-g"><span class="pulse-dot g"></span>Assessment Ready</span>
  </div>
  <div class="grid3" style="margin-bottom:14px">
    <div class="card card-hi">
      <div class="clabel">Risk Score</div>
      <div class="num-big" style="color:#f87171">76</div>
      <div class="csub" style="margin-top:4px">High exposure</div>
      <div class="meter"><div class="mfill" id="mb1" style="width:0%;background:linear-gradient(90deg,#ef4444,#f97316)"></div></div>
    </div>
    <div class="card">
      <div class="clabel">Coverage</div>
      <div class="num-big" style="color:#34d399">91%</div>
      <div class="csub" style="margin-top:4px">Controls assessed</div>
      <div class="meter"><div class="mfill" id="mb2" style="width:0%;background:#10b981"></div></div>
    </div>
    <div class="card">
      <div class="clabel">Open Risks</div>
      <div class="num-big" style="color:#fbbf24">4</div>
      <div class="csub" style="margin-top:4px">Require action</div>
      <div class="meter"><div class="mfill" id="mb3" style="width:0%;background:#f59e0b"></div></div>
    </div>
  </div>
  <div class="card" style="width:100%">
    <div class="clabel">Recent Assessments</div>
    <div class="row"><span class="rkey">Stripe Payments Ltd</span><span class="pill pill-g">Approved</span></div>
    <div class="row"><span class="rkey">SysAid Technologies</span><span class="pill pill-am">Review</span></div>
    <div class="row"><span class="rkey">Visionify AI</span><span class="pill pill-r">Rejected</span></div>
  </div>
</div>

<!-- S2 -->
<div class="sc" id="s2" style="padding:52px 32px 28px">
  <div class="topbar">
    <span class="tblabel">Framework Coverage</span>
    <div class="divider"></div>
    <span class="tbtag">Harmonized · 60 controls</span>
    <div style="flex:1"></div>
    <span class="pill pill-p">&#9889; Harmonized</span>
  </div>
  <div class="panel2">
    <div class="p2l">
      <div class="clabel">Control Coverage by Domain</div>
      <div style="display:flex;flex-direction:column;gap:10px;margin-top:4px">
        <div><div style="display:flex;justify-content:space-between;font-size:11px;margin-bottom:4px"><span style="color:var(--t3)">Access Control</span><span style="color:#34d399;font-weight:600">94%</span></div><div class="meter"><div class="mfill" style="width:94%;background:#10b981"></div></div></div>
        <div><div style="display:flex;justify-content:space-between;font-size:11px;margin-bottom:4px"><span style="color:var(--t3)">Data Protection</span><span style="color:#fbbf24;font-weight:600">71%</span></div><div class="meter"><div class="mfill" style="width:71%;background:#f59e0b"></div></div></div>
        <div><div style="display:flex;justify-content:space-between;font-size:11px;margin-bottom:4px"><span style="color:var(--t3)">Incident Response</span><span style="color:#34d399;font-weight:600">88%</span></div><div class="meter"><div class="mfill" style="width:88%;background:#10b981"></div></div></div>
        <div><div style="display:flex;justify-content:space-between;font-size:11px;margin-bottom:4px"><span style="color:var(--t3)">Supply Chain Risk</span><span style="color:#f87171;font-weight:600">52%</span></div><div class="meter"><div class="mfill" style="width:52%;background:#ef4444"></div></div></div>
        <div><div style="display:flex;justify-content:space-between;font-size:11px;margin-bottom:4px"><span style="color:var(--t3)">Business Continuity</span><span style="color:#34d399;font-weight:600">91%</span></div><div class="meter"><div class="mfill" style="width:91%;background:#10b981"></div></div></div>
      </div>
    </div>
    <div class="p2c">
      <div class="p2flow"><div class="p2fp"></div><div class="p2fp"></div><div class="p2fp"></div></div>
      <div style="font-size:9px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:var(--p);margin:10px 0 6px">Frameworks</div>
      <div class="pitem"><div class="pdot"></div>NIST CSF</div>
      <div class="pitem"><div class="pdot"></div>ISO 27001</div>
      <div class="pitem"><div class="pdot"></div>GDPR</div>
      <div class="pitem"><div class="pdot"></div>DORA</div>
      <div class="p2flow" style="margin-top:10px"><div class="p2fp"></div><div class="p2fp"></div><div class="p2fp"></div></div>
    </div>
    <div class="p2r">
      <div class="clabel">Gap Summary</div>
      <div class="frow"><span class="ftag" style="background:rgba(239,68,68,0.12);color:#f87171">Critical</span><span class="ftext">MFA not enforced</span></div>
      <div class="frow"><span class="ftag" style="background:rgba(245,158,11,0.1);color:#fbbf24">High</span><span class="ftext">No exit strategy</span></div>
      <div class="frow"><span class="ftag" style="background:rgba(245,158,11,0.1);color:#fbbf24">High</span><span class="ftext">RPO undocumented</span></div>
      <div class="frow"><span class="ftag" style="background:rgba(124,106,247,0.12);color:var(--p2)">Med</span><span class="ftext">DPIA not completed</span></div>
    </div>
  </div>
</div>

<!-- S3 -->
<div class="sc" id="s3" style="padding:52px 32px 28px">
  <div class="topbar">
    <span class="tblabel">AI Assessment Pipeline</span>
    <div class="divider"></div>
    <span class="tbtag">4-Agent Architecture</span>
    <div style="flex:1"></div>
    <span class="pill pill-g"><span class="pulse-dot g"></span>Processing</span>
  </div>
  <div style="display:flex;gap:16px;width:100%">
    <div class="step-flow" style="flex:1">
      <div class="sf-item">
        <div class="sf-line"><div class="sf-num">1</div><div class="sf-conn"></div></div>
        <div class="sf-body"><div class="sf-title">Framework Indexing</div><div class="sf-desc">85 NIST CSF controls loaded and vectorised</div></div>
      </div>
      <div class="sf-item">
        <div class="sf-line"><div class="sf-num">2</div><div class="sf-conn"></div></div>
        <div class="sf-body"><div class="sf-title">Evidence Embedding</div><div class="sf-desc">246 chunks from SOC2 + RFP Response</div></div>
      </div>
      <div class="sf-item">
        <div class="sf-line"><div class="sf-num">3</div><div class="sf-conn"></div></div>
        <div class="sf-body"><div class="sf-title">Gap Analysis</div><div class="sf-desc">Cosine similarity · 3-band classification</div></div>
      </div>
      <div class="sf-item">
        <div class="sf-line"><div class="sf-num" style="background:rgba(16,185,129,0.15);border-color:rgba(16,185,129,0.3);color:#34d399">4</div></div>
        <div class="sf-body"><div class="sf-title" style="color:#34d399">Risk Scoring</div><div class="sf-desc">Score: 76 · 4 risks raised · Complete</div></div>
      </div>
    </div>
    <div style="width:220px">
      <div class="card" style="margin-bottom:10px">
        <div class="clabel">Live Stats</div>
        <div class="row"><span class="rkey">Controls</span><span class="rval">85 / 85</span></div>
        <div class="row"><span class="rkey">Evidence chunks</span><span class="rval">246</span></div>
        <div class="row"><span class="rkey">API calls</span><span class="rval">~85</span></div>
        <div class="row"><span class="rkey">Runtime</span><span class="rval">~117s</span></div>
      </div>
      <div class="card">
        <div class="clabel">Classification</div>
        <div class="row"><span class="rkey" style="color:#34d399">&#9632; Met</span><span class="rval">59</span></div>
        <div class="row"><span class="rkey" style="color:#fbbf24">&#9632; Partial</span><span class="rval">13</span></div>
        <div class="row"><span class="rkey" style="color:#f87171">&#9632; Gap</span><span class="rval">4</span></div>
        <div class="row"><span class="rkey" style="color:var(--t3)">&#9632; Insuff.</span><span class="rval">9</span></div>
      </div>
    </div>
  </div>
</div>

<!-- S4 -->
<div class="sc" id="s4" style="padding:52px 32px 28px">
  <div class="topbar">
    <span class="tblabel">Risk Register</span>
    <div class="divider"></div>
    <span class="tbtag">Stripe Payments · DORA Assessment</span>
    <div style="flex:1"></div>
    <span class="pill pill-r">4 Open Risks</span>
  </div>
  <div style="display:flex;gap:14px;width:100%">
    <div style="flex:1">
      <div class="card" style="margin-bottom:10px">
        <div style="display:flex;justify-content:space-between;align-items:flex-start">
          <div><div class="clabel">RSK-001</div><div class="ctitle">Exit Strategy Testing Not Independently Verified</div></div>
          <span class="ftag" style="background:rgba(239,68,68,0.12);color:#f87171;padding:3px 9px;border-radius:5px">High</span>
        </div>
        <div class="meter" style="margin-top:10px"><div class="mfill" id="rm1" style="width:0%;background:linear-gradient(90deg,#ef4444,#f97316)"></div></div>
        <div style="display:flex;gap:8px;margin-top:8px"><span class="pill pill-r">Open</span><span style="font-size:10px;color:var(--t3);align-self:center">DORA Art.28</span></div>
      </div>
      <div class="card">
        <div style="display:flex;justify-content:space-between;align-items:flex-start">
          <div><div class="clabel">RSK-002</div><div class="ctitle">Asset Inventory Lacks Auditor Confirmation</div></div>
          <span class="ftag" style="background:rgba(245,158,11,0.1);color:#fbbf24;padding:3px 9px;border-radius:5px">Med</span>
        </div>
        <div style="display:flex;gap:8px;margin-top:8px"><span class="pill pill-am">In Progress</span><span style="font-size:10px;color:var(--t3);align-self:center">DORA Art.8</span></div>
      </div>
    </div>
    <div style="width:200px">
      <div class="card" style="height:100%">
        <div class="clabel">Confidence</div>
        <div style="font-size:28px;font-weight:800;color:#34d399;margin-bottom:4px"><span id="conf-n">0</span></div>
        <div class="csub">AI assessment confidence</div>
        <div style="margin-top:16px">
          <div class="clabel">Residual Risk</div>
          <span class="pill pill-am" style="margin-top:4px">Medium</span>
        </div>
        <div style="margin-top:16px">
          <div class="clabel">Recommendation</div>
          <div style="font-size:11px;color:var(--t3);line-height:1.5">Request updated exit strategy documentation from supplier</div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- S5 -->
<div class="sc" id="s5" style="padding:52px 36px 28px">
  <div class="topbar">
    <span class="tblabel">Human Review Workflow</span>
    <div class="divider"></div>
    <span class="tbtag">Analyst Decision Layer</span>
    <div style="flex:1"></div>
    <span class="pill pill-am">Pending Review</span>
  </div>
  <div class="grid2">
    <div class="card">
      <div class="clabel">Finding · NIST CSF PR.AC-1</div>
      <div class="ctitle">Identity & Credential Management</div>
      <div class="csub">Partial — MFA attested but not independently verified</div>
      <div style="display:flex;gap:6px;margin-top:10px">
        <span class="pill pill-g">&#10003; Agree</span>
        <span class="pill" style="background:rgba(255,255,255,0.04);border:1px solid var(--br1);color:var(--t3)">Disagree</span>
        <span class="pill pill-am">Escalate</span>
      </div>
    </div>
    <div class="card card-hi">
      <div class="clabel">Evidence Strength</div>
      <div style="display:flex;flex-direction:column;gap:8px;margin-top:4px">
        <div><div style="display:flex;justify-content:space-between;font-size:10px;margin-bottom:3px"><span style="color:var(--t3)">SOC 2 Type II</span><span style="color:#34d399">95%</span></div><div class="meter"><div class="mfill" style="width:95%;background:#10b981"></div></div></div>
        <div><div style="display:flex;justify-content:space-between;font-size:10px;margin-bottom:3px"><span style="color:var(--t3)">RFP Response</span><span style="color:#fbbf24">60%</span></div><div class="meter"><div class="mfill" style="width:60%;background:#f59e0b"></div></div></div>
        <div><div style="display:flex;justify-content:space-between;font-size:10px;margin-bottom:3px"><span style="color:var(--t3)">Pentest Report</span><span style="color:#34d399">85%</span></div><div class="meter"><div class="mfill" style="width:85%;background:#10b981"></div></div></div>
      </div>
    </div>
    <div class="card">
      <div class="clabel">Supplier Claims</div>
      <div class="frow"><span class="ftag" style="background:rgba(16,185,129,0.1);color:#34d399">Audit</span><span class="ftext">MFA enforced across all systems</span></div>
      <div class="frow"><span class="ftag" style="background:rgba(59,130,246,0.1);color:#60a5fa">Policy</span><span class="ftext">IAM policy reviewed annually</span></div>
      <div class="frow"><span class="ftag" style="background:rgba(124,106,247,0.1);color:var(--p2)">RFP</span><span class="ftext">SSO via SAML 2.0 implemented</span></div>
    </div>
    <div class="card">
      <div class="clabel">Reviewer Comment</div>
      <div style="background:var(--s3);border:1px solid var(--br1);border-radius:6px;padding:8px;font-size:11px;color:var(--t3);line-height:1.5;margin-bottom:8px">SOC2 confirms MFA policy exists. Request screen evidence of enforcement across cloud consoles.</div>
      <span class="pill pill-am" style="font-size:10px">&#9888; Follow-up Required</span>
    </div>
  </div>
</div>

<!-- S6 -->
<div class="sc" id="s6" style="padding:52px 32px 28px">
  <div class="topbar">
    <span class="tblabel">Evidence Traceability</span>
    <div class="divider"></div>
    <span class="tbtag">Finding: DORA Art.11 — ICT Business Continuity</span>
    <div style="flex:1"></div>
    <span class="pill pill-am">Partially Supported</span>
  </div>
  <div style="display:flex;gap:14px;width:100%;margin-top:4px;align-items:flex-start">
    <div style="flex:1;display:flex;flex-direction:column;gap:0">
      <div class="trace-node" id="t1">
        <div class="trace-type" style="color:var(--p2)">Requirement</div>
        <div class="trace-text">DORA Art.11 — ICT Business Continuity Management</div>
        <div class="trace-sub">Mandatory RTO/RPO documentation and tested recovery procedures</div>
      </div>
      <div class="trace-arrow">&#8595;</div>
      <div class="trace-node" id="t2">
        <div class="trace-type" style="color:var(--c)">Supplier Statement</div>
        <div class="trace-text">Business continuity policy exists and is reviewed annually</div>
        <div class="trace-sub">Declared in Security Questionnaire · Section 4.2</div>
      </div>
      <div class="trace-arrow">&#8595;</div>
      <div class="trace-node" id="t3">
        <div class="trace-type" style="color:var(--b)">Evidence Reviewed</div>
        <div class="ev-chips">
          <div class="ev-chip">SOC 2 Type II</div>
          <div class="ev-chip">BC Policy v2.1</div>
          <div class="ev-chip">DR Test Report</div>
        </div>
      </div>
      <div class="trace-arrow">&#8595;</div>
      <div class="trace-node" id="t4" style="background:rgba(16,185,129,0.05);border-color:rgba(16,185,129,0.2)">
        <div class="trace-type" style="color:var(--g)">Assessment Outcome</div>
        <div class="trace-text">Partially Supported — RTO documented, RPO evidence absent</div>
        <div class="conf-row">
          <div class="conf-val">81% confidence</div>
          <div class="conf-bar"><div class="conf-fill" id="cf" style="width:0%"></div></div>
        </div>
      </div>
    </div>
    <div style="width:190px;background:var(--s2);border:1px solid var(--br1);border-radius:10px;padding:14px">
      <div class="clabel">Audit Trail</div>
      <div style="display:flex;flex-direction:column;gap:8px">
        <div style="font-size:10px;color:var(--t3)">&#128100; Reviewed by assessor</div>
        <div style="font-size:10px;color:var(--t3)">&#128336; 14 Jun 2024 09:42</div>
        <div style="font-size:10px;color:var(--t3)">&#128196; 3 documents linked</div>
        <div style="font-size:10px;color:var(--t3)">&#9888; 1 contradiction flagged</div>
        <div style="margin-top:8px;padding-top:8px;border-top:1px solid rgba(255,255,255,0.05)">
          <div class="clabel" style="margin-bottom:6px">Linked Controls</div>
          <div style="font-size:10px;color:var(--t3);margin-bottom:4px">DORA Art.11.3(b)</div>
          <div style="font-size:10px;color:var(--t3);margin-bottom:4px">ISO 27001 A.17.1</div>
          <div style="font-size:10px;color:var(--t3)">NIST CSF RC.RP-1</div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- S7 -->
<div class="sc" id="s7" style="padding:50px 48px 30px">
  <div style="text-align:center">
    <div style="font-size:10px;font-weight:700;letter-spacing:0.16em;text-transform:uppercase;color:var(--p);margin-bottom:20px">Enterprise Supplier Risk Intelligence</div>
    <div class="hero-hl" style="font-size:36px">Evidence-Backed Supplier<br>Risk Decisions</div>
    <div class="hero-sub">Explainable. &nbsp;&nbsp; Auditable. &nbsp;&nbsp; Human Reviewed.</div>
    <div class="hero-badges">
      <div class="hero-badge">Evidence Traceability</div>
      <div class="hero-badge">Assessment Confidence</div>
      <div class="hero-badge">Human Review Workflow</div>
      <div class="hero-badge">Audit Ready</div>
      <div class="hero-badge">Multi-Framework</div>
    </div>
    <div class="logo-text">Sec<span>Prompt</span></div>
    <div style="font-size:10px;color:var(--t3);margin-top:6px;letter-spacing:0.08em">SUPPLIER RISK INTELLIGENCE PLATFORM</div>
  </div>
</div>

</div>
<div id="progress"><div id="pbar"></div></div>
<div id="nav">
  <div class="nd on"></div><div class="nd"></div><div class="nd"></div><div class="nd"></div>
  <div class="nd"></div><div class="nd"></div><div class="nd"></div>
</div>

<script>
const scenes=['s1','s2','s3','s4','s5','s6','s7'];
const dur=[3000,3500,3800,3800,3500,4200,3200];
let cur=0,timer=null;

function animCount(el,to,suffix,ms){
  let v=0,step=to/40;
  const iv=setInterval(()=>{v=Math.min(v+step,to);el.textContent=Math.round(v)+(suffix||'');if(v>=to)clearInterval(iv);},ms/40);
}

function onEnter(i){
  if(i===0){
    setTimeout(()=>{document.getElementById('mb1').style.width='80%'},200);
    setTimeout(()=>{document.getElementById('mb2').style.width='91%'},400);
    setTimeout(()=>{document.getElementById('mb3').style.width='40%'},600);
  }
  if(i===3){
    setTimeout(()=>{document.getElementById('rm1').style.width='82%'},200);
    const cn=document.getElementById('conf-n');
    setTimeout(()=>animCount(cn,92,'%',1200),300);
  }
  if(i===5){
    const ns=['t1','t2','t3','t4'];
    ns.forEach((id,j)=>setTimeout(()=>document.getElementById(id).classList.add('on'),j*500+100));
    setTimeout(()=>{document.getElementById('cf').style.width='81%'},2200);
  }
}

function onLeave(i){
  if(i===0){['mb1','mb2','mb3'].forEach(id=>{document.getElementById(id).style.width='0%'});}
  if(i===3){document.getElementById('rm1').style.width='0%';document.getElementById('conf-n').textContent='0';}
  if(i===5){['t1','t2','t3','t4'].forEach(id=>document.getElementById(id).classList.remove('on'));document.getElementById('cf').style.width='0%';}
}

function startProgress(ms){
  const bar=document.getElementById('pbar');
  bar.style.transition='none';bar.style.width='0%';
  requestAnimationFrame(()=>requestAnimationFrame(()=>{
    bar.style.transition='width '+ms+'ms linear';
    bar.style.width='100%';
  }));
}

function go(next){
  onLeave(cur);
  document.getElementById(scenes[cur]).classList.remove('on');
  document.querySelectorAll('.nd')[cur].classList.remove('on');
  cur=next%scenes.length;
  document.getElementById(scenes[cur]).classList.add('on');
  document.querySelectorAll('.nd')[cur].classList.add('on');
  onEnter(cur);
  startProgress(dur[cur]);
  timer=setTimeout(()=>go(cur+1),dur[cur]);
}

onEnter(0);
startProgress(dur[0]);
timer=setTimeout(()=>go(1),dur[0]);
</script>
</body></html>`

export default function ProductDemo() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const obs = new ResizeObserver(([entry]) => {
      const w = entry.contentRect.width
      setScale(Math.min(1, w / 960))
    })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={containerRef} style={{ width: '100%', maxWidth: 960, margin: '0 auto' }}>
      <div style={{ height: Math.round(540 * scale), overflow: 'hidden', borderRadius: 12 }}>
        <iframe
          srcDoc={HTML}
          sandbox="allow-scripts"
          scrolling="no"
          style={{
            width: 960,
            height: 540,
            border: 'none',
            display: 'block',
            transformOrigin: 'top left',
            transform: `scale(${scale})`,
          }}
        />
      </div>
    </div>
  )
}
