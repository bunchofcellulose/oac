#!/bin/bash

echo "🔥 Firebase Deployment Test Script for OAC Website"
echo "================================================="

# Check if Firebase CLI is installed
if ! command -v firebase &> /dev/null; then
    echo "❌ Firebase CLI not found. Please install it:"
    echo "   npm install -g firebase-tools"
    exit 1
fi

echo "✅ Firebase CLI found"

# Check if user is logged in
if ! firebase projects:list &> /dev/null; then
    echo "❌ Not logged into Firebase. Please run:"
    echo "   firebase login"
    exit 1
fi

echo "✅ Firebase authentication verified"

# Check if .firebaserc exists
if [ ! -f ".firebaserc" ]; then
    echo "❌ .firebaserc not found. Please run:"
    echo "   firebase init hosting"
    exit 1
fi

echo "✅ Firebase configuration found"

# Build the project
echo "📦 Building Next.js project..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed"
    exit 1
fi

echo "✅ Build successful"

# Check if out directory exists
if [ ! -d "out" ]; then
    echo "❌ out directory not found after build"
    exit 1
fi

echo "✅ Static export generated"
echo "📊 Build output:"
ls -la out/ | head -10

# Test with Firebase emulator
echo "🚀 Starting Firebase emulator..."
echo "   Visit: http://localhost:5000"
echo "   Press Ctrl+C to stop"

firebase serve --port 5000

echo "✅ Firebase deployment test completed!"
echo ""
echo "To deploy to production:"
echo "   npm run deploy:firebase"
