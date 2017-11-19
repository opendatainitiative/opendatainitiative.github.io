---
layout: default
permalink: /events
title: Events
---

# Events
      
{% for post in site.posts[page.category.events] %}
      * [{{ post.title }}]({{ post.url }})
      {{ post.excerpt }}
{% endfor %}
