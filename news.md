---
layout: default
permalink: /news
title: News
---

# ODI News
      
<ul>
    {% for post in site.categories.news %}
          <li>
                <a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a>
                {{ post.excerpt }}
          </li>
    {% endfor %}
</ul>
