![Group 12](https://github.com/user-attachments/assets/169d4754-aff7-40e4-89d1-b06c35b2914c)


csswriteless.
Stop bloating your code. Use csswriteless to write minimal shorthand that expands into full CSS. Enjoy clean, readable styles while writing way less code.

**Note: Visit my GitHub page for more information.**


## Demo

https://github.com/user-attachments/assets/5580a545-2586-41fc-851d-55941b3b57af

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

```markdown
| CSS Property                     | Abbreviation       |
|----------------------------------|--------------------|
| align-content                    | aln-ctnt           |
| align-items                      | aln-itms           |
| align-self                       | aln-slf            |
| animation                        | anim               |
| animation-delay                  | anim-dly           |
| animation-direction              | anim-dir           |
| animation-duration               | anim-dur           |
| animation-fill-mode              | anim-flm           |
| animation-iteration-count        | anim-icnt          |
| animation-name                   | anim-nm            |
| animation-play-state             | anim-ps            |
| animation-timing-function        | anim-tmf           |
| backface-visibility              | bckf-vis           |
| background                       | bg                 |
| background-attachment            | bg-atch            |
| background-blend-mode            | bg-blend           |
| background-clip                  | bg-clip            |
| background-color                 | bg-clr             |
| background-image                 | bg-img             |
| background-origin                | bg-org             |
| background-position              | bg-pos             |
| background-repeat                | bg-rpt             |
| background-size                  | bg-sz              |
| border                           | brd                |
| border-bottom                    | brd-btm            |
| border-bottom-color              | brd-btm-clr        |
| border-bottom-left-radius        | brd-btm-lft-rds    |
| border-bottom-right-radius       | brd-btm-rgt-rds    |
| border-bottom-style              | brd-btm-sty        |
| border-bottom-width              | brd-btm-wd         |
| border-collapse                  | brd-clps           |
| border-color                     | brd-clr            |
| border-image                     | brd-img            |
| border-image-outset              | brd-img-outst      |
| border-image-repeat              | brd-img-rpt        |
| border-image-slice               | brd-img-slc        |
| border-image-source              | brd-img-src        |
| border-image-width               | brd-img-wd         |
| border-left                      | brd-lft            |
| border-left-color                | brd-lft-clr        |
| border-left-style                | brd-lft-sty        |
| border-left-width                | brd-lft-wd         |
| border-radius                    | brd-rds            |
| border-right                     | brd-rgt            |
| border-right-color               | brd-rgt-clr        |
| border-right-style               | brd-rgt-sty        |
| border-right-width               | brd-rgt-wd         |
| border-spacing                   | brd-spc            |
| border-style                     | brd-sty            |
| border-top                       | brd-top            |
| border-top-color                 | brd-top-clr        |
| border-top-left-radius           | brd-top-lft-rds    |
| border-top-right-radius          | brd-top-rgt-rds    |
| border-top-style                 | brd-top-sty        |
| border-top-width                 | brd-top-wd         |
| border-width                     | brd-wd             |
| bottom                           | bttm               |
| box-decoration-break             | bx-dcr-brk         |
| box-shadow                       | bx-shd             |
| box-sizing                       | bx-sz              |
| caption-side                     | cptn-sd            |
| clear                            | clr                |
| clip                             | clp                |
| color                            | clr                |
| column-count                     | col-cnt            |
| column-fill                      | col-fl             |
| column-gap                       | col-gp             |
| column-rule                      | col-rl             |
| column-rule-color                | col-rl-clr         |
| column-rule-style                | col-rl-sty         |
| column-rule-width                | col-rl-wd          |
| column-span                      | col-spn            |
| column-width                     | col-wd             |
| columns                          | cols               |
| content                          | cntnt              |
| counter-increment                | ctr-incr           |
| counter-reset                    | ctr-rst            |
| cursor                           | crsr               |
| direction                        | dir                |
| display                          | dsp                |
| empty-cells                      | empty-c            |
| filter                           | fltr               |
| flex                             | flx                |
| flex-basis                       | flx-bs             |
| flex-direction                   | flx-dir            |
| flex-flow                        | flx-flw            |
| flex-grow                        | flx-grw            |
| flex-shrink                      | flx-shrk           |
| flex-wrap                        | flx-wrp            |
| float                            | flt                |
| font                             | fnt                |
| font-family                      | fnt-fmly           |
| font-size                        | fnt-sz             |
| font-size-adjust                 | fnt-sz-adj         |
| font-stretch                     | fnt-strtch         |
| font-style                       | fnt-stl            |
| font-variant                     | fnt-vrnt           |
| font-weight                      | fnt-wgt            |
| gap                              | gp                 |
| grid                             | grd                |
| grid-area                        | grd-ara            |
| grid-auto-columns                | grd-auto-c         |
| grid-auto-flow                   | grd-auto-flw       |
| grid-auto-rows                   | grd-auto-r         |
| grid-column                      | grd-col            |
| grid-column-end                  | grd-col-end        |
| grid-column-gap                  | grd-col-gp         |
| grid-column-start                | grd-col-st         |
| grid-gap                         | grd-gp             |
| grid-row                         | grd-row            |
| grid-row-end                     | grd-row-end        |
| grid-row-gap                     | grd-row-gp         |
| grid-row-start                   | grd-row-st         |
| grid-template                    | grd-tmplt          |
| grid-template-areas              | grd-tmplt-aras     |
| grid-template-columns            | grd-tmplt-cols     |
| grid-template-rows               | grd-tmplt-rows     |
| height                           | ht                 |
| hyphens                          | hypns              |
| justify-content                  | jstf-ctnt          |
| left                             | lft                |
| letter-spacing                   | ltr-spc            |
| line-height                      | ln-ht              |
| list-style                       | lst-stl            |
| list-style-image                 | lst-stl-img        |
| list-style-position              | lst-stl-ps         |
| list-style-type                  | lst-stl-ty         |
| margin                           | mgn                |
| margin-bottom                    | mgn-btm            |
| margin-left                      | mgn-lft            |
| margin-right                     | mgn-rgt            |
| margin-top                       | mgn-top            |
| max-height                       | max-ht             |
| max-width                        | max-wd             |
| min-height                       | min-ht             |
| min-width                        | min-wd             |
| object-fit                       | obj-ft             |
| object-position                  | obj-ps             |
| opacity                          | opcty              |
| order                            | ordr               |
| orphans                          | orphns             |
| outline                          | otl                |
| outline-color                    | otl-clr            |
| outline-offset                   | otl-offst          |
| outline-style                    | otl-stl            |
| outline-width                    | otl-wd             |
| overflow                         | ovflw              |
| overflow-wrap                    | ovflw-wrp          |
| overflow-x                       | ovflw-x            |
| overflow-y                       | ovflw-y            |
| padding                          | pdng               |
| padding-bottom                   | pdng-btm           |
| padding-left                     | pdng-lft           |
| padding-right                    | pdng-rgt           |
| padding-top                      | pdng-top           |
| page-break-after                 | pg-brk-aftr        |
| page-break-before                | pg-brk-bfr         |
| page-break-inside                | pg-brk-insd        |
| perspective                      | prspctv            |
| perspective-origin               | prspctv-org        |
| position                         | ps                 |
| quotes                           | qts                |
| resize                           | rsz                |
| right                            | rght               |
| row-gap                          | row-gp             |
| scroll-behavior                  | scrl-bhv           |
| table-layout                     | tbl-lyot           |
| text-align                       | txt-aln            |
| text-align-last                  | txt-aln-lst        |
| text-decoration                  | txt-dcr            |
| text-decoration-color            | txt-dcr-clr        |
| text-decoration-line             | txt-dcr-lne        |
| text-decoration-style            | txt-dcr-stl        |
| text-indent                      | txt-indnt          |
| text-justify                     | txt-jstfy          |
| text-overflow                    | txt-ovflw          |
| text-shadow                      | txt-shd            |
| text-transform                   | txt-trnsf          |
| top                              | tp                 |
| transform                        | trnsfrm            |
| transform-origin                 | trnsfrm-org        |
| transform-style                  | trnsfrm-stl        |
| transition                       | trnstn             |
| transition-delay                 | trnstn-dly         |
| transition-duration              | trnstn-dur         |
| transition-property              | trnstn-prpty       |
| transition-timing-function       | trnstn-tmf         |
| unicode-bidi                     | uncd-bdi           |
| user-select                      | usr-slt            |
| vertical-align                   | vrtl-aln           |
| visibility                       | vsblty             |
| white-space                      | wht-spc            |
| widows                           | wdws               |
| width                            | wd                 |
| word-break                       | wrd-brk            |
| word-spacing                     | wrd-spc            |
| word-wrap                        | wrd-wrp            |
| writing-mode                     | wrt-mode           |
| z-index                          | zind               |
```
---

### Vendor Prefixes – WebKit

```
| CSS Property                         | Abbreviation        |
|--------------------------------------|---------------------|
| -webkit-animation                    | wkt-anim            |
| -webkit-animation-delay              | wkt-anim-dly        |
| -webkit-animation-direction          | wkt-anim-dir        |
| -webkit-animation-duration           | wkt-anim-dur        |
| -webkit-animation-fill-mode          | wkt-anim-flm        |
| -webkit-animation-iteration-count    | wkt-anim-icnt       |
| -webkit-animation-name               | wkt-anim-nm         |
| -webkit-animation-play-state         | wkt-anim-ps         |
| -webkit-animation-timing-function    | wkt-anim-tmf        |
| -webkit-appearance                   | wkt-apprnc          |
| -webkit-backface-visibility          | wkt-bckf-vis        |
| -webkit-background-clip              | wkt-bg-clip         |
| -webkit-background-origin            | wkt-bg-org          |
| -webkit-background-size              | wkt-bg-sz           |
| -webkit-border-bottom-left-radius    | wkt-brd-btm-lft-rds |
| -webkit-border-bottom-right-radius   | wkt-brd-btm-rgt-rds |
| -webkit-border-image                 | wkt-brd-img         |
| -webkit-border-radius                | wkt-brd-rds         |
| -webkit-border-top-left-radius       | wkt-brd-top-lft-rds |
| -webkit-border-top-right-radius      | wkt-brd-top-rgt-rds |
| -webkit-box-shadow                   | wkt-bx-shd          |
| -webkit-box-sizing                   | wkt-bx-sz           |
| -webkit-filter                      | wkt-fltr            |
| -webkit-flex                         | wkt-flx             |
| -webkit-flex-basis                   | wkt-flx-bs          |
| -webkit-flex-direction               | wkt-flx-dir         |
| -webkit-flex-flow                    | wkt-flx-flw         |
| -webkit-flex-grow                    | wkt-flx-grw         |
| -webkit-flex-shrink                  | wkt-flx-shrk        |
| -webkit-flex-wrap                    | wkt-flx-wrp         |
| -webkit-justify-content             | wkt-jstf-ctnt       |
| -webkit-perspective                 | wkt-prspctv         |
| -webkit-perspective-origin          | wkt-prspctv-org     |
| -webkit-transform                   | wkt-trnsfrm         |
| -webkit-transform-origin            | wkt-trnsfrm-org     |
| -webkit-transform-style             | wkt-trnsfrm-stl     |
| -webkit-transition                  | wkt-trnstn          |
| -webkit-transition-delay            | wkt-trnstn-dly      |
| -webkit-transition-duration         | wkt-trnstn-dur      |
| -webkit-transition-property         | wkt-trnstn-prpty    |
| -webkit-transition-timing-function  | wkt-trnstn-tmf      |
```

```
| CSS Property                      | Abbreviation      |
|-----------------------------------|-------------------|
| accent-color                      | acnt-clr          |
| appearance                        | apprnc            |
| backdrop-filter                   | bkd-fltr          |
| block-size                        | blk-sz            |
| clip-path                         | clp-ps            |
| color-adjust                      | clr-adj           |
| contain                           | cntn              |
| content-visibility                | cntnt-vis         |
| counter-set                       | ctr-set           |
| inset                             | ins               |
| inset-block                       | ins-blk           |
| inset-inline                      | ins-inn           |
| justify-items                     | jstf-itms         |
| justify-self                      | jstf-slf          |
| mask                              | msk               |
| mask-border                       | msk-brd           |
| mask-border-mode                  | msk-brd-md        |
| mask-border-outset                | msk-brd-out       |
| mask-border-repeat                | msk-brd-rpt       |
| mask-border-slice                 | msk-brd-slc       |
| mask-border-source                | msk-brd-src       |
| mask-border-width                 | msk-brd-wd        |
| mask-clip                         | msk-clp           |
| mask-composite                    | msk-cmpst         |
| mask-image                        | msk-img           |
| mask-mode                         | msk-md            |
| mask-position                     | msk-ps            |
| mask-size                         | msk-sz            |
| max-block-size                    | max-blk-sz        |
| max-inline-size                   | max-inn-sz        |
| min-block-size                    | min-blk-sz        |
| min-inline-size                   | min-inn-sz        |
| overflow-anchor                   | ovflw-anch        |
| overscroll-behavior               | ovrlscrl-bhv      |
| overscroll-behavior-x             | ovrlscrl-x        |
| overscroll-behavior-y             | ovrlscrl-y        |
| scroll-margin                     | scrl-mgn          |
| scroll-margin-block               | scrl-mgn-blk      |
| scroll-margin-block-end           | scrl-mgn-blk-end  |
| scroll-margin-block-start         | scrl-mgn-blk-st   |
| scroll-margin-inline              | scrl-mgn-inn      |
| scroll-margin-inline-end          | scrl-mgn-inn-end  |
| scroll-margin-inline-start        | scrl-mgn-inn-st   |
| scroll-padding                    | scrl-pdng         |
| scroll-padding-block              | scrl-pdng-blk     |
| scroll-padding-block-end          | scrl-pdng-blk-end |
| scroll-padding-block-start        | scrl-pdng-blk-st  |
| scroll-padding-inline             | scrl-pdng-inn     |
| scroll-padding-inline-end         | scrl-pdng-inn-end |
| scroll-padding-inline-start       | scrl-pdng-inn-st  |
| scroll-snap-align                 | scrl-snp-aly      |
| scroll-snap-stop                  | scrl-snp-stp      |
| scroll-snap-type                  | scrl-snp-typ      |
```

## License 📄
**MIT**

## copyright
```
 csswriteless
 Copyright (c) 2025 csswriteless.
 ```

