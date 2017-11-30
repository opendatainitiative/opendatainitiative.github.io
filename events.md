---
layout: default
permalink: /events
title: Events
---

# Events

<ul>
    {% for post in site.categories.events %}
          <li>
                {{ post.excerpt }}<br>
                <a href="{{ site.baseurl }}{{ post.url }}">go to event details</a>
          </li>
    {% endfor %}
</ul>
