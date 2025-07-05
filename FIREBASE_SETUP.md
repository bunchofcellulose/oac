# Firebase Hosting Setup Guide for OAC Website

This guide will help you deploy your OAC website to Firebase Hosting.

## Prerequisites

1. **Node.js** (version 18 or higher)
2. **Firebase Account** - Create one at [https://firebase.google.com](https://firebase.google.com)
3. **Firebase CLI** - Install globally: `npm install -g firebase-tools`

## Step 1: Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Click "Create a project"
3. Name your project (e.g., "oac-website")
4. Enable Google Analytics (optional)
5. Click "Create project"

## Step 2: Enable Firebase Hosting

1. In your Firebase project console, click "Hosting" in the left sidebar
2. Click "Get started"
3. Follow the setup instructions (we've already configured the files)

## Step 3: Configure Firebase CLI

Run these commands in your project directory:

```bash
# Login to Firebase
firebase login

# Initialize Firebase in your project (if not already done)
firebase init hosting

# When prompted:
# - Select "Use an existing project"
# - Choose your project (oac-website)
# - Set public directory to: out
# - Configure as single-page app: Yes
# - Set up automatic builds: No (we'll handle this)
# - Don't overwrite existing files
```

## Step 4: Update Project Configuration

Update `.firebaserc` with your actual project ID:

```json
{
  "projects": {
    "default": "your-actual-project-id"
  }
}
```

## Step 5: Manual Deployment

To deploy manually:

```bash
# Build the project
npm run build

# Deploy to Firebase
npm run deploy:firebase
```

## Step 6: Automatic Deployment with GitHub Actions

### Option A: Simple Deployment (No GitHub Actions)

Just push to your repository and deploy manually when needed.

### Option B: Automatic Deployment (Recommended)

1. **Generate Firebase Service Account Key:**
   ```bash
   firebase login:ci
   ```
   This will generate a token. Copy it.

2. **Add GitHub Secrets:**
   - Go to your GitHub repository settings
   - Navigate to "Secrets and variables" → "Actions"
   - Add new repository secrets:
     - Name: `FIREBASE_SERVICE_ACCOUNT_OAC_WEBSITE`
     - Value: The service account JSON (see below)

3. **Generate Service Account JSON:**
   - Go to Firebase Console → Project Settings → Service Accounts
   - Click "Generate new private key"
   - Download the JSON file
   - Copy the entire JSON content as the secret value

4. **Update Workflow:**
   The workflow file `.github/workflows/firebase-deploy.yml` is already configured.
   Just update the `projectId` if your project ID is different.

## Available Scripts

```bash
# Development
npm run dev                 # Start development server

# Building
npm run build              # Build for production
npm run firebase:build     # Same as build (alias)

# Firebase Deployment
npm run firebase:deploy    # Deploy to Firebase
npm run firebase:serve     # Test locally with Firebase emulator
npm run deploy:firebase    # Build and deploy in one command

# GitHub Pages (alternative)
npm run deploy             # Deploy to GitHub Pages
```

## Project Structure

```
├── firebase.json          # Firebase hosting configuration
├── .firebaserc           # Firebase project settings
├── out/                  # Build output directory (auto-generated)
├── .github/
│   └── workflows/
│       └── firebase-deploy.yml  # GitHub Actions workflow
└── src/                  # Your Next.js source code
```

## Firebase Hosting Features

- ✅ **Global CDN** - Fast loading worldwide
- ✅ **SSL Certificate** - Automatic HTTPS
- ✅ **Custom Domain** - Use your own domain
- ✅ **Rollback** - Easy deployment rollbacks
- ✅ **Preview Channels** - Test deployments
- ✅ **Analytics** - Built-in performance monitoring

## Custom Domain Setup (Optional)

1. In Firebase Console → Hosting
2. Click "Add custom domain"
3. Enter your domain name
4. Follow the DNS configuration instructions

## Troubleshooting

### Build Issues
```bash
# Clear Next.js cache
rm -rf .next out

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Try building again
npm run build
```

### Firebase Issues
```bash
# Check Firebase login status
firebase projects:list

# Re-login if needed
firebase logout
firebase login

# Check project configuration
firebase use --list
```

### Deployment URL

After successful deployment, your site will be available at:
- Default: `https://your-project-id.web.app`
- Custom: `https://your-project-id.firebaseapp.com`

## Cost

Firebase Hosting includes:
- **Free tier**: 10GB storage, 360MB/day transfer
- **Paid tier**: $0.026/GB storage, $0.15/GB transfer

For most websites, the free tier is sufficient.

---

## Next Steps

1. Create your Firebase project
2. Update `.firebaserc` with your project ID
3. Run `firebase login` and `firebase init hosting`
4. Deploy with `npm run deploy:firebase`
5. Set up GitHub Actions for automatic deployment (optional)

Your OAC website will be live and globally accessible! 🚀
