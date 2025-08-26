# Prime Social Website

Medical Aesthetics Marketing Website for Prime Social, a brand of Aquilastrat.

## Features

- Responsive design
- SEO optimized
- Privacy Policy & Terms of Service
- Contact forms
- Service showcases

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Vite

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy

Auto-deployed via Hostinger GitHub integration.

## **🚀 Complete GitHub Auto-Deploy Setup**

### **Step 1: Initialize Git Repository**

```bash
# Navigate to your project folder (if not already there)
cd /Users/suhaasc/Documents/Work/PrimeSocial

# Initialize git repository
git init

# Add all files
git add .

# Make your first commit
git commit -m "Initial commit - Prime Social website"
```

### **Step 2: Create GitHub Repository**

1. **Go to GitHub.com** and sign in
2. **Click "New repository"** (green button)
3. **Repository name**: `primesocial-website` (or your preferred name)
4. **Description**: "Prime Social - Medical Aesthetics Marketing Website"
5. **Make it Public** (recommended for auto-deploy)
6. **Don't initialize** with README, .gitignore, or license
7. **Click "Create repository"**

### **Step 3: Connect Local to GitHub**

```bash
# Add the remote origin (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/primesocial-website.git

# Set main as default branch
git branch -M main

# Push to GitHub
git push -u origin main
```

### **Step 4: Configure Hostinger GitHub Integration**

1. **Login to Hostinger Control Panel**
2. **Go to Domains → Your Domain → GitHub**
3. **Click "Connect GitHub"**
4. **Authorize Hostinger** to access your GitHub account
5. **Select your repository**: `primesocial-website`
6. **Configure build settings:**
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Node.js Version**: Select the latest LTS (18.x or 20.x)
7. **Click "Deploy"**

### **Step 5: Test Auto-Deploy**

```bash
# Make a small change to test
# Edit any file (like adding a comment)

# Commit and push
git add .
git commit -m "Test auto-deploy"
git push origin main
```

**Watch Hostinger** - it should automatically start building and deploying!

## **📁 File Structure Check**

Make sure your project has these essential files:

```
PrimeSocial/
├── package.json          ✅ (should exist)
├── vite.config.js        ✅ (should exist)
├── .gitignore           ❌ (need to create)
├── README.md            ❌ (optional but recommended)
└── src/                 ✅ (your components)
```

## **🔧 Create .gitignore File**

```bash
# Create .gitignore
cat > .gitignore << 'EOF'
# Dependencies
node_modules/
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Build outputs
dist/
build/

# Environment variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# IDE files
.vscode/
.idea/
*.swp
*.swo

# OS files
.DS_Store
Thumbs.db

# Logs
logs
*.log
EOF
```

## **📝 Create README.md**

```bash
# Create README
cat > README.md << 'EOF'
# Prime Social Website

Medical Aesthetics Marketing Website for Prime Social, a brand of Aquilastrat.

## Features

- Responsive design
- SEO optimized
- Privacy Policy & Terms of Service
- Contact forms
- Service showcases

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Vite

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy

Auto-deployed via Hostinger GitHub integration.
EOF
```

## **🔄 Complete Setup Commands**

```bash
<code_block_to_apply_changes_from>
```

## **✅ What Happens After Setup**

1. **Every time you push code** → Hostinger automatically detects changes
2. **Builds your app** → Runs `npm run build`
3. **Deploys to your domain** → Updates your live website
4. **No manual uploads needed** → Fully automated!

## **🚨 Troubleshooting Tips**

- **Build fails?** Check Hostinger logs for npm errors
- **404 errors?** Make sure `.htaccess` is configured for React Router
- **Assets not loading?** Check file paths in the build output

## **🎯 Next Steps**

1. **Create the GitHub repo** (Step 2)
2. **Run the setup commands** (Step 5)
3. **Configure Hostinger** (Step 4)
4. **Test with a small change**

Would you like me to help you with any specific step, or do you have questions about the GitHub repository setup?
