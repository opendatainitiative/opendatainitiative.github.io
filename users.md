---
layout: default
permalink: /users
title: Users
---

# User Stories
      
<ul>
    {% for post in site.categories.users %}
          <li>
                {{ post.excerpt }}<br>
                <a href="{{ site.baseurl }}{{ post.url }}">go to user story details</a>
          </li>
    {% endfor %}
</ul>
