# Online Astronomy Competition (OAC) Website

A modern, responsive website for the Online Astronomy Competition (OAC) built with Next.js, TypeScript, and Tailwind CSS. The website provides information about the competition, registration process, sample problems, and study materials for high school astronomy enthusiasts.

## Features

- **Modern Design**: Clean, professional layout with responsive design
- **Hero Section**: Compelling introduction with call-to-action buttons
- **About Section**: Detailed information about the OAC and its mission
- **Registration Process**: Simple registration guide for all participants
- **Sample Problems**: Showcase of astronomy challenges participants will face
- **FAQ Section**: Expandable frequently asked questions
- **Registration Form**: Complete registration form with validation
- **Contact Information**: Easy ways to get in touch with organizers
- **Mobile-Friendly**: Fully responsive design for all devices

## Tech Stack

- **Next.js 15**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Modern icon library
- **Responsive Design**: Mobile-first approach

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Homepage
│   └── globals.css         # Global styles
├── components/
│   ├── Navigation.tsx      # Navigation bar
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About section
│   ├── Registration.tsx    # Registration process
│   ├── SampleProblems.tsx  # Sample problems
│   ├── FAQ.tsx             # FAQ section
│   ├── RegistrationForm.tsx # Registration form
│   ├── Contact.tsx         # Contact information
│   └── Footer.tsx          # Footer
└── public/                 # Static assets
```

## Key Components

- **Navigation**: Responsive navigation with mobile menu
- **Hero**: Eye-catching hero section with space/astronomy theme
- **About**: Information about the OAC and its mission
- **Registration**: Simple registration process for all participants
- **Sample Problems**: Astronomy problem examples
- **FAQ**: Expandable question and answer section
- **Registration Form**: Complete registration form with validation
- **Contact**: Contact information and organizer details

## Development Commands

```bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## 🚀 Deployment Options

### GitHub Pages

This repository includes a GitHub Actions workflow that automatically deploys to GitHub Pages when you push to the main branch.

#### Setup Instructions:

1. **Enable GitHub Pages**:
   - Go to your repository settings
   - Navigate to "Pages" in the left sidebar
   - Under "Source", select "GitHub Actions"

2. **Push to main branch**:
   - The workflow will automatically trigger
   - Your site will be available at `https://yourusername.github.io/oac`

### Firebase Hosting (Recommended)

Firebase Hosting provides better performance, custom domains, and advanced features.

#### Quick Setup:

1. **Install Firebase CLI**: `npm install -g firebase-tools`
2. **Create Firebase Project**: Visit [Firebase Console](https://console.firebase.google.com)
3. **Configure**: Update `.firebaserc` with your project ID
4. **Deploy**: Run `npm run deploy:firebase`

📋 **Detailed Instructions**: See [FIREBASE_SETUP.md](./FIREBASE_SETUP.md) for complete setup guide.

#### Available Firebase Scripts:

```bash
npm run firebase:build     # Build the project
npm run firebase:deploy    # Deploy to Firebase
npm run firebase:serve     # Test locally
npm run deploy:firebase    # Build and deploy
```

### Manual Deployment:

If you prefer to deploy manually:

```bash
npm run build
# Upload the contents of the 'out' folder to your hosting provider
```

The Next.js configuration is already set up for static export with:
- `output: 'export'` - Enables static HTML export
- `trailingSlash: true` - Adds trailing slashes for GitHub Pages
- `images: { unoptimized: true }` - Disables image optimization for static export

## Competition Details

- **Date**: August 30, 2025
- **Format**: Online competition
- **Time**: 12:00 - 23:59 EST
- **Registration Fee**: Free
- **Eligibility**: High school students (grades 9-12)
- **Age Limit**: 18 years or younger
- **Open to**: All students worldwide

## Contact

For questions about the competition:

- Email: astronomycompetition@gmail.com
- Response time: 48 hours

## License

This project is built for educational purposes and the Online Astronomy Competition.
