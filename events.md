---
layout: default
permalink: /events
title: Events
---

# Events

<ul>
    {% for post in site.posts %}
          <li>
            {% if page.category == 'events' %}
                <a href="{{ post.title }}">({{ post.url }})</a>
                {{ post.excerpt }}
            {% endif %}
          </li>
    {% endfor %}
</ul>
