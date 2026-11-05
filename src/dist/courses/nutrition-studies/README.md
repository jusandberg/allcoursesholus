# Juliana Nutrition Study Hub

A static, browser-based study hub covering 14 nutrition units. It includes 161 lessons, 336 flashcards, calculators, progress tracking, and 420 practice questions with a one-sentence explanation of why the correct answer is right.

## Project structure

- `dist/` — the complete website (HTML, CSS, JavaScript, unit data, and images)
- `.openai/hosting.json` — hosting configuration for the existing ChatGPT Site

No build step or package installation is required. The site stores study progress locally in the browser.

## Update this project on GitHub

Upload or commit the contents of this folder to the GitHub repository. If the repository already contains an older copy, replace its `dist/` folder with this one and keep `.openai/hosting.json` if the same ChatGPT Site should remain connected.

From a terminal opened in this folder, a typical update is:

```text
git add README.md dist .openai/hosting.json
git commit -m "Complete all 14 nutrition study units"
git push
```

## Preview locally

Serve `dist/` with any static web server, then open its local URL in a browser. Opening `dist/index.html` directly may also work, but a local server is more reliable.
