---
layout: default
permalink: /events
title: Events
---

# Events
      
{% for post in site.posts %}
      {% if page.category == 'events' %}
        * [{{ post.title }}]({{ post.url }})
          {{ post.excerpt }}
      {% endif %}
{% endfor %}
