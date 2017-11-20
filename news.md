---
layout: default
permalink: /news
title: News
---

# ODI News
      
<ul>
    {% for post in site.categories.news %}
          <li>
                {{ post.excerpt }}<br>
                <a href="{{ site.baseurl }}{{ post.url }}">go to news details</a>
          </li>
    {% endfor %}
</ul>
