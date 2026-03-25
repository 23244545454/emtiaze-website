# Color & Design Reference Guide

## Complete Color Palette

### Primary Colors
| Color | Hex | RGB | Usage |
|-------|-----|-----|-------|
| Premium Orange | `#ff7a3d` | rgb(255, 122, 61) | Main brand color, buttons, headings |
| Orange Hover | `#ff6b2b` | rgb(255, 107, 43) | Hover states, depth |
| Golden Accent | `#ffb347` | rgb(255, 179, 71) | Highlights, accents, premium feel |
| Gold Hover | `#ff9f2a` | rgb(255, 159, 42) | Interactive states |
| Light Highlight | `#ffc368` | rgb(255, 195, 104) | Bright accents, emphasis |
| Dark Petroleum | `#cc5200` | rgb(204, 82, 0) | Deep shadows, dark accents |

### Text Colors
| Color | Hex | RGB | Usage |
|-------|-----|-----|-------|
| Dark Primary | `#0f1419` | rgb(15, 20, 25) | Body text, main content |
| Dark Secondary | `#4a5568` | rgb(74, 85, 104) | Secondary text, descriptions |
| Light Gray | `#8a92a3` | rgb(138, 146, 163) | Muted text, captions |

### Background Colors
| Color | Hex | RGB | Usage |
|-------|-----|-----|-------|
| Light Primary | `#f7f8fa` | rgb(247, 248, 250) | Primary background |
| Light Secondary | `#eff0f3` | rgb(239, 240, 243) | Secondary sections |
| Cool Gray Mix | `#e8ebf0` | rgb(232, 235, 240) | Gradient accents |
| Slate Gray | `#dfe3ec` | rgb(223, 227, 236) | Deep background areas |
| White Surface | `#ffffff` | rgb(255, 255, 255) | Cards, surfaces |
| Off-White | `#f9fafb` | rgb(249, 250, 251) | Subtle surfaces |

### Dark Mode Colors
| Color | Hex | Purpose |
|-------|-----|---------|
| `#1a1a1a` | Dark surface primary |
| `#0f0f0f` | Dark background |
| `#2a2a2a` | Dark card background |
| `#ffb366` | Light mode orange in dark theme |
| `#ffa040` | Light mode hover in dark theme |

---

## Gradient Combinations

### Primary Gradient (Hero Title, Counters)
```css
linear-gradient(135deg, #ff7a3d 0%, #ff9500 50%, #ffb347 100%)
```
**Usage**: Hero title, stat counters, major headings
**Effect**: Premium, energetic, industry-forward

### Secondary Gradient (Accents)
```css
linear-gradient(90deg, #ff7a3d, #ffb347)
```
**Usage**: Section dividers, underlines, borders
**Effect**: Clean, modern, consistent

### Background Gradient (Sections)
```css
linear-gradient(135deg, #f7f8fa 0%, #e8ebf0 100%)
```
**Usage**: Section backgrounds
**Effect**: Professional, cool-toned, industrial

---

## Button Styles

### CTA Button (Primary)
- **Background**: `linear-gradient(135deg, #ff7a3d, #ff6b2b)`
- **Hover**: `linear-gradient(135deg, #ff9500, #ff7a3d)`
- **Text Color**: `#ffffff`
- **Padding**: `18px 50px`
- **Border Radius**: `50px`
- **Shadow**: `0 12px 35px rgba(255, 122, 61, 0.35)`
- **Hover Shadow**: `0 18px 50px rgba(255, 122, 61, 0.45)`

### Read More Button (Secondary)
- **Background**: Transparent
- **Border**: `2px solid #ff7a3d`
- **Text Color**: `#ff7a3d`
- **Hover BG**: `#ff7a3d`
- **Hover Text**: `#ffffff`

---

## Shadow System

### Subtle Shadow
```css
0 2px 4px rgba(0, 0, 0, 0.05)
```
For small elements and text

### Small Shadow
```css
0 4px 12px rgba(0, 0, 0, 0.08)
```
For cards and regular components

### Medium Shadow (Hover)
```css
0 12px 42px rgba(0, 0, 0, 0.08)
```
For default cards

### Large Shadow (Hover)
```css
0 25px 65px rgba(255, 122, 61, 0.25)
```
For interactive states - branded orange tint

### Premium Shadow
```css
0 30px 70px rgba(255, 122, 61, 0.25)
```
For maximum elevation

---

## Typography Sizes

### Section Headings
- **Responsive**: `clamp(2rem, 5vw, 3rem)`
- **Font Weight**: `800`
- **Letter Spacing**: `-0.5px`

### Hero Title
- **Responsive**: `clamp(2.8rem, 7vw, 5rem)`
- **Font Weight**: `900`
- **Letter Spacing**: `-1.5px`
- **Style**: Gradient text

### Feature/Service Titles
- **Size**: `1.4-1.45rem`
- **Font Weight**: `700`
- **Style**: Gradient text

### Body Text
- **Size**: `1rem` to `1.1rem`
- **Line Height**: `1.6` to `1.7`
- **Letter Spacing**: `0.3px` to `0.5px`

---

## Border Styling

### Light Mode
- **Weight**: `1px`
- **Color**: `rgba(255, 107, 53, 0.12)`
- **Hover**: `rgba(255, 122, 61, 0.35)`

### Dark Mode
- **Weight**: `1px`
- **Color**: `rgba(255, 107, 53, 0.2)`
- **Hover**: `rgba(255, 122, 61, 0.4)`

---

## Border Radius Scale

- **Tiny**: `0.375rem` (6px)
- **Small**: `0.5rem` (8px)
- **Medium**: `0.75rem` (12px)
- **Large**: `1rem` (16px)
- **Extra Large**: `1.5rem` (24px)
- **Pill Button**: `50px`

---

## Spacing System

- **XS**: `0.25rem` (4px)
- **SM**: `0.5rem` (8px)
- **MD**: `1rem` (16px)
- **LG**: `1.5rem` (24px)
- **XL**: `2rem` (32px)
- **2XL**: `3rem` (48px)

---

## Animation Timings

- **Fast**: `150ms ease-in-out`
- **Normal**: `300ms ease-in-out`
- **Slow**: `500ms ease-in-out`

---

## Component Color Map

### Cards
- **Background**: `#ffffff` (light) / `#2a2a2a` (dark)
- **Border**: Primary orange with low opacity
- **Shadow**: Neutral black
- **Hover Shadow**: Premium orange tint

### Buttons
- **CTA**: Primary orange gradient
- **Secondary**: Transparent with orange border
- **Hover**: Orange background with white text

### Icons
- **Color**: Primary orange gradient
- **Hover**: Scale up with animation
- **Size**: `3rem` to `3.8rem`

### Badges
- **Background**: Secondary color (`#ffb347`)
- **Text**: Dark primary (`#0f1419`)
- **Opacity**: 100% or 90%

---

## Dark Mode Adjustments

When `[data-theme="dark"]` is applied:
- All backgrounds shift to dark grays/blacks
- All text colors lighten
- Border colors increase opacity for visibility
- Shadows become more pronounced
- Gradients may be reversed for better contrast

---

## Usage Examples

### Logo/Brand Areas
Use primary orange: `#ff7a3d`

### Call-to-Actions
Use premium gradient with rounded corners

### Section Headers
Use gradient text with orange accents

### Icons
Use orange gradient matching headers

### Backgrounds
Use cool gray gradients for sections

---

**Design System Version**: 2.0
**Theme**: Diesel Industry Premium
**Last Updated**: March 5, 2026
