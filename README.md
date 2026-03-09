# SMS Without Borders

Welcome to the SMS Without Borders project homepage!

This project was crafted with [React](https://github.com/facebook/create-react-app) for a seamless development experience.

## Getting Started

To get started, navigate to the project directory and execute the following commands:

```bash
yarn install
```

```bash
yarn start
```

This will launch the application in development mode. You can then access it in your browser at [http://localhost:3000](http://localhost:3000). The page will automatically reload as you make changes, and any lint errors will be displayed in the console.

## Contribution Guide

We welcome contributions to SMS Without Borders! To contribute, please follow these steps:

1. Fork the repository to your GitHub account.
2. Clone the forked repository to your local machine.
3. Create a new branch for your feature or bug fix:
   ```bash
   git checkout -b feature-name
   ```
   Replace `feature-name` with a descriptive name for your feature or bug fix.
4. Make your changes and commit them with descriptive commit messages:
   ```bash
   git commit -am "Brief description of changes"
   ```
5. Push your changes to your forked repository:
   ```bash
   git push origin feature-name
   ```
6. Open a pull request (PR) from your forked repository's branch to the `dev` branch of the main repository.

Once your PR is opened, our team will review your changes and work with you to merge them into the `dev` branch.

## Other Packages Used

In addition to React, we utilized the following packages to enhance functionality:

- MUI
- React Icons

Feel free to explore and contribute to make SMS Without Borders even better!



---------------------------------------------------------------------------------------------------------------------------------------------

# Research & Publications Section – Integration Guide

## Overview

This adds a fully-featured **Research & Publications** page to the SMSWithoutBorders website that:

- Displays all papers, white papers, and threads in a searchable, filterable grid
- Lets non-developers **add new papers by only editing one JSON file** — no React code needed
- Supports search by title, topic, author, or keyword
- Supports filtering by type (whitepaper / research / thread), year, and topic tags
- Links directly to PDFs (Google Drive, arXiv, etc.)

---

## Files Delivered

```
src/
  data/
    papers.json        
  pages/
    ResearchPage.jsx    
```


## How to add new papers (NO code needed)

All papers live in **`src/data/papers.json`**. To add a new paper:

1. Open `src/data/papers.json` in any text editor or directly on GitHub (click the file → pencil icon to edit)
2. Copy this template and paste it before the last `]`:

```json
{
  "id": "7",
  "title": "Your Paper Title Here",
  "authors": ["First Author", "Second Author"],
  "abstract": "A short summary of the paper (2-4 sentences).",
  "topics": ["Topic1", "Topic2", "Topic3"],
  "type": "whitepaper",
  "year": 2025,
  "pdfUrl": "https://link-to-pdf-or-google-drive.com/...",
  "thumbnail": null
}
```

3. Save / commit the file
4. The website will automatically show the new paper

### Field reference

| Field       | Required | Options / Notes                                                      |
|-------------|----------|----------------------------------------------------------------------|
| `id`        | Yes      | Unique string number (increment from last entry)                     |
| `title`     | Yes      | Full paper title                                                      |
| `authors`   | Yes      | Array of author name strings                                         |
| `abstract`  | Yes      | 1–4 sentence summary shown on the card                               |
| `topics`    | Yes      | Array of topic tags (used for filtering); use existing ones or new   |
| `type`      | Yes      | `"whitepaper"`, `"research"`, or `"thread"`                          |
| `year`      | Yes      | Publication year as a number, e.g. `2024`                            |
| `pdfUrl`    | Yes      | Full URL to PDF, Google Drive view link, or arXiv. `""` = Coming Soon|
| `thumbnail` | No       | Path to a cover image (optional, leave `null` if not used)           |

---

## Google Drive PDF links

For Google Drive, use the **viewer link** format:
```
https://drive.google.com/file/d/FILE_ID/view
```
This opens an in-browser reader, which works perfectly with the "Read Paper" button.

---

## Want inline PDF reading (no leaving the site)?

If you want papers to open in an embedded reader within the website instead of a new tab, we can add a modal with `react-pdf`. Let us know!