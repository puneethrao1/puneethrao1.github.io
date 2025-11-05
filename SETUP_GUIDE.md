# Setup Instructions for Your Template Repository

## Files Created

I've created all the files you need for your student portfolio template:

### Core Files:
- `_config.yml` - Site configuration with theme
- `README.md` - Comprehensive student instructions
- `index.md` - Homepage template
- `about.md` - About page template
- `projects.md` - Projects listing page
- `.gitignore` - Git ignore file

### Project Files:
- `_projects/powerbi-example.md` - Example PowerBI project

### Assets:
- `assets/images/README.md` - Placeholder for images folder

---

## How to Upload These Files to Your GitHub Repository

### Option 1: Upload Files Directly on GitHub (Easiest)

1. **Go to your repository:** https://github.com/RudiORM/student-portfolio-template

2. **Upload the files:**
   - Click **Add file** → **Upload files**
   - Drag and drop ALL the files from the outputs folder
   - Make sure to maintain the folder structure (_projects and assets folders)
   - Scroll down and click **Commit changes**

3. **Enable as Template:**
   - Go to **Settings**
   - Check the box: **Template repository**
   - This lets students click "Use this template"

4. **Test it:**
   - Go to **Settings** → **Pages**
   - Enable Pages: Branch: main, / (root)
   - Visit the preview site to make sure it works

### Option 2: Using Git (If You're Comfortable with Command Line)

```bash
# Clone your repository
git clone https://github.com/RudiORM/student-portfolio-template.git
cd student-portfolio-template

# Copy all the files from outputs folder into this directory

# Add and commit
git add .
git commit -m "Add portfolio template files"
git push
```

---

## Making It a Template Repository

Once files are uploaded:

1. Go to your repository settings
2. Scroll down to "Template repository"
3. Check the box ✅ **Template repository**
4. Save

Now students will see a green **"Use this template"** button!

---

## Testing the Template

Before sharing with students:

1. **Enable GitHub Pages** on your template repo (Settings → Pages)
2. **Visit the live site** to verify everything works
3. **Try using the template yourself:**
   - Click "Use this template"
   - Create a test repository named `test-username.github.io`
   - Enable Pages
   - Verify it deploys correctly

---

## Student Instructions Summary

Once your template is ready, tell students to:

1. Go to: https://github.com/RudiORM/student-portfolio-template
2. Click **"Use this template"** → **"Create a new repository"**
3. Name it: `theirusername.github.io`
4. Enable GitHub Pages in Settings
5. Edit the files with their information

That's it!

---

## Customization Options

Students can:
- Change theme in `_config.yml`
- Edit markdown files directly on GitHub
- Add new projects in `_projects/` folder
- Upload images to `assets/images/`

---

## Need Help?

The README.md file includes comprehensive instructions for students, including:
- How to use the template
- How to edit files
- How to add PowerBI embeds
- Markdown basics
- Troubleshooting tips
