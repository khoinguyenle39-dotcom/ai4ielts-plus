# UI/UX Redesign, DOL Brand Identity & 3D Interactive Logo Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform the web platform from a generic blue AI style into a professional, human-designed IELTS platform adopting the signature DOL Red brand identity, with an interactive 3D "IELTS" logo component, clean educational typography, and zero robotic AI tropes.

**Architecture:** Update Tailwind configuration with DOL Red semantic tokens (`#e11b22`, `#b91c1c`, `#dc2626`). Construct a custom Three.js WebGL interactive 3D "IELTS" logo component following `3d-motion-sites` standards. Restructure layout, dashboard, dictation, mock test runner, and gamification screens to match the authoritative, high-conversion look of DOL English.

**Tech Stack:** Next.js 15, React 19, Tailwind CSS, Three.js, Lucide Icons, Supabase.

---

## Global Constraints
- Primary Brand Color: DOL Red (`#e11b22`, hover `#b91c1c`, active `#991b1b`, soft red `#fee2e2`, border `#fca5a5`).
- Typography: High-clarity sans-serif for UI, clean serif for Reading passages.
- Zero AI Tropes: No purple/indigo gradient blobs, no Sparkles emoji spam, no generic "AI Powered" buzzwords.
- 3D Logo: Built with Three.js, self-contained, responsive, 60fps with mouse tracking and mobile touch support.

---

### Task 1: Update Tailwind Config and Global CSS for DOL Red Brand
**Files:**
- Modify: `tailwind.config.ts`
- Modify: `src/app/globals.css`

- [ ] Define DOL Red palette (`dol-50` to `dol-900`) with `#e11b22` as default brand color.
- [ ] Remove blue/indigo color defaults and update base CSS variables.
- [ ] Verify build passes.

---

### Task 2: Create Interactive 3D "IELTS" Logo Component
**Files:**
- Create: `src/components/ThreeIeltsLogo.tsx`

- [ ] Implement Three.js canvas with interactive 3D letterblocks / extruded mesh spelling "I E L T S".
- [ ] Add studio lighting (ambient + red key light + white specular rim light).
- [ ] Add pointer tracking (`lerp` rotation on mouse move, spring back on leave, interactive click rotation).
- [ ] Ensure mobile touch-drag compatibility and graceful canvas fallback.

---

### Task 3: Redesign Global Layout & Navigation
**Files:**
- Modify: `src/app/layout.tsx`

- [ ] Embed the interactive 3D IELTS Logo in the brand header.
- [ ] Apply DOL Red navigation styling, red active pills, and streak flame badge.
- [ ] Style mobile bottom navigation bar in DOL Red accents.

---

### Task 4: Redesign Home Dashboard & Remove AI Tropes
**Files:**
- Modify: `src/app/page.tsx`

- [ ] Overhaul Hero section with DOL Red background, real Cambridge & Real Test highlights, and authentic student achievement metrics.
- [ ] Redesign 4 Core Pillar cards with 3D hover effects, red badge accents, and real stats.
- [ ] Clean up Recent Activity card with red status indicators.

---

### Task 5: Redesign Practice & Test Modules (Dictation, Mock Test, Games, Roadmap)
**Files:**
- Modify: `src/app/dictation/page.tsx`
- Modify: `src/app/dictation/[id]/page.tsx`
- Modify: `src/app/tests/page.tsx`
- Modify: `src/app/tests/[id]/page.tsx`
- Modify: `src/app/games/collocations/page.tsx`
- Modify: `src/app/roadmap/page.tsx`

- [ ] Update Dictation catalog and studio with red audio player controls and sleek word-diff colors.
- [ ] Update IELTS Mock Test list and split-screen runner with official IDP/BC aesthetic and Linearthinking red highlights.
- [ ] Update Collocations Game with red combo badges and polished cards.
- [ ] Update Roadmap with red milestone checkpoints.

---

### Task 6: Build, Deploy & Verify with Playwright MCP
**Files:**
- Run: `npm run build`
- Run: `npm start`
- Test: Playwright MCP browser navigation across all routes.
