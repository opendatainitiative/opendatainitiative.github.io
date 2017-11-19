---
layout: default
permalink: /users
title: Users
---

# User Stories
      
<ul>
    {% for post in site.categories.users %}
          <li>
                <a href="{{ site.baseurl }}{{ post.url }}">({{ post.title }})</a>
                {{ post.excerpt }}
          </li>
    {% endfor %}
</ul>
