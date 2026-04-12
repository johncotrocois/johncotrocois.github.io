## Stand Up Against Bullying

A GitHub Pages site showcasing the short film *Stand Up Against Bullying* — a JFL Shorts competition submission.

### Pages / Sections

- **Hero** — title
- **Video** — unlisted YouTube clip (placeholder: John's "Work From Home" `https://www.youtube.com/watch?v=HY85QkSQX1k`, final edit pending from editor)
- **Synopsis**
- **Film Stills Carousel** — screenshots from `carousel/`, converted to WebP
- **Behind the Scenes** — photos from `bts/`, converted to WebP
- **Creator Bios** — John Cotrocois (done), Nada (TODO: bio + photo)

### Technical Details

- Static HTML/CSS/JS — no build step needed
- Hosted on GitHub Pages
- Theme is configurable via CSS custom properties in `css/theme.css`
- Color palette is WCAG AA accessible (contrast ratios noted inline)
- No Bun needed — plain files, GitHub Pages serves them directly

### Images

Raw source images (`carousel/`, `bts/`, `bios/`) are gitignored. The web-ready WebP outputs live in `public/images/` and are what gets committed.

To (re)convert images:

```
ruby script/convert-images
# re-convert everything, overwriting existing outputs:
ruby script/convert-images --force
```

Requires ImageMagick (`brew install imagemagick`). Uses Ruby 4.0.2 (see `.ruby-version`).

### Asset Cache Busting

No build step means no content-hash filenames. CSS and JS references in `index.html` use `?v=N` query strings — bump the version number there when you change `css/style.css` or `js/main.js`.

### Still TODO

- Nada's bio + photo
- Swap placeholder YouTube URL for the actual unlisted film clip
- Update `alt` text on carousel/BTS images once we have better stills from the video
