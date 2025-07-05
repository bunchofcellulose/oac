# GitHub Pages Deployment Setup

This repository is configured to automatically deploy to GitHub Pages using GitHub Actions.

## Setup Instructions

1. **Enable GitHub Pages in your repository:**
   - Go to your repository settings
   - Navigate to "Pages" section
   - Under "Source", select "GitHub Actions"

2. **Push your code to the main branch:**
   - The workflow will automatically trigger on push to main
   - Your site will be deployed to `https://[username].github.io/oac`

3. **Repository Settings:**
   - Make sure your repository is public (required for free GitHub Pages)
   - The workflow requires the following permissions:
     - Contents: read
     - Pages: write
     - ID token: write

## Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Deployment

The site is automatically deployed when you push changes to the main branch. The workflow:

1. Installs dependencies
2. Builds the Next.js application with static export
3. Deploys the static files to GitHub Pages

## Configuration

The site is configured for static export with:

- `output: 'export'` for static generation
- `trailingSlash: true` for GitHub Pages compatibility
- `images: { unoptimized: true }` for static image handling
- Base path configuration for GitHub Pages subdirectory

## Troubleshooting

- If deployment fails, check the Actions tab for error details
- Ensure your repository has GitHub Pages enabled
- Verify that the workflow has the necessary permissions
