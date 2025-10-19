# Company Local AI - Rebranding Guide

This guide provides comprehensive instructions for customizing this AI chat application template for your organization. You can use this guide manually or copy the AI prompt template at the bottom for automated assistance.

## 🚀 Quick Start

### For AI-Assisted Rebranding

Copy and paste the following prompt into your AI assistant (ChatGPT, Claude, etc.):

```
I need to rebrand a Company Local AI template application for my organization. Please help me customize the following:

**Organization Details:**
- Company Name: [YOUR_COMPANY_NAME]
- App Name: [YOUR_APP_NAME] 
- Primary Color: [YOUR_PRIMARY_COLOR] (hex code)
- Secondary Color: [YOUR_SECONDARY_COLOR] (hex code)
- Logo File: [YOUR_LOGO_FILE_PATH]
- Repository URL: [YOUR_REPOSITORY_URL]
- Homepage URL: [YOUR_HOMEPAGE_URL]

**Requirements:**
1. Replace all instances of "Company Local AI" with "[YOUR_APP_NAME]"
2. Replace all instances of "company-local-ai" with "[YOUR_APP_NAME_LOWERCASE]"
3. Update package names from "@company-local-ai/*" to "@[YOUR_ORG_NAME]/*"
4. Replace the neutral blue color scheme with my brand colors
5. Update all repository URLs and homepage references
6. Replace logo and favicon files with my brand assets
7. Update configuration files with my organization details

Please provide step-by-step instructions for each change.
```

## 📋 Manual Rebranding Checklist

### 1. Text and Content Replacements

#### Package Names
- [ ] Update `/package.json` - change name from "company-local-ai" to your app name
- [ ] Update `/api/package.json` - change name from "@company-local-ai/backend" to "@[your-org]/backend"
- [ ] Update `/client/package.json` - change name from "@company-local-ai/frontend" to "@[your-org]/frontend"
- [ ] Update `/packages/api/package.json` - change name from "@company-local-ai/api" to "@[your-org]/api"
- [ ] Update `/packages/client/package.json` - change name from "@company-local-ai/client" to "@[your-org]/client"
- [ ] Update `/packages/data-provider/package.json` - change name from "company-local-ai-data-provider" to "[your-org]-data-provider"
- [ ] Update `/packages/data-schemas/package.json` - change name from "@company-local-ai/data-schemas" to "@[your-org]/data-schemas"

#### Application Text
- [ ] Update `/client/index.html` - change title and meta description
- [ ] Update `/README.md` - replace with your organization's description
- [ ] Update `/company-local-ai.example.yaml` - rename to `[your-app].example.yaml` and update content
- [ ] Update all translation files in `/client/src/locales/*/translation.json` (40+ files)

#### Repository URLs
- [ ] Update all `repository.url` fields in package.json files
- [ ] Update all `bugs.url` fields in package.json files  
- [ ] Update all `homepage` fields in package.json files

### 2. Visual Assets and Branding

#### Logo and Icons
- [ ] Replace `/client/public/assets/logo.svg` with your logo
- [ ] Replace `/client/public/assets/favicon-16x16.png` with your favicon
- [ ] Replace `/client/public/assets/favicon-32x32.png` with your favicon
- [ ] Replace `/client/public/assets/apple-touch-icon-180x180.png` with your icon
- [ ] Replace `/client/public/assets/icon-192x192.png` with your icon
- [ ] Replace `/client/public/assets/maskable-icon.png` with your icon

#### Color Scheme
- [ ] Update `/client/tailwind.config.cjs` - replace blue color palette with your brand colors
- [ ] Update CSS variables in theme files if any custom themes are used
- [ ] Test color accessibility and contrast ratios

### 3. Configuration Files

#### Main Configuration
- [ ] Rename `company-local-ai.example.yaml` to `[your-app].example.yaml`
- [ ] Update welcome message in configuration
- [ ] Update privacy policy and terms of service URLs
- [ ] Update any organization-specific settings

#### Docker Configuration
- [ ] Update `/docker-compose.yml` - change service names and image names
- [ ] Update `/deploy-compose.yml` - change service names and image names
- [ ] Update `/Dockerfile` - change any hardcoded references
- [ ] Update `/Dockerfile.multi` - change any hardcoded references

#### Helm Charts
- [ ] Update `/helm/company-local-ai/` directory name to your app name
- [ ] Update all Helm chart values and templates
- [ ] Update service names and labels in Kubernetes manifests

### 4. Code References

#### Import Statements
- [ ] Update all `@company-local-ai/*` imports to `@[your-org]/*`
- [ ] Update all `company-local-ai-data-provider` references
- [ ] Update any hardcoded "Company Local AI" strings in source code
- [ ] Update test files and mock data

#### Environment Variables
- [ ] Update any environment variable examples
- [ ] Update configuration documentation
- [ ] Update deployment scripts

### 5. Documentation

#### README and Docs
- [ ] Update `/README.md` with your organization's information
- [ ] Update any documentation files in `/docs/` if they exist
- [ ] Update contribution guidelines if applicable
- [ ] Update license information if needed

## 🎨 Color Customization

### Tailwind Configuration

Edit `/client/tailwind.config.cjs` to update the color scheme:

```javascript
// Replace the blue color palette with your brand colors
blue: {
  50: '#[your-lightest-color]',
  100: '#[your-light-color]',
  200: '#[your-lighter-color]',
  300: '#[your-medium-light-color]',
  400: '#[your-medium-color]',
  500: '#[your-primary-color]',
  550: '#[your-medium-dark-color]',
  600: '#[your-dark-color]',
  700: '#[your-darker-color]',
  800: '#[your-darkest-color]',
  900: '#[your-darkest-color]',
},
```

### CSS Variables

If your application uses CSS variables for theming, update them in:
- `/client/src/` theme files
- Any custom CSS files
- Component-specific style files

## 📁 Asset File Locations

Replace these files with your brand assets:

```
/client/public/assets/
├── logo.svg                    # Main logo
├── favicon-16x16.png          # Small favicon
├── favicon-32x32.png           # Standard favicon
├── apple-touch-icon-180x180.png # iOS icon
├── icon-192x192.png            # PWA icon
└── maskable-icon.png           # PWA maskable icon
```

## 🔧 Package Name Updates

When updating package names, ensure consistency across:

1. **Package.json files** - Update the `name` field
2. **Import statements** - Update all `import` and `require` statements
3. **Dependencies** - Update internal package references
4. **Build scripts** - Update any build references
5. **Documentation** - Update any package references in docs

## 🚀 Deployment Updates

### Docker
- Update service names in docker-compose files
- Update image names and tags
- Update environment variables
- Update volume mounts if needed

### Kubernetes/Helm
- Update chart names and values
- Update service names and labels
- Update ingress configurations
- Update persistent volume claims

### CI/CD
- Update build scripts
- Update deployment pipelines
- Update environment configurations
- Update test configurations

## ✅ Testing Your Changes

After rebranding, test the following:

1. **Build Process**
   - [ ] `npm run build` completes successfully
   - [ ] All packages build without errors
   - [ ] No missing dependency errors

2. **Runtime**
   - [ ] Application starts without errors
   - [ ] All pages load correctly
   - [ ] Branding appears correctly
   - [ ] No broken imports or references

3. **Functionality**
   - [ ] All features work as expected
   - [ ] User authentication works
   - [ ] AI integrations function properly
   - [ ] File uploads work correctly

## 🆘 Troubleshooting

### Common Issues

1. **Build Errors**
   - Check all import statements are updated
   - Verify package names are consistent
   - Ensure all dependencies are installed

2. **Runtime Errors**
   - Check for hardcoded references to old names
   - Verify configuration files are updated
   - Check environment variables

3. **Visual Issues**
   - Verify asset files are replaced
   - Check color scheme is applied
   - Test on different screen sizes

### Getting Help

If you encounter issues:

1. Check the original Company Local AI documentation for technical details
2. Review the error logs for specific issues
3. Test changes incrementally rather than all at once
4. Use version control to track changes and rollback if needed

## 📝 Final Checklist

Before considering your rebranding complete:

- [ ] All text references updated
- [ ] All package names updated
- [ ] All visual assets replaced
- [ ] Color scheme updated
- [ ] Configuration files updated
- [ ] Repository URLs updated
- [ ] Documentation updated
- [ ] Application builds successfully
- [ ] Application runs without errors
- [ ] All features work correctly
- [ ] Branding appears consistently

---

**Note**: This template is based on the original Company Local AI project. For technical implementation details, refer to the original Company Local AI documentation and source code.
