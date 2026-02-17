# Scherbenviertel Design System

## Übersicht

Dieses Projekt nutzt ein modernes CSS-basiertes Design-System mit:
- **CSS Custom Properties** für Theming
- **Container Queries** für responsive Components
- **4px Spacing Scale** für konsistente Abstände
- **Komponentenbasierte Architektur** mit Svelte 5

---

## Farben

### Primärfarben

```css
--blue: hsl(203, 100%, 27%)      /* Hauptfarbe für Hintergründe */
--yellow: hsl(52, 100%, 50%)     /* Akzent-Farbe für Titel, Links */
--teal: hsl(139, 38%, 78%)       /* Schatten und Highlights */
--purple: hsl(320, 80%, 28%)     /* Reserviert für zukünftige Nutzung */
--white: #dbdbdb                 /* Text-Farbe */
--black: #000                    /* Reserviert */
```

### Dynamische Varianten

```css
--base-color: var(--blue)
--base-color-darker              /* Dunklere Variante (-20 Helligkeit) */
--base-color-dark                /* Dunkle Variante (-10 Helligkeit) */
--base-color-light               /* Helle Variante (+20 Helligkeit) */
```

**Verwendung:**
```css
background: var(--base-color);
color: var(--yellow);
box-shadow: var(--shadow-teal);
```

---

## Spacing Scale (4px Base)

| Variable | Wert | Pixel | Verwendung |
|----------|------|-------|------------|
| `--space-3xs` | 0.25rem | 4px | Minimale Abstände |
| `--space-2xs` | 0.5rem | 8px | Kleine Gaps, Padding |
| `--space-xs` | 0.75rem | 12px | Kompakte Layouts |
| `--space-sm` | 1rem | 16px | Standard Padding |
| `--space-md` | 1.5rem | 24px | Medium Gaps |
| `--space-lg` | 2rem | 32px | Große Abstände |
| `--space-xl` | 3rem | 48px | Sehr große Abstände |
| `--space-2xl` | 4rem | 64px | Section Margins |
| `--space-3xl` | 6rem | 96px | Extra große Margins |

**Verwendung:**
```css
padding: var(--space-md);
gap: var(--space-lg);
margin-block: var(--space-xl);
```

---

## Typografie

### Font Family
- **Primär:** Arimo (Google Fonts, sans-serif)
- **Monospace:** System monospace (für Code/ISBN)

### Font Scale

| Variable | Wert | Pixel | Verwendung |
|----------|------|-------|------------|
| `--font-size-xs` | 0.75rem | 12px | Sehr kleine Texte |
| `--font-size-sm` | 0.875rem | 14px | Kleine Texte, Captions |
| `--font-size-base` | 1rem | 16px | Mobile Basis-Größe |
| `--font-size-md` | 1.125rem | 18px | Mittlere Texte |
| `--font-size-lg` | 1.5rem | 24px | Desktop Basis-Größe |
| `--font-size-xl` | 1.75rem | 28px | Große Überschriften |
| `--font-size-2xl` | 2rem | 32px | Extra große Überschriften |

### Utility-Klassen

```html
<p class="text-sm">Kleiner Text (14px)</p>
<p class="text-base">Basis Text (16px)</p>
<p class="text-lg">Großer Text (24px)</p>

<p class="text-center">Zentrierter Text</p>
<p class="text-yellow">Gelber Text</p>
<p class="text-mono">Monospace Text</p>
<p class="italic">Kursiver Text</p>
```

---

## Breakpoints

| Variable | Wert | Zielgerät |
|----------|------|-----------|
| `--breakpoint-sm` | 640px | Mobile |
| `--breakpoint-md` | 768px | Tablet |
| `--breakpoint-lg` | 1024px | Desktop |
| `--breakpoint-xl` | 1280px | Large Desktop |

**Verwendung mit Container Queries:**
```css
@container component-name (max-width: var(--breakpoint-sm)) {
    /* Mobile styles */
}

@container component-name (min-width: calc(var(--breakpoint-sm) + 1px)) {
    /* Desktop styles */
}
```

---

## Border Radius

| Variable | Wert | Verwendung |
|----------|------|------------|
| `--radius-sm` | 4px | Kleine Elemente |
| `--radius-md` | 8px | Standard Cards, Buttons |
| `--radius-lg` | 12px | Größere Komponenten |
| `--radius-xl` | 16px | Extra große Elemente |
| `--radius-full` | 9999px | Vollständig rund |

---

## Shadows

| Variable | Wert | Verwendung |
|----------|------|------------|
| `--shadow-sm` | `0 1px 2px rgba(0,0,0,0.05)` | Subtile Schatten |
| `--shadow-md` | `0 4px 6px rgba(0,0,0,0.1)` | Medium Schatten |
| `--shadow-lg` | `0 10px 15px rgba(0,0,0,0.1)` | Große Schatten |
| `--shadow-teal` | `-1px 1px 10px var(--teal)` | Teal Glow Effekt |

---

## Transitions

| Variable | Wert | Verwendung |
|----------|------|------------|
| `--transition-fast` | `150ms ease` | Schnelle Interaktionen |
| `--transition-base` | `250ms ease` | Standard Transitions |
| `--transition-slow` | `350ms ease` | Langsame, auffällige Transitions |

**Verwendung:**
```css
transition: color var(--transition-base);
transition: transform var(--transition-slow);
```

---

## Komponenten

### Card
Inhalts-Container mit Shadow und Slots.

```svelte
<Card>
  <div slot="header">Titel</div>
  <div slot="body">Inhalt</div>
</Card>
```

### CardContainer
Wrapper für mehrere Cards mit konfigurierbarem Spacing.

```svelte
<CardContainer gap="lg" marginBlock="xl">
  <Card>...</Card>
  <Card>...</Card>
</CardContainer>
```

**Props:**
- `gap`: `'sm' | 'md' | 'lg' | 'xl'` (Standard: `'lg'`)
- `marginBlock`: `'sm' | 'md' | 'lg' | 'xl'` (Standard: `'xl'`)

### TwoCols
Zwei-Spalten Layout mit Sticky Sidebar.

```svelte
<TwoCols id="page-id" title="Titel" fullHeight={false}>
  {#snippet first()}
    <!-- Linke Spalte (Bild) -->
  {/snippet}
  {#snippet second()}
    <!-- Rechte Spalte (Content) -->
  {/snippet}
</TwoCols>
```

**Props:**
- `fullHeight`: Boolean - Setzt Höhe auf `calc(100dvh - var(--header-height))`
- `breakout`: Boolean - Breakout Layout aktivieren

### Details
Accordion-Element mit Animation.

```svelte
<Details open={false}>
  {#snippet summary()}
    <summary>Titel</summary>
  {/snippet}
  {#snippet content()}
    <section>Inhalt</section>
  {/snippet}
</Details>
```

### ImageSwitcher
Automatischer Bildwechsel-Karussell.

```svelte
<ImageSwitcher images={[img1, img2, img3]} />
```

---

## Layout Utilities

### Flexbox

```html
<div class="flex flex-col items-center justify-center gap-lg">
  <!-- Content -->
</div>
```

**Verfügbare Klassen:**
- `.flex` - `display: flex`
- `.flex-col` - `flex-direction: column`
- `.items-center` - `align-items: center`
- `.justify-center` - `justify-content: center`
- `.gap-sm`, `.gap-md`, `.gap-lg` - Gap mit Spacing Scale

---

## Migration Guide

### Von hardcodierten Werten zu Variablen

**Vorher:**
```css
padding: 1rem;
gap: 2rem;
margin-block: 3em;
transition: color 0.3s;
box-shadow: 6px 3px 12px var(--teal);
```

**Nachher:**
```css
padding: var(--space-sm);
gap: var(--space-lg);
margin-block: var(--space-xl);
transition: color var(--transition-base);
box-shadow: var(--shadow-teal);
```

### Von Media Queries zu Container Queries

**Vorher:**
```css
@media (max-width: 640px) {
    .component { padding: 1rem; }
}
```

**Nachher:**
```css
.container {
    container-name: component;
    container-type: inline-size;
}

@container component (max-width: var(--breakpoint-sm)) {
    .component { padding: var(--space-sm); }
}
```

---

## Best Practices

### ✅ Do

- Nutze CSS-Variablen für alle Spacing-Werte
- Verwende Container Queries für responsive Komponenten
- Nutze die Spacing Scale (4px Base)
- Verwende Utility-Klassen für Text-Styling
- Nutze Transitions-Variablen für Animationen

### ❌ Don't

- Keine Magic Numbers (hartcodierte Pixel-Werte)
- Kein `!important` (außer absolut notwendig)
- Keine Media Queries (nutze Container Queries)
- Keine inkonsistenten Breakpoint-Werte
- Keine duplizierte CSS-Logik in Komponenten

---

## Browser Support

**Moderne Features:**
- Container Queries (Safari 16+, Chrome 105+)
- `color-mix()` (Safari 16.2+, Chrome 111+)
- `interpolate-size` (Experimental)

**Fallbacks:**
Für ältere Browser könnten Fallbacks erforderlich sein:

```css
@supports not (container-type: inline-size) {
    /* Media Query Fallback */
    @media (max-width: 640px) {
        /* ... */
    }
}
```

---

## Beispiele

### Einfache Card mit Spacing

```svelte
<script>
  import Card from '@components/Card.svelte';
</script>

<Card>
  <div slot="header">
    <span>Titel</span>
  </div>
  <div slot="body">
    <p>Content mit automatischem Spacing durch Design-System.</p>
  </div>
</Card>
```

### CardContainer mit mehreren Cards

```svelte
<script>
  import CardContainer from '@components/CardContainer.svelte';
  import Card from '@components/Card.svelte';
</script>

<CardContainer gap="lg" marginBlock="xl">
  <Card>
    <div slot="header">Card 1</div>
    <div slot="body">Inhalt 1</div>
  </Card>
  <Card>
    <div slot="header">Card 2</div>
    <div slot="body">Inhalt 2</div>
  </Card>
</CardContainer>
```

### Custom Component mit Design System

```svelte
<div class="custom-component">
  <h2 class="text-lg text-yellow">Überschrift</h2>
  <p class="text-base">Text content</p>
</div>

<style>
  .custom-component {
    padding: var(--space-md);
    gap: var(--space-sm);
    border-radius: var(--radius-md);
    box-shadow: var(--shadow-md);
    transition: box-shadow var(--transition-base);
  }
  
  .custom-component:hover {
    box-shadow: var(--shadow-lg);
  }
</style>
```

---

## Weitere Informationen

- Alle CSS-Variablen sind in `src/app.css` definiert
- Komponenten befinden sich in `src/components/`
- Pages nutzen das Design-System konsistent

Bei Fragen oder Erweiterungen des Design-Systems, bitte `src/app.css` und diese Dokumentation aktualisieren.
