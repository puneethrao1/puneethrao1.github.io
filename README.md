# Student Portfolio Template

A simple Jekyll-based portfolio website template for amazing students who come in at 9am. Perfect for showcasing your projects, including PowerBI dashboards and other work.

## 🚀 Quick Start for Students

### Step 1: Use This Template

1. Click the green **"Use this template"** button at the top of this page
2. Select **"Create a new repository"**
3. Name your repository: `yourusername.github.io` (replace `yourusername` with your actual GitHub username)
4. Make sure it's set to **Public**
5. Click **"Create repository"**

### Step 2: Enable GitHub Pages

1. In your new repository, go to **Settings** (top menu)
2. Click **Pages** in the left sidebar
3. Under "Build and deployment":
   - Source: **Deploy from a branch**
   - Branch: **main** and **/ (root)**
4. Click **Save**
5. Wait 1-2 minutes for your site to build

Your site will be live at: `https://yourusername.github.io`

### Step 3: Customize Your Site

#### Edit Your Name and Title
1. Click on `_config.yml`
2. Click the pencil icon (Edit)
3. Change these lines:
   ```yaml
   title: Your Name
   description: My Portfolio Website
   url: "https://yourusername.github.io"
   ```
4. Click **Commit changes**

#### Edit Your Homepage
1. Click on `index.md`
2. Click the pencil icon
3. Replace the example text with your own introduction
4. Click **Commit changes**

#### Edit Your About Page
1. Click on `about.md`
2. Edit with your information
3. Click **Commit changes**

### Step 4: Add Your Projects

#### To Add a PowerBI Project:
1. Go to the `_projects` folder
2. Click **Add file** → **Create new file**
3. Name it: `my-project-name.md` (use lowercase and hyphens)
4. Copy the format from `powerbi-example.md`
5. Replace with your project details and PowerBI embed code

#### Getting Your PowerBI Embed Code:
1. Open your PowerBI report in PowerBI Service
2. Click **File** → **Embed report** → **Website or portal**
3. Copy the `<iframe>` code
4. Paste it in your project markdown file

## 📁 File Structure

```
your-portfolio/
├── _config.yml           # Site settings (your name, title)
├── index.md              # Homepage
├── about.md              # About page
├── projects.md           # Projects listing page
├── _projects/            # Your project files
│   └── powerbi-example.md
└── assets/               # Images and files
    └── images/
```

## 📝 Writing in Markdown

Markdown is simple! Here are the basics:

```markdown
# Heading 1
## Heading 2
### Heading 3

**Bold text**
*Italic text*

[Link text](https://example.com)

![Image](assets/images/photo.jpg)

- Bullet point
- Another point

1. Numbered item
2. Another item
```

## 🎨 Changing the Theme

Want a different look? Edit `_config.yml` and change the theme line to one of these:

```yaml
theme: jekyll-theme-minimal
theme: jekyll-theme-cayman
theme: jekyll-theme-slate
theme: jekyll-theme-architect
theme: jekyll-theme-dinky
theme: jekyll-theme-hacker
```

## 💡 Tips

- Changes take 1-2 minutes to appear on your live site
- You can edit files directly on GitHub (no need to install anything)
- Save changes by clicking "Commit changes"
- Preview your markdown using GitHub's preview tab

## 🆘 Need Help?

- Check if GitHub Pages is enabled in Settings → Pages
- Make sure your repository is named correctly: `yourusername.github.io`
- Wait a few minutes after making changes
- Check the Actions tab to see if your site is building

## 📚 Resources

- [Markdown Guide](https://www.markdownguide.org/basic-syntax/)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Jekyll Documentation](https://jekyllrb.com/docs/)

---

**Ready to customize? Start with `_config.yml` and `index.md`!**
