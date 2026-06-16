---
name: aig-design
description: Use this skill to generate well-branded interfaces and assets for AIG Avaliação de Imóveis (Meridiano Urbano design system), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for the public evaluation form and admin panel.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Key design decisions to remember

- **Colors:** Navy `#002445` (primary), Amber `#E87D2C` (accent/CTA), Safira `#1A6B94` (secondary/info)
- **Type:** Big Shoulders Display (hero/display, UPPERCASE), Work Sans (headings), Outfit (body), DM Mono (numeric data)
- **Spacing:** Base 8px. Never invent new spacing values.
- **Buttons:** `primary` (navy) for admin actions, `accent` (amber) for public-facing CTAs
- **Tone:** Precision + Trust + Clarity. Concise, no fluff, no emoji.
- **Two contexts:** Public (warm, conversion-focused) vs Admin (dense, data-first)
- **No gradients, no colored left-border cards, no rounded corners only on one side**
- **Icons:** Lucide, outline style, 1.5–2px stroke, 16–20px

## Stack context

- Frontend: Vue 3 + TypeScript (production). React used for design system components/prototypes only.
- Backend: .NET 10
- Key domain concepts: CUB (Custo Unitário Básico), SINDUSCON-BA, VUPT, INPC, tipos R-1/R-16/PP-4/PIS/CSL-8/CSL-16/CAL-8/RP-1Q
