#!/bin/bash

echo "Testing Next.js build and export..."

# Clean previous builds
rm -rf .next out

# Run the build
echo "Running npm run build..."
npm run build

# Check if out directory exists
if [ -d "out" ]; then
    echo "✅ Success: out directory created"
    echo "Contents of out directory:"
    ls -la out/
    echo "Number of files in out directory:"
    find out -type f | wc -l
else
    echo "❌ Error: out directory not found"
    echo "Available directories:"
    ls -la
fi

# Check if index.html exists
if [ -f "out/index.html" ]; then
    echo "✅ Success: index.html found"
    echo "First few lines of index.html:"
    head -5 out/index.html
else
    echo "❌ Error: index.html not found in out directory"
fi

echo "Test completed."
