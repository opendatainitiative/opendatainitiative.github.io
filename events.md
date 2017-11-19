---
layout: default
permalink: /events
title: Events
---

# Events

<ul>
    {% for post in site.posts %}
          <li>
            {% if page.categories == 'events' %}
                <br /> blahh
                <a href="{{ post.title }}">({{ post.url }})</a>
                {{ post.excerpt }}
            {% endif %}
          </li>
    {% endfor %}
</ul>
