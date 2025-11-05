---
layout: default
title: My Projects
---

# My Projects

Here are some of the projects I've worked on. Click on any project to see more details.

---

{% for project in site.projects %}
## [{{ project.title }}]({{ project.url }})

{{ project.description }}

**Date:** {{ project.date | date: "%B %Y" }}

[View Project]({{ project.url }})

---
{% endfor %}

## Want to See More?

Check out my [GitHub profile](https://github.com/yourusername) for more projects and code samples.

---

[Back to Home](.) | [About Me](about)
