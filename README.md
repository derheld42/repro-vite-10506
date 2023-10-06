# Issue reproduction

This repository is to demonstrate the indeterminate build issue seen with vite here: https://github.com/vitejs/vite/issues/10506

Running these commands will show that 2 builds are different when they should not need to be different.
```
npm install
npm run build
mv build build1
npm run build
diff -qr build build1
```

link to [README that comes with base svelte](README_old.md)