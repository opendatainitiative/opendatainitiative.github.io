---
layout: default
permalink: /events
title: Events
---

# Events
      
{% for post in site.posts %}
      {% if page.category == 'Events' %}
        * [{{ post.title }}]({{ post.url }})
          {{ post.excerpt }}
{% endfor %}
