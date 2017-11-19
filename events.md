---
layout: default
permalink: /events
title: Events
---

# Events

<ul>
    {% for post in site.categories.events %}
          <li>
                <a href="{{ site.baseurl }}/{{ post.url }}">({{ post.title }})</a>
                {{ post.excerpt }}
          </li>
    {% endfor %}
</ul>
