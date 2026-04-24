# DESIGN SYSTEM: Mugô

This document serves as the "Source of Truth" for the Mugô brand identity and digital design language. All future pages and components must adhere to these tokens to ensure visual consistency.

## Core Design Tokens

### 1. Color Palette
- **Brand Red**: `#b22234` (Primary action color, highlights, and active states).
- **Deep Blue**: `#004f6e` (Secondary color, cards, and footer background).
- **Gold/Mustard**: `#c79830` (CTA buttons, accent backgrounds).
- **Background Grey (Hero)**: `#E9E9E9` (Neutral grey for the Hero section and primary backdrop).
- **Off-White**: `#f5f5f5` (Standard background for cards and secondary sections).
- **Primary Text**: `#222` (Dark grey/black for high readability).
- **Secondary Text**: `#5b6770` (Muted grey for descriptions and nav links).

### 2. Typography
- **Primary Font**: `Urbanist` (Sans-serif).
- **Hierarchy**:
    - **Hero Headings**: `font-medium`, `text-[84px]`, `leading-[1.25]`.
    - **Subheadings**: `font-semibold`, `text-[32px]`, `leading-[1.5]`.
    - **Body Copy**: `font-normal`, `text-[20px]` or `text-[24px]`.
    - **Nav Links**: `text-[24px]`, `hover:text-[#b22234]`.

### 3. Layout Constraints
- **Content Constraint**: All primary content must be wrapped in a container with a `max-width: 1600px`.
- **Viewport Height**: Every main page section must have a `min-height: 100vh` to ensure a cinematic full-screen experience.
- **Section Centering**: Sections use `flex items-center justify-center` or similar centering logic to keep content balanced vertically.

### 4. Component Rules
- **CTA Buttons**: 
    - Shape: `rounded-[24px]`.
    - Padding: `px-[24px] py-[12px]`.
    - Hover: Transition from brand gold `#c79830` to brand red `#b22234`.
- **Cards**:
    - Radius: `rounded-[32px]`.
    - Effects: Subtle `shadow-lg`, hover transform `-translate-y-2`.
- **Navbar**: 
    - Height: `96px`.
    - Background: `bg-[#E9E9E9]/80` with `backdrop-blur-sm`.

### 5. Media Handling
- **Hero Video**: 1080p asset, centered, with a `radial-gradient` mask to blend edges into the section background.
- **Watermark Masking**: Any watermarks on legacy assets should be cropped via `overflow-hidden` containers and `scale` transforms if necessary.

---
*Created on: 2026-04-24*
