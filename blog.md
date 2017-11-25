---
layout: default
permalink: /blog
title: Blog
---

# ODI Blog
      
<ul>
    {% for post in site.categories.blog %}
          <li>
                {{ post.excerpt }}<br>
                <a href="{{ site.baseurl }}{{ post.url }}">go to blog details</a>
          </li>
    {% endfor %}
</ul>
