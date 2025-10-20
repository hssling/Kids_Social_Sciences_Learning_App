# Deployment Guide for Kids Social Sciences App

## Git Repository Setup

### 1. Create GitHub Repository
1. Go to [GitHub.com](https://github.com)
2. Click "New repository"
3. Name it: `kids-social-sciences-app`
4. Keep it public
5. DON'T initialize with README (we have one)

### 2. Connect Local Repository to GitHub

```bash
# Add remote origin (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/kids-social-sciences-app.git

# Or using SSH (recommended)
git remote add origin git@github.com:YOUR_USERNAME/kids-social-sciences-app.git

# Push to main branch
git branch -M main
git push -u origin main
```

## GitHub Actions Setup

### Configure Repository Settings

1. **Go to Repository Settings** → Pages
2. **Source**: "GitHub Actions" (this is automatically set by our workflow)
3. **Branch**: gh-pages (wait for first deployment)

### Repository Secrets (if needed)
- The workflow uses `GITHUB_TOKEN` automatically
- No additional secrets needed for basic deployment

## Automatic Deployment

Once connected, the CI/CD pipeline will:
- ✅ Run on every push to main branch
- 🧪 Test the application
- 🔨 Build for production
- 🚀 Deploy to GitHub Pages automatically

## Access Your Deployed App

Your app will be available at:
```
https://YOUR_USERNAME.github.io/kids-social-sciences-app
```

## Alternative Deployment Options

### Netlify (Free, Recommended)
1. **Import from GitHub**: Connect your repository
2. **Build settings**: Keep defaults
3. **Deploy**: Automatic on push

### Vercel (Free, Alternative)
1. **Import from GitHub**: Similar to Netlify
2. **Configure**: Usually auto-detects React app

## Mobile App Deployment

For publishing to Play Store/App Store, see `PUBLISHING_ASSETS.md` for:
- Capacitor setup instructions
- Icon specifications
- App store guidelines

## Troubleshooting

### Build Failures
- Check console for error messages
- Ensure Node.js version compatibility
- Verify all dependencies are installed

### Deployment Issues
- Check GitHub Actions logs
- Verify repository pages settings
- Confirm branch settings

### Repository Connection
```bash
# Check remote
git remote -v

# Check status
git status

# Force push if needed
git push -u origin main --force
```

---

**Note**: Replace `YOUR_USERNAME` with your actual GitHub username in all commands.
