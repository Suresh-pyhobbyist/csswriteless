# csswriteless

csswriteless.
Stop bloating your code. Use csswriteless to write minimal shorthand that expands into full CSS. Enjoy clean, readable styles while writing way less code.

**Note: Visit my GitHub page for more information.**

## This is How csswriteless Works!

```
input.css
.example_1 {
  tp: 10px;
  bttm: 20px;
}
```
---
```
output.css
.example_1 {
  top: 10px;
  bottom: 20px;
}
```

**Note: Visit my GitHub page for more information.**

## Features ✨

- **Conversion:**  
  Converts `wd` ➜ `width`, `ht` ➜ `height`, etc. 🚀
- **Auto-Fix:**  
  Corrects typos like `border-righeight` ➜ `border-right-width`. 👍
- **Validation:**  
  Checks for balanced braces and flags unknown properties. ✅
- **Formatting:**  
  Minifies or prettifies your CSS output. 🔧
- **Batch Processing:**  
  Works on individual files or whole directories. 📁
- **Watch Mode:**  
  Reprocesses files on change. 👀
- **Git Hook:**  
  Sets up a sample pre-commit hook. 🔨



## 📦 Installation
Install globally using npm:
```bash
npm install -g csswriteless
```

---

## 🛠️ Usage

### Basic Command
```bash
csswriteless -i input.css -o output.css --fix
```

| Option                        | Alias  | Description                                                                  | Default       |
|-------------------------------|--------|------------------------------------------------------------------------------|---------------|
| `--input <inputFile>`         | `-i`   | Path to the input CSS file                                                   |               |
| `--directory <directoryPath>` | `-d`   | Process a directory of CSS/HTML/JSX/Vue files for batch conversion             |               |
| `--output <outputFile>`       | `-o`   | Output file path (if omitted, prints to stdout)                              |               |
| `--watch`                     | `-w`   | Watch file or directory changes and auto-convert                             |               |
| `--config <configFile>`       | `-c`   | Custom configuration file path                                               | `config.json` |
| `--verbose`                   | `-v`   | Enable verbose logging                                                       |               |
| `--minify`                    |        | Minify the output CSS                                                        |               |
| `--pretty`                    |        | Prettify (beautify) the output CSS                                           |               |
| `--format <format>`           |        | Output format: `css`, `json`, `scss`, or `less`                               | `css`         |
| `--fix`                       |        | Auto-fix common CSS mistakes (linting and corrections)                       |               |
| `--git-hook`                  |        | Set up a sample Git pre-commit hook for CSS conversion automation              |               |


**Note: Visit my GitHub page for more information.**

**CSS Shorthand Quick Learn Sheets / for more info - see my github repo**

**Sheet 1: Core Box & Text**

| Category           | Common Shorthand/Prefix | Examples                                     |
|--------------------|-------------------------|----------------------------------------------|
| Box Model          | `mgn`                   | `margin`, `margin-top`, `margin-left`        |
| Box Model          | `pdng`                  | `padding`, `padding-bottom`, `padding-right` |
| Box Model          | `brd`                   | `border`, `border-radius`, `border-top`      |
| Box Model          | `wd`                    | `width`, `min-width`, `max-width`           |
| Box Model          | `ht`                    | `height`, `min-height`, `max-height`         |
| Text               | `fnt`                   | `font`, `font-size`, `font-family`           |
| Text               | `txt-`                  | `text-align`, `text-decoration`, `text-shadow` |

**Sheet 2: Background & Effects**

| Category           | Common Shorthand/Prefix | Examples                                            |
|--------------------|-------------------------|-----------------------------------------------------|
| Background         | `bg-`                   | `background-color`, `background-image`, `background-size` |
| Animation          | `anim-`                 | `animation-delay`, `animation-duration`, `animation-name` |
| Transition         | `trnstn-`               | `transition-property`, `transition-duration`, `transition-delay` |

**Sheet 3: Flex & Grid Layout**

| Category           | Common Shorthand/Prefix | Examples                                          |
|--------------------|-------------------------|---------------------------------------------------|
| Flexbox            | `aln-`                  | `align-items`, `align-content`, `align-self`      |
| Flexbox            | `jstf-`                 | `justify-content`, `justify-items`, `justify-self` |
| Flexbox            | `flx-`                  | `flex-direction`, `flex-wrap`, `flex-basis`       |
| Grid               | `grd-`                  | `grid-column`, `grid-template-areas`, `grid-gap`  |
| Layout (General)   | `gp`                    | `gap`, `column-gap`, `row-gap`                    |

**Sheet 4: Lists, Outlines, Transforms, Perspective**

| Category           | Common Shorthand/Prefix | Examples                                         |
|--------------------|-------------------------|--------------------------------------------------|
| Lists              | `lst-stl-`              | `list-style-type`, `list-style-position`, `list-style-image` |
| Outline            | `otl-`                  | `outline-color`, `outline-style`, `outline-width` |
| Transform          | `trnsfrm-`              | `transform-origin`, `transform-style`, `transform` |
| Perspective        | `prspctv-`              | `perspective`, `perspective-origin`              |

**Sheet 5: Scroll, Overflow, Mask, Clip**

| Category           | Common Shorthand/Prefix | Examples                                            |
|--------------------|-------------------------|-----------------------------------------------------|
| Scroll             | `scrl-`                 | `scroll-behavior`, `scroll-margin`, `scroll-padding` |
| Scroll             | `ovrlscrl-`             | `overscroll-behavior`, `overscroll-behavior-x`      |
| Overflow           | `ovflw-`                | `overflow-x`, `overflow-y`, `overflow-wrap`         |
| Mask               | `msk-`                  | `mask-image`, `mask-border`, `mask-position`        |
| Clip               | `clp-`                  | `clip-path`, `clip`                               |

**Sheet 6: Common & WebKit**

| Category        | Common Shorthand/Prefix | Examples                      |
|-----------------|-------------------------|-------------------------------|
| Common          | `clr`                   | `color`, `clear`              |
| Common          | `dir`                   | `direction`                   |
| Common          | `dsp`                   | `display`                     |
| Common          | `flt`                   | `float`                       |
| Common          | `ps`                    | `position`                    |
| Common          | `tp`                    | `top`                         |
| Common          | `bttm`                  | `bottom`                      |
| Common          | `lft`                   | `left`                        |
| Common          | `rght`                  | `right`                       |
| Vendor Prefix   | `wkt-`                  | `-webkit-animation`, `-webkit-box-shadow` |


## License 📄
**MIT**

## copyright
```
 csswriteless
 Copyright (c) 2025 csswriteless.
 ```

