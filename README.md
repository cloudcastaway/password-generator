# Password Generator

This repository contains a small web-based password generator that outputs two randomly generated passwords per action. The project focuses on UI structure, visual consistency, and basic interaction logic rather than production-grade security tooling.

---

## Project Overview

This is an individual practice project from the **Scrimba Full Stack Path**.  
As part of the course, a [Figma file](https://www.figma.com/design/NEj9JDycMjF3XKXq7swoc9/Random-Password-Generator--New-version-?node-id=0-1&t=qcjnhnh8hwwarZhX-1) was provided as a design reference to guide layout and flow.

The overall layout closely follows that reference, but the visual design was intentionally modified. Colors, spacing, component styling, and structural decisions were adjusted, and all HTML, CSS, and JavaScript were written manually from scratch.

The purpose of the project is to practice translating a design into code while maintaining clean separation between structure, style, and logic.

---

## Features

- Button-triggered password generation  
- Two passwords generated per action  
- Mixed character set (uppercase, lowercase, numbers, symbols)  
- User-defined password length (numeric input with enforced bounds)
- Input normalization and clamping (min/max enforced at runtime)
- Click-to-copy password functionality  
- Visual confirmation modal after copy  
- Dismissible modal (close button or click outside)  
- Visual feedback on interaction
- Minimal, dark-themed interface focused on readability  

---

## Project Structure

```
password-generator/
├── index.html
├── index.css
├── index.js
└── README.md
```

---

## Technologies Used

- HTML5  
- CSS3  
  - Flexbox  
- JavaScript (vanilla)  

---

## Planned Improvements

- Toggle controls for character types (uppercase, numbers, symbols)  
- Minor UI and spacing refinements  
