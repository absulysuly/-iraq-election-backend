#!/bin/bash
# Fix ALL URLSearchParams errors in the codebase

echo "🔍 Searching for all URLSearchParams(searchParams) instances..."

# Find all TypeScript/TSX files with the pattern
grep -r "new URLSearchParams(searchParams)" --include="*.tsx" --include="*.ts" . 2>/dev/null | grep -v node_modules | grep -v ".next"

echo ""
echo "📝 Files that need fixing:"
grep -l "new URLSearchParams(searchParams)" --include="*.tsx" --include="*.ts" -r . 2>/dev/null | grep -v node_modules | grep -v ".next"
