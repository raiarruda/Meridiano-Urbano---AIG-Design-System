# Meridiano Urbano — AIG Design System

**Versão:** 1.0  
**Produto:** AIG Avaliação de Imóveis — Salvador, BA  
**Stack:** Vue 3 + TypeScript (frontend) / .NET 10 (backend)

---

## Sobre o Produto

A **AIG Avaliação de Imóveis** é uma plataforma de avaliação imobiliária situada em Salvador, Bahia. O sistema opera em dois contextos distintos:

1. **Área pública (leads):** Formulário de avaliação gratuita de imóvel — o cliente preenche os dados do imóvel e recebe o resultado estimado por e-mail. Tom acolhedor, foco em conversão.
2. **Área admin:** Painel de gestão interna — tabelas com edição inline, badges de status, toast de confirmação, micro CRM para acompanhamento de leads. Sem autenticação no MVP.

### Fontes consultadas
- `uploads/aig-design-system.png` — referência do sistema visual Meridiano Urbano v1.0
- `uploads/aig-logo-redesign.png` — redesign do logo e variações de uso

---

## CONTENT FUNDAMENTALS

### Tom e Voz
- **Precisão** + **Confiança** + **Clareza** — a tríade central do sistema de linguagem.
- O produto fala *com* o usuário, não *para* ele. Evita jargão técnico imobiliário sem explicação.
- Tagline: *"Precisão que se vê, confiança que se sente."*
- Na **área pública**: tom acolhedor, próximo, direto. Ex: "Descubra o valor do seu imóvel agora."
- No **admin**: conciso, técnico, sem floreios. Labels curtos, dados em destaque.

### Casing
- Títulos de seção: **CAIXA ALTA** quando em `Big Shoulders Display` (ex: AVALIAÇÃO, MERIDIANO)
- Headings de conteúdo: **Title Case** em Work Sans (ex: "Custo Unitário Básico por Tipo de Projeto")
- Labels de formulário: Sentence case (ex: "Nome do proprietário")
- Botões: Sentence case (ex: "Salvar configuração", "Ver detalhes")
- Badges e status: MAIÚSCULAS CURTAS (ex: ATIVO, INATIVO, EM ANÁLISE)

### Pronomes e Pessoa Gramatical
- Área pública: **2ª pessoa do singular** ("Qual o endereço do seu imóvel?")
- Admin: **Neutro / impessoal** (ex: "Registro salvo com sucesso", "Campo obrigatório")

### Emoji
- **Não utilizados** na interface. O sistema é profissional e baseado em dados.

### Números e Dados
- Valores monetários: `R$ 2.847,35` — espaço após R$, ponto para milhar, vírgula para decimal.
- Percentuais: `2,70%` — DM Mono, amber ou navy.
- Códigos de tipo: `R-16`, `R-1` — DM Mono, sem espaço.

---

## VISUAL FOUNDATIONS

### Paleta de Cores
- **Navy #002445** — primária. Usado em fundos de hero, headers, texto principal escuro.
- **Amber #E87D2C** — destaque. CTAs, valores em destaque, teto do logo, acentos.
- **Safira #1A6B94** — secundária. Links, badges informativos, ícones de suporte.
- **Neutros** — escala de cinza-azulado (não cinza puro), de #0A1E2A a #F8FAFC.

### Tipografia
- `Big Shoulders Display Bold/Black` — display, hero, títulos de sistema. Sempre maiúsculas, tracking negativo.
- `Work Sans Bold/SemiBold` — headings de conteúdo, labels de tabela, sub-títulos.
- `Outfit Regular/Medium` — corpo de texto, descrições, labels de formulário.
- `DM Mono Regular` — dados numéricos, códigos CUB, valores monetários, porcentagens.

### Espaçamento
- Base **8px**. Escala: 4, 8, 12, 16, 20, 24, 32, 48, 64, 80, 96.
- Componentes internos usam múltiplos de 4; layout usa múltiplos de 8.

### Backgrounds
- Área pública: branco (#FFFFFF) com seções em navy (#002445) para contraste hero.
- Admin: superfície levemente off-white (#F0F3F8), cards em branco.
- Sem gradientes de marketing; sem padrões repetidos nem texturas.
- Header/nav: sempre navy-800 (#002445).

### Cards
- Borda: 1px `var(--neutral-300)`, sem sombra na maioria dos casos.
- Hover: `var(--shadow-sm)`, sem transformações de escala.
- Radius: `var(--radius-lg)` (8px) para cards de conteúdo; `var(--radius-md)` (6px) para itens de tabela.
- Sem colored left-border accent — esse padrão NÃO é usado.

### Animações
- Transições curtas: `150ms ease-out` para hover de botões e inputs.
- Toasts e modais: `200ms ease-out` entrada, `150ms ease-in` saída.
- Sem bounces ou springs; sem animações decorativas em loop.
- `prefers-reduced-motion` respeitado: todas as transições ficam instantâneas.

### Hover / Press
- Botões primários: fundo escurece (navy-700 → navy-800).
- Botões accent: fundo escurece (amber-600 → amber-700).
- Links: cor safira, sem sublinhado, underline no hover.
- Tabelas: linha recebe `background: var(--navy-50)` no hover.
- Press state: sem shrink/scale. Fundo mais escuro (navy-900 / amber-700).

### Bordas e Raios
- Inputs: `radius-md` (6px), borda 1.5px neutral-300, foco em navy-500.
- Botões: `radius-md` (6px) padrão; pill (`radius-full`) para badges.
- Tabelas: sem border-radius nas linhas; thead com fundo navy-800.

### Sombras
- Sistema de sombras com tom navy (não preto puro), opacidade baixa.
- Cards elevados: `shadow-md`. Dropdowns/modais: `shadow-xl`.
- Amber glow (`shadow-amber`) apenas em botões accent em foco.

### Iconografia
→ Ver seção ICONOGRAPHY abaixo.

### Imagery
- Sem fotografias no MVP.
- Ícones inline (Lucide via CDN) — stroke-weight 1.5–2px, tamanho base 16–20px.
- Logo usa formas geométricas planas (flat design), sem gradientes.

### Transparência e Blur
- Overlay de modal: `rgba(10,30,42,0.60)` — sem backdrop-filter blur no MVP.
- Tooltips: fundo navy-800, sem transparência.

---

## ICONOGRAPHY

- **Sistema:** [Lucide Icons](https://lucide.dev/) via CDN (`https://unpkg.com/lucide@latest`)
- **Estilo:** Outline, stroke-width 1.5–2px. Nunca filled.
- **Tamanhos:** 16px (inline/tabela), 20px (padrão), 24px (destaque/hero).
- **Cor:** herda do texto pai ou usa `var(--text-secondary)` para ícones decorativos.
- **Emoji:** não utilizados na interface.
- **Unicode:** não usados como ícones.

Ícones chave no produto:
- `home` — tipo residencial
- `building-2` — tipo comercial
- `map-pin` — endereço/localização
- `calculator` — avaliação/CUB
- `check-circle` — sucesso/salvo
- `alert-circle` — alerta/revisão
- `x-circle` — erro/inválido
- `info` — informação
- `edit` / `pencil` — edição inline
- `download` / `upload` — importar/exportar CSV
- `filter` — filtros de tabela
- `chevron-down` / `chevron-right` — dropdowns e navegação

---

## Índice de Arquivos

```
styles.css                    # Entrada global (só @imports)
tokens/
  fonts.css                   # @font-face e Google Fonts
  colors.css                  # Escalas navy, amber, safira, neutros, semânticas
  typography.css              # Famílias, tamanhos, pesos, leading
  spacing.css                 # Escala 4–128px, layout, z-index
  shadows.css                 # Sombras e focus rings
  borders.css                 # Bordas e raios
  semantic.css                # Aliases de alto nível (superfície, texto, interativo)
assets/
  logo-icon.svg               # Ícone casa standalone
  logo-stacked.svg            # Ícone + "AIG" empilhado
  logo-horizontal.svg         # Ícone + "AIG" + tagline horizontal
  logo-icon-amber-bg.svg      # Ícone em fundo amber
  logo-icon-fundo-amber.svg   # Variação fundo amber/navy
guidelines/
  *.card.html                 # Specimen cards de cores, tipo, espaçamento
components/
  core/                       # Button, IconButton
  forms/                      # Input, Select, Checkbox
  feedback/                   # Badge, Toast
ui_kits/
  public/index.html           # Área pública — formulário de avaliação
  admin/index.html            # Área admin — painel de gestão
readme.md                     # Este arquivo
SKILL.md                      # Instruções de agente
```

### Componentes
- `Button` — primário, secundário, ghost, accent; tamanhos sm/md/lg
- `IconButton` — botão com apenas ícone
- `Input` — campo de texto com label, helper text, estados de erro/sucesso
- `Select` — dropdown de seleção
- `Checkbox` — caixa de seleção
- `Badge` — tags de status (ativo, inativo, configurado, oficial, em revisão)
- `Toast` — notificação de confirmação/erro/info

### UI Kits
- **Área Pública** (`ui_kits/public/`) — formulário multi-step de avaliação
- **Admin** (`ui_kits/admin/`) — painel com tabelas CUB, edição inline, micro CRM
