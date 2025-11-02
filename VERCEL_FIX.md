# 🔧 VERCEL DEPLOYMENT FIX

## Error Found:
```
Type error: Argument of type 'ReadonlyURLSearchParams' is not assignable 
to parameter of type 'URLSearchParams'

File: components/candidates/FilterPanel.tsx:18
```

## The Problem:
Next.js 14 App Router uses `ReadonlyURLSearchParams` but `URLSearchParams` 
constructor doesn't accept it directly.

## The Fix (ONE LINE CHANGE):

### CHANGE THIS (Line 18):
```typescript
const params = new URLSearchParams(searchParams);
```

### TO THIS:
```typescript
const params = new URLSearchParams(searchParams.toString());
```

## Full Context:
```typescript
const handleFilterChange = (key: string, value: string) => {
  const params = new URLSearchParams(searchParams.toString()); // ← ADD .toString()
  params.set('page', '1');
  if (value) {
    params.set(key, value);
  } else {
    params.delete(key);
  }
  router.push(`?${params.toString()}`);
};
```

## How to Apply:

### Option 1: Manual Fix (30 seconds)
1. Open `components/candidates/FilterPanel.tsx`
2. Go to line 18
3. Change `new URLSearchParams(searchParams)` 
   to `new URLSearchParams(searchParams.toString())`
4. Save
5. Git commit and push
6. Vercel will auto-deploy

### Option 2: Command Line (10 seconds)
```bash
# In your frontend repository
cd /path/to/your/frontend

# Make the fix (if you're on Mac/Linux)
sed -i 's/new URLSearchParams(searchParams)/new URLSearchParams(searchParams.toString())/g' components/candidates/FilterPanel.tsx

# Commit and push
git add components/candidates/FilterPanel.tsx
git commit -m "Fix: Convert ReadonlyURLSearchParams to string for URLSearchParams constructor"
git push origin main
```

## After Fix:
✅ Vercel will detect the push
✅ Build will succeed
✅ Deployment will complete
✅ Your app will be LIVE!

---

**This is a common Next.js 14 App Router issue. One line fix. 30 seconds.** ✅
